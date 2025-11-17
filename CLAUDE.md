# AI Embassy Frontend - Developer Guide for AI Assistants

This document provides comprehensive guidance for AI assistants working on the AI Embassy frontend codebase. It covers project structure, conventions, workflows, and best practices.

## Project Overview

**AI Embassy** is a foundation focused on AI education, offering free workshops, events, and research projects. This is the organization's public-facing website built with Next.js.

### Tech Stack

- **Framework**: Next.js 10.1.3 (Pages Router)
- **UI Library**: React 16.13.1
- **Language**: TypeScript 3.9.7
- **Styling**: Styled Components 5.1.1
- **Internationalization**: next-translate 1.0.6 (Polish, English)
- **Animations**: Framer Motion 2.5.1
- **Forms**: React Hook Form 6.0.4 + Yup 0.29.1
- **HTTP Client**: Axios 0.19.2
- **Carousels**: Swiper 6.1.1

### Key Features

- Multi-language support (Polish as default, English)
- Multiple page layouts (default, landing, list)
- Workshop and event management
- Project showcase
- Contact forms with validation
- Responsive design with animations
- SEO-friendly meta tags

## Project Structure

```
aiembassy-frontend/
├── pages/                      # Next.js pages (routing)
│   ├── _app.tsx               # Custom App component
│   ├── _document.tsx          # Custom Document component
│   ├── index.tsx              # Homepage
│   ├── contact/               # Contact page
│   ├── donation/              # Donation page
│   ├── events/                # Events page
│   ├── landing/               # Landing pages
│   ├── link/                  # Link page
│   ├── projects/              # Projects page
│   └── workshops/             # Workshops page
├── src/
│   ├── components/            # Reusable React components
│   │   ├── About/
│   │   ├── Benefits/
│   │   ├── Contact/
│   │   ├── Events/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── LanguageSwitch/
│   │   ├── Menu/
│   │   ├── MetaTags/
│   │   ├── Modals/           # Modal components
│   │   ├── Opinions/
│   │   ├── Projects/
│   │   ├── Support/
│   │   ├── Team/
│   │   ├── WorkshopTable/
│   │   ├── _forms/           # Form components
│   │   ├── _layout/          # Layout components
│   │   └── _universal/       # Universal/shared components
│   ├── landing/              # Landing page specific components
│   │   ├── LandingHeader/
│   │   ├── LandingTraining/
│   │   ├── LandingWorkshops/
│   │   ├── LandingContact/
│   │   ├── LandingInformation/
│   │   └── LandingWorkshopsContainer/
│   ├── shared/               # Shared resources
│   │   ├── api/             # API integration code
│   │   ├── data/            # Static data (projects, events, etc.)
│   │   └── styles/          # Global styles and themes
│   ├── services/            # Service layer
│   │   └── LocalStorageManager/
│   ├── types/               # TypeScript type definitions
│   │   └── models/
│   └── utils/               # Utility functions
├── locales/                 # Translation files
│   ├── en/                  # English translations
│   │   ├── about.json
│   │   ├── common.json
│   │   ├── contact.json
│   │   ├── donation.json
│   │   ├── events.json
│   │   ├── landing.json
│   │   ├── menu.json
│   │   ├── projects.json
│   │   └── workshops.json
│   └── pl/                  # Polish translations (same structure)
├── public/                  # Static assets
│   ├── docs/
│   ├── favicon/
│   └── images/
├── i18n.json               # i18n configuration
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── .eslintrc.js           # ESLint configuration
├── .prettierrc.js         # Prettier configuration
└── commitlint.config.js   # Commitlint configuration
```

## File Naming Conventions

### Components

Components follow a **directory-per-component** pattern:

```
ComponentName/
├── ComponentName.tsx         # Component logic
└── ComponentName.styled.tsx  # Styled components
```

**Example:**
```typescript
// About/About.tsx
import React from 'react';
import { AboutWrapper, SectionTitle } from './About.styled';

const About: React.FC = () => {
    return <AboutWrapper>...</AboutWrapper>;
};

export default About;
```

```typescript
// About/About.styled.tsx
import styled from 'styled-components';

export const AboutWrapper = styled.section`
    padding: 60px 0;
`;

export const SectionTitle = styled.h2`
    font-size: 32px;
`;
```

### Special Directory Prefixes

- `_forms/` - Form-related components
- `_layout/` - Layout components
- `_universal/` - Universal/reusable components

## Import Path Aliases

The project uses TypeScript path aliases configured in `tsconfig.json`:

```typescript
import About from '@components/About/About';
import { Container } from '@shared/styles/global.styled';
import { apiEndpoints } from '@services/api';
import { Project } from '@@types/models/Project';
import { formatDate } from '@utils/date';
import landingImage from '@public/images/landing.jpg';
```

**Available Aliases:**
- `@components/*` → `src/components/*`
- `@containers/*` → `src/containers/*`
- `@landing/*` → `src/landing/*`
- `@services/*` → `src/services/*`
- `@shared/*` → `src/shared/*`
- `@@types/*` → `src/types/*`
- `@utils/*` → `src/utils/*`
- `@public/*` → `public/*`

**Important:** Always use these aliases instead of relative paths for better maintainability.

## Internationalization (i18n)

### Configuration

The project uses `next-translate` with Polish as the default locale.

**Supported Languages:**
- `pl` (Polish) - default
- `en` (English)

### Translation Files

Translations are organized by namespace in `locales/{locale}/{namespace}.json`:

```json
// locales/en/common.json
{
    "page_title": "AI Embassy - Free AI Workshops",
    "page_description": "Learn AI with free workshops",
    "about_title": "About Us"
}
```

### Using Translations

```typescript
import useTranslation from 'next-translate/useTranslation';

const Component: React.FC = () => {
    const { t, lang } = useTranslation('common');

    return (
        <div>
            <h1>{t('about_title')}</h1>
            <p>{t('menu:contact')}</p> {/* Cross-namespace */}
        </div>
    );
};
```

### Page-specific Namespaces

Configured in `i18n.json`:
- All pages use: `common`, `menu`, `about`
- `/contact` adds: `contact`
- `/donation` adds: `donation`
- `/events` adds: `events`
- `/projects` adds: `projects`
- `/workshops` adds: `workshops`
- `/landing` adds: `landing`

### Adding New Translations

1. Add the key to both `locales/en/{namespace}.json` and `locales/pl/{namespace}.json`
2. Use descriptive key names: `section_title`, `button_submit`, `error_required`
3. Ensure both languages have the same keys

## Styling System

### Styled Components Pattern

The project uses styled-components with a theme system.

**Theme Files:**
- `src/shared/styles/default.theme.ts` - Default theme
- `src/shared/styles/dark.theme.ts` - Dark theme (if applicable)

**Theme Structure:**
```typescript
const defaultTheme = {
    borderRadius: {
        default: 8,
        button: 10,
        circle: 50,
    },
    colors: {
        black: '#000000',
        white: '#FFFFFF',
        gray: '#C9C9C9',
        text: '#3B4949',
        red: '#FF2936',
        green: '#008C8C',
        green_hover: '#006666',
        yellow: '#D7C4A3',
        bg: '#F6F6F6',
        bg_gray: '#EDEDED',
        // ... more colors
    },
    fontFamily: {
        openSans: '"Open Sans", sans-serif',
        roboto: '"Roboto", sans-serif',
        merriweather: '"Merriweather", sans-serif',
    },
    fontSizes: {
        xs: 10,
        // ... more sizes
    },
    // ... more theme properties
};
```

### Using Theme in Components

```typescript
import styled from 'styled-components';

export const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.green};
    border-radius: ${({ theme }) => theme.borderRadius.button}px;
    font-family: ${({ theme }) => theme.fontFamily.openSans};

    &:hover {
        background-color: ${({ theme }) => theme.colors.green_hover};
    }
`;
```

### Global Styles

Global styles are defined in `src/shared/styles/global.styled.tsx`:
- Base resets and normalization
- Container styles
- Typography helpers

## Layout System

The application uses a custom layout system defined in `pages/_app.tsx`.

### Three Layout Types

1. **Default Layout** (no layout prop)
   - Homepage sections: Hero, About, Benefits, Projects, Team, Opinions, Events, Contact, Footer

2. **Landing Layout** (`layout: 'landing'`)
   - LandingHeader, LandingTraining, LandingInformation, LandingWorkshops, LandingContact, Footer

3. **List Layout** (`layout: 'list'`)
   - LandingHeader, LandingWorkshopsContainer, LandingContact, Footer

### Setting Layout in Pages

```typescript
// pages/landing/index.tsx
export const getStaticProps = () => {
    return {
        props: {
            layout: 'landing',
        },
    };
};
```

## Forms and Validation

### Form Pattern

Uses React Hook Form + Yup for validation.

```typescript
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

const schema = yup.object().shape({
    email: yup.string().email().required(),
    name: yup.string().required(),
});

const ContactForm: React.FC = () => {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        // Handle form submission
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="email" ref={register} />
            {errors.email && <span>{errors.email.message}</span>}
        </form>
    );
};
```

## Data Management

### Static Data

Static data (projects, events, opinions) is stored in `src/shared/data/`:

```typescript
// src/shared/data/projects.ts
export default {
    pl: {
        smogspots: {
            shortTitle: 'SmogSpots',
            shortDescription: '...',
            category: 'Projekt badawczy',
            imagePath: '/images/...',
            date: 'Styczeń 2020',
            title: 'SmogSpots',
            text: '<section>...</section>',
        },
    },
    en: {
        smogspots: {
            // English version
        },
    },
};
```

### API Integration

API calls are made using Axios. API configuration is in `src/shared/api/`.

## Animations

### Framer Motion

The project uses Framer Motion for animations:

```typescript
import { motion } from 'framer-motion';

const Component = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        Content
    </motion.div>
);
```

### Page Transitions

Configured in `pages/_app.tsx` with `AnimatePresence`:

```typescript
<AnimatePresence>
    <Component key={router.route} {...pageProps} />
</AnimatePresence>
```

## Code Style and Linting

### ESLint Configuration

- **Base**: Airbnb style guide
- **TypeScript**: @typescript-eslint plugin
- **React**: React plugin with recommended rules
- **Prettier**: Integrated with ESLint

### Prettier Configuration

```javascript
{
    bracketSpacing: true,
    jsxBracketSameLine: false,
    tabWidth: 4,              // 4 spaces for indentation
    singleQuote: true,        // Use single quotes
    trailingComma: 'all',     // Trailing commas everywhere
}
```

### Key ESLint Rules

- React files must use `.ts` or `.tsx` extensions
- No prop-types required (TypeScript handles this)
- Import extensions disabled
- No default export preference
- JSX spreading allowed for custom components
- Anchor validity checks disabled (Next.js Link handling)

### Running Linter

```bash
npm run lint              # Run ESLint
npm run prettier:write    # Format code with Prettier
```

## Development Workflow

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Opens at http://localhost:3000

# Build for production
npm run build

# Start production server
npm start
```

### Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create optimized production build
- `npm start` - Start production server (requires build first)
- `npm run lint` - Run ESLint on `.ts` and `.tsx` files
- `npm run prettier:write` - Format all TypeScript and JSON files
- `npm run release` - Create new version using standard-version
- `npm run get-next-version` - Get next semantic version

### Git Workflow

#### Commit Messages

The project uses **Conventional Commits** enforced by Commitlint:

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(workshops): add workshop filtering feature
fix(contact): resolve form validation issue
docs(readme): update installation instructions
refactor(components): simplify Header component logic
```

#### Versioning

Uses **standard-version** with Angular preset:

```bash
npm run release
# Automatically:
# 1. Bumps version in package.json
# 2. Updates CHANGELOG.md
# 3. Creates git tag
# 4. Commits changes
```

#### Git Hooks

**Husky** is configured for:
- Pre-commit: Runs `pretty-quick` to format staged files
- Commit-msg: Validates commit message format

## Common Development Tasks

### Adding a New Component

1. Create component directory in appropriate location:
   ```bash
   mkdir src/components/NewComponent
   ```

2. Create component files:
   ```typescript
   // src/components/NewComponent/NewComponent.tsx
   import React from 'react';
   import { Wrapper } from './NewComponent.styled';

   const NewComponent: React.FC = () => {
       return <Wrapper>Content</Wrapper>;
   };

   export default NewComponent;
   ```

   ```typescript
   // src/components/NewComponent/NewComponent.styled.tsx
   import styled from 'styled-components';

   export const Wrapper = styled.div`
       padding: 20px;
   `;
   ```

3. Import and use in parent component:
   ```typescript
   import NewComponent from '@components/NewComponent/NewComponent';
   ```

### Adding a New Page

1. Create page file in `pages/` directory:
   ```typescript
   // pages/new-page.tsx
   import React from 'react';
   import Layout from '@components/_layout/Layout.view';
   import useTranslation from 'next-translate/useTranslation';
   import { motion } from 'framer-motion';

   const NewPage = () => {
       const { t } = useTranslation('common');

       return (
           <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
           >
               <Layout
                   meta={{
                       title: t('new_page_title'),
                       description: t('new_page_description'),
                       keywords: t('new_page_keywords'),
                   }}
               />
               {/* Page content */}
           </motion.div>
       );
   };

   export default NewPage;
   ```

2. Add translations to locale files
3. Update `i18n.json` if new namespaces needed

### Adding a New Translation Namespace

1. Update `i18n.json`:
   ```json
   {
       "pages": {
           "/new-page": ["common", "menu", "new-namespace"]
       }
   }
   ```

2. Create translation files:
   - `locales/en/new-namespace.json`
   - `locales/pl/new-namespace.json`

3. Use in component:
   ```typescript
   const { t } = useTranslation('new-namespace');
   ```

### Modifying Styles/Theme

1. Edit theme file: `src/shared/styles/default.theme.ts`
2. Add new color/spacing/font:
   ```typescript
   colors: {
       // ... existing colors
       newColor: '#123456',
   },
   ```
3. Use in styled component:
   ```typescript
   color: ${({ theme }) => theme.colors.newColor};
   ```

## Testing Strategy

### Current State

The project currently lacks comprehensive test coverage. When adding tests:

**Recommended Testing Libraries:**
- Jest for unit testing
- React Testing Library for component testing
- Cypress or Playwright for E2E testing

**Areas to Prioritize:**
1. Form validation logic
2. Translation rendering
3. Theme application
4. Component rendering with different props
5. API integration points

## Performance Considerations

### Next.js Optimization

- Use `next/image` for image optimization
- Implement code splitting for large components
- Use dynamic imports for heavy dependencies
- Leverage `getStaticProps` for static pages

### Bundle Size

Monitor and optimize bundle size:
```bash
npm run build
# Check .next folder size and analyze bundle
```

## Common Pitfalls and Solutions

### 1. Import Path Issues

**Problem:** Relative imports break when moving files
**Solution:** Always use path aliases (`@components`, `@shared`, etc.)

### 2. Translation Missing

**Problem:** Translation key not found
**Solution:**
- Ensure key exists in both `en` and `pl` locale files
- Check namespace is loaded in `i18n.json` for the page
- Use browser DevTools to check console warnings

### 3. Styled Components Not Applying

**Problem:** Styles not rendering
**Solution:**
- Ensure ThemeProvider wraps component tree
- Check theme property names match theme object
- Verify styled component is imported from `.styled.tsx` file

### 4. TypeScript Errors with Theme

**Problem:** Theme properties showing type errors
**Solution:**
- Update `src/types/styled.d.ts` with theme interface
- Restart TypeScript server in IDE

### 5. Layout Not Rendering Correctly

**Problem:** Wrong layout appearing
**Solution:**
- Check `layout` prop in page's `getStaticProps`
- Verify layout logic in `pages/_app.tsx`
- Clear `.next` folder and rebuild

## Debugging Tips

### Next.js Debugging

1. Enable source maps in `next.config.js`
2. Use React Developer Tools browser extension
3. Check `.next` folder for build artifacts
4. Use `console.log` strategically (remove before commit)

### Translation Debugging

```typescript
// Log current locale and available translations
const { lang } = useTranslation();
console.log('Current locale:', lang);
```

### Style Debugging

```typescript
// Log theme in styled component
export const Wrapper = styled.div`
    ${({ theme }) => {
        console.log('Theme:', theme);
        return '';
    }}
`;
```

## Build and Deployment

### Build Output

```bash
npm run build
# Creates:
# - out/ directory (configured in next.config.js)
# - Serverless target
```

### Environment Variables

If needed, create `.env.local`:
```
NEXT_PUBLIC_API_URL=https://api.example.com
```

Access in code:
```typescript
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

### Deployment Checklist

- [ ] Run `npm run lint` - no errors
- [ ] Run `npm run build` - successful build
- [ ] Test translations in both languages
- [ ] Verify responsive design
- [ ] Check browser console for errors
- [ ] Test forms and validation
- [ ] Verify meta tags for SEO
- [ ] Check image loading and optimization

## Additional Resources

### Next.js Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Pages Router](https://nextjs.org/docs/pages)

### Library Documentation
- [Styled Components](https://styled-components.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Hook Form](https://react-hook-form.com/)
- [next-translate](https://github.com/vinissimus/next-translate)

### Code Quality
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Conventional Commits](https://www.conventionalcommits.org/)

## Support and Questions

For questions about this codebase:
1. Check this CLAUDE.md file
2. Review existing similar components for patterns
3. Check Next.js and library documentation
4. Review git history for context on changes

---

**Last Updated:** 2025-11-17
**Project Version:** 0.2.0
**Node Version Required:** 14.x or higher

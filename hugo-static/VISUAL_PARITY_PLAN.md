# Visual Parity Implementation Plan

**Goal:** Make Hugo site look and behave **identically** to Next.js original
**Status:** Planning Phase
**Priority:** High

## Critical Visual Differences to Fix

### 1. 🔴 **Modal Overlay System** (High Priority)

**Current State:**
- Hugo: Full page navigation to `/workshops/slug/`, `/projects/slug/`, `/events/slug/`
- Next.js: Modal overlays that slide in from the right with semi-transparent backdrop

**Original Behavior:**
```
- Click workshop → Modal slides in from right (600ms transition)
- Semi-transparent green backdrop: rgba(11, 61, 59, 0.9)
- Modal width: 1055px (865px for contact form)
- Back button → Modal slides out, returns to previous page
- Close button (X) in top right
- Scroll within modal, not behind it
```

**Implementation Plan:**
- [ ] Add modal HTML structure to layouts
- [ ] Create modal.js for modal routing (intercept clicks, update URL hash)
- [ ] Add modal styles matching exact dimensions and transitions
- [ ] Implement history.pushState for browser back button support
- [ ] Add keyboard ESC to close
- [ ] Body scroll lock when modal open

### 2. 🔴 **Exact Theme Values** (High Priority)

**Current State:**
- Hugo: Approximate SCSS variables
- Next.js: Precise theme object with specific values

**Original Theme (must match exactly):**
```typescript
borderRadius: { default: 8, button: 10, circle: 50 }
colors: {
    black: '#000000', white: '#FFFFFF', gray: '#C9C9C9',
    dark_gray: '#8A9292', text: '#3B4949', red: '#FF2936',
    green: '#008C8C', green_hover: '#006666', yellow: '#D7C4A3',
    bg: '#F6F6F6', bg_gray: '#EDEDED',
    facebook: '#1877F2', twitter: '#1DA1F2', linkedIn: '#007BB5'
}
fontSizes: {
    xs: 10px, s: 12px, m: 14px, l: 16px, xl: 18px, xxl: 20px,
    button: 13px, menu: 15px, hero_subtitle: 24px,
    modal_title: 32px, section_title: 42px, hero: 50px
}
fontWeight: { light: 300, regular: 400, semi_bold: 600, bold: 700, black: 900 }
transitions: { default: 0.3s, modal: 0.6s }
```

**Implementation Plan:**
- [ ] Update `assets/scss/_variables.scss` with exact values
- [ ] Create SCSS mixins for transitions
- [ ] Verify all components use correct theme values
- [ ] Add CSS custom properties for runtime values

### 3. 🟡 **Page Transition Animations** (Medium Priority)

**Current State:**
- Hugo: Basic CSS scroll animations
- Next.js: Framer Motion page transitions (fade in/out on route change)

**Original Behavior:**
```jsx
<AnimatePresence>
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
```

**Implementation Plan:**
- [ ] Add lightweight animation library (anime.js or custom)
- [ ] Implement fade in/out on page navigation
- [ ] Use View Transitions API (if browser supports)
- [ ] Fallback to CSS transitions for unsupported browsers

### 4. 🟡 **Component-Level Styling Precision** (Medium Priority)

**Areas to Match Exactly:**

**Hero Section:**
- [ ] Height: 665px (500px mobile)
- [ ] Border bottom-left radius: 50px
- [ ] Title font-size: 50px (42px tablet, 24px mobile)
- [ ] Subtitle font-size: 24px (18px mobile)
- [ ] Positioned decorative images (exact coordinates)
- [ ] Fixed header with scroll background change

**Modal:**
- [ ] Width: 1055px or 865px (small)
- [ ] Slide-in transform transition: 0.6s
- [ ] Padding: 70px 100px 40px (exact spacing)
- [ ] Title font-size: 32px (24px mobile)
- [ ] Background color: #F6F6F6 for content area

**Buttons:**
- [ ] Font-size: 13px
- [ ] Border-radius: 10px
- [ ] Letter-spacing: 0.22em
- [ ] Uppercase text-transform
- [ ] Transition: 0.3s

### 5. 🟡 **Landing Pages** (Medium-High Priority)

**Missing Pages:**
- `/landing/[landingId]` - Training detail landing pages
- `/landing/list` - Workshop list landing page

**Original Components:**
1. LandingHeader - Custom header with different styling
2. LandingTraining - Hero section with training info
3. LandingInformation - Trainer profile + training details
4. LandingWorkshops - Filtered workshop carousel
5. LandingContact - Contact CTA section

**Data Structure:**
```typescript
trainings.ts = {
    pl: {
        'wstep-do-ai': {
            category, title, image, description,
            sections: [{ title, bulletPoints[] }],
            summary, trainer: { photo, name, position, bio, socialLinks[] }
        }
    }
}
```

**Implementation Plan:**
- [ ] Create `content/landing/` structure
- [ ] Port `trainings.ts` to YAML data files
- [ ] Create `layouts/landing/single.html` and `list.html`
- [ ] Implement LandingHeader partial
- [ ] Implement LandingTraining partial
- [ ] Implement LandingInformation partial
- [ ] Implement trainer card styling
- [ ] Create workshop filtering for landing pages

### 6. 🟢 **Interactive Components** (Lower Priority)

**Carousel:**
- [ ] Match Swiper.js behavior (or use actual Swiper.js)
- [ ] Exact same touch/swipe sensitivity
- [ ] Same pagination and navigation styling

**Forms:**
- [ ] Add real-time validation (as user types)
- [ ] Match exact error message styling
- [ ] Add field-level error display
- [ ] Implement cross-field validation if needed

**Mobile Menu:**
- [ ] Match slide-in animation timing
- [ ] Exact same backdrop opacity
- [ ] Same menu item spacing and styling

## Implementation Priority

### Phase 1: Core Visual Parity (Week 1)
1. ✅ Port exact theme values to SCSS
2. ✅ Implement modal overlay system
3. ✅ Fix Hero section precise styling
4. ✅ Update button and typography styling

### Phase 2: Interactive Enhancements (Week 2)
1. ✅ Add page transition animations
2. ✅ Enhance carousel to match Swiper.js
3. ✅ Improve form validation
4. ✅ Test all animations and transitions

### Phase 3: Landing Pages (Week 3)
1. ✅ Create landing page layouts
2. ✅ Port trainings data
3. ✅ Build all landing components
4. ✅ Test landing page functionality

### Phase 4: Polish & Testing (Week 4)
1. ✅ Cross-browser testing
2. ✅ Mobile responsiveness testing
3. ✅ Performance optimization
4. ✅ Visual regression testing (screenshots)

## Success Criteria

- [ ] Side-by-side screenshots match pixel-perfect
- [ ] All animations have same timing and easing
- [ ] Modal behavior identical (open, close, navigation)
- [ ] Landing pages fully functional
- [ ] No visual regressions on any page
- [ ] All interactive elements behave identically
- [ ] Performance maintains or improves

## Files to Create/Modify

### New Files:
- `assets/js/modal.js` - Modal routing and behavior
- `layouts/landing/single.html` - Training landing page
- `layouts/landing/list.html` - Workshop list landing
- `layouts/partials/modal.html` - Modal overlay template
- `layouts/partials/landing-header.html`
- `layouts/partials/landing-training.html`
- `layouts/partials/landing-information.html`
- `data/trainings.yaml` - Training data

### Modify Files:
- `assets/scss/_variables.scss` - Exact theme values
- `assets/scss/components/_modals.scss` - Modal styling
- `assets/scss/components/_hero.scss` - Precise hero styling
- `assets/scss/components/_buttons.scss` - Exact button styling
- `assets/js/main.js` - Add modal JavaScript
- `layouts/_default/baseof.html` - Add modal container

## Testing Checklist

- [ ] Visual comparison: Next.js vs Hugo (screenshots)
- [ ] Modal open/close behavior
- [ ] Browser back button with modals
- [ ] Mobile menu animations
- [ ] Form validation
- [ ] Carousel functionality
- [ ] Landing pages
- [ ] Cross-browser (Chrome, Firefox, Safari, Edge)
- [ ] Mobile (iOS Safari, Android Chrome)
- [ ] Accessibility (keyboard navigation, screen readers)
- [ ] Performance (Lighthouse scores)

---

**Next Steps:**
1. Start with Phase 1: Core Visual Parity
2. Implement modal system first (highest impact)
3. Port exact theme values
4. Test each change iteratively

import { css } from 'styled-components';

export const sectionStyleCss = css`
    margin-bottom: 50px;
`;

export const dateStyleCss = css`
    color: ${({ theme }) => theme.colors.dark_gray};
    font-size: ${({ theme }) => theme.fontSizes.m}px;
    line-height: 1.45;
`;

export const headingStyleCss = css`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes.xxl}px;
    line-height: 1.8;
    margin-bottom: 20px;
`;

export const paragraphStyleCss = css`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes.l}px;
    line-height: 1.75;
`;

export const listElementsStyleCss = css`
    display: flex;
    flex-direction: column;
    margin-left: -5px;
    padding-left: 0;

    img {
        margin-right: 20px;
    }

    li {
        align-items: center;
        color: ${({ theme }) => theme.colors.text};
        display: flex;
        font-size: ${({ theme }) => theme.fontSizes.l}px;
        margin-top: 8px;
    }
`;

export const anchorLinkStyleCss = css`
    align-items: center;
    color: ${({ theme }) => theme.colors.green};
    display: flex;
    font-size: ${({ theme }) => theme.fontSizes.l}px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: 1.8;
    margin-bottom: 10px;
    margin-right: 10px;
    text-decoration: none;
    transition: all ${({ theme }) => theme.transitions.default}s;

    svg {
        margin-left: 16px;
    }

    &:hover {
        color: ${({ theme }) => theme.colors.yellow};

        svg path {
            fill: ${({ theme }) => theme.colors.yellow};
        }
    }
`;

export const galleryStyleCss = css`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    div {
        height: 250px;
        margin-bottom: 24px;
        width: calc(50% - 12px);

        @media (max-width: 767px) {
            width: 100%;
        }

        img {
            border-radius: ${({ theme }) => theme.borderRadius.default}px;
            height: 100%;
            object-fit: cover;
            width: 100%;
        }
    }
`;

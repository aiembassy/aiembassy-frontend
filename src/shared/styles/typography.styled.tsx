import styled, { css } from 'styled-components';
import { ColorType, FontSizes, FontWeight } from '@@types/CommonTypes';

export interface ITextProps {
    center?: boolean;
    color?: ColorType;
    fontSize?: FontSizes;
    fontStyle?: boolean;
    fontWeight?: FontWeight;
    italic?: boolean;
}

export const repeatableStyles = css<ITextProps>`
    color: ${({ theme, color }) =>
        color ? theme.colors[color] : theme.colors.text};
    font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
    font-weight: ${({ theme, fontWeight }) =>
        fontWeight ? theme.fontWeight : theme.fontWeight.regular};
    text-align: ${({ center }) => (center ? 'center' : 'left')};
`;

export const DefaultText = styled.p<ITextProps>`
    ${repeatableStyles};
    font-size: ${({ theme, fontSize }) =>
        fontSize ? theme.fontSizes[fontSize] : theme.fontSizes.l}px;
    line-height: 1.5;
    margin-top: 0;
`;

export const LinkText = styled.a<ITextProps>`
    color: ${({ theme, color }) =>
        color ? theme.colors[color] : theme.colors.green};
    cursor: pointer;
    display: inline;
    font-size: ${({ theme, fontSize }) =>
        fontSize ? theme.fontSizes[fontSize] : theme.fontSizes.l}px;
    position: relative;
    text-decoration: underline;
    text-underline-position: under;
    transition: all ${({ theme }) => theme.transitions.default}s;

    &:hover {
        color: ${({ theme, color }) =>
            color ? theme.colors[color] : theme.colors.green_hover};
    }
`;

export const BoldText = styled.span`
    font-weight: ${({ theme }) => theme.fontWeight.semi_bold};
`;

export const BigTitle = styled.h1<ITextProps>`
    ${repeatableStyles};
    font-family: ${({ theme }) => theme.fontFamily.merriweather};
    font-size: ${({ theme, fontSize }) =>
    fontSize ? theme.fontSizes[fontSize] : theme.fontSizes.hero}px;
`;

export const Title = styled.h2<ITextProps>`
    ${repeatableStyles};
    font-family: ${({ theme }) => theme.fontFamily.merriweather};
    font-size: ${({ theme, fontSize }) =>
        fontSize ? theme.fontSizes[fontSize] : theme.fontSizes.section_title}px;
`;

export const Subtitle = styled.h3<ITextProps>`
    ${repeatableStyles};
    font-size: ${({ theme, fontSize }) =>
        fontSize ? theme.fontSizes[fontSize] : theme.fontSizes.xxl}px;
`;

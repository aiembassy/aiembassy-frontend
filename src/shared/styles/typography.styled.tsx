import styled, { css } from "styled-components";
import { ColorType, FontSizes, FontWeight } from "@@types/CommonTypes";

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
    color ? theme.colors[color] : theme.colors.black};
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};
  font-weight: ${({ theme, fontWeight }) =>
    fontWeight ? theme.fontWeight : theme.fontWeight.regular};
  text-align: ${({ center }) => (center ? "center" : "left")};
`;

export const DefaultText = styled.p<ITextProps>`
  ${repeatableStyles};
  margin-top: 0;
  font-size: ${({ theme, fontSize }) =>
    fontSize ? theme.fontSizes[fontSize] : theme.fontSizes.m}px;
`;

export const LinkText = styled(DefaultText)`
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.blue};
  font-size: ${({ theme, fontSize }) =>
    fontSize ? theme.fontSizes[fontSize] : theme.fontSizes.m}px;
`;

export const Title = styled.h1<ITextProps>`
  ${repeatableStyles};
  font-size: ${({ theme, fontSize }) =>
    fontSize ? theme.fontSizes[fontSize] : theme.fontSizes.max}px;
`;

import styled from 'styled-components';
import { Container } from '@shared/styles/global.styled';

export const LandingHeaderWrapper = styled.header`
    background: ${({ theme }) => theme.colors.transparent};
    padding: 0;
    position: fixed;
    top: 0;
    transition: all ${({ theme }) => theme.transitions.default}s;
    width: 100%;
    z-index: 9999;

    &.scrolling {
        background: ${({ theme }) => theme.colors.bg};
    }
`;

export const LandingHeaderInner = styled(Container)`
    align-items: center;
    display: flex;
    justify-content: space-between;
`;

export const LinkWrapper = styled.a``;

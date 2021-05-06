import styled from 'styled-components';

export const MenuContainer = styled.div`
    align-items: center;
    display: flex;
`;

export const MenuWrapper = styled.ul`
    display: flex;
    list-style-type: none;
`;

export const MenuItem = styled.li`
    padding: 0 25px;
`;

export const MenuLink = styled.a`
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    display: block;
    font-family: ${({ theme }) => theme.fontFamily.openSans};
    font-weight: ${({ theme }) => theme.fontWeight.semi_bold};
    text-decoration: none;
    position: relative;
    transition: all ${({ theme }) => theme.transitions.default}s;

    &:after {
        background: ${({ theme }) => theme.colors.yellow};
        bottom: -5px;
        content: '';
        height: 1px;
        left: 0;
        position: absolute;
        transform: scaleX(0);
        transform-origin: left;
        transition: all ${({ theme }) => theme.transitions.default}s;
        width: 100%;
    }

    &:hover {
        color: ${({ theme }) => theme.colors.yellow};

        &:after {
            color: ${({ theme }) => theme.colors.yellow};
            transform: scaleX(1);
            transform-origin: left;
        }
    }

    &.is-active {
        color: ${({ theme }) => theme.colors.yellow};

        &:after {
            transform: scaleX(1);
        }
    }
`;

// modal link
export const ModalLink = styled.div`
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    display: block;
    font-family: ${({ theme }) => theme.fontFamily.openSans};
    font-weight: ${({ theme }) => theme.fontWeight.semi_bold};
    text-decoration: none;
    margin-left: 25px;
    position: relative;
    transition: all ${({ theme }) => theme.transitions.default}s;

    &:after {
        background: ${({ theme }) => theme.colors.yellow};
        bottom: -5px;
        content: '';
        height: 2px;
        left: 0;
        position: absolute;
        transform: scaleX(1);
        transform-origin: left;
        transition: all ${({ theme }) => theme.transitions.default}s;
        width: 100%;
    }

    &:hover {
        color: ${({ theme }) => theme.colors.yellow};

        &:after {
            color: ${({ theme }) => theme.colors.yellow};
            transform: scaleX(1);
            transform-origin: left;
        }
    }
`;

// Mobile menu

export const MenuBar = styled.span`
    background-color: ${({ theme }) => theme.colors.green};
    border-radius: 2px;
    display: block;
    height: 3px;
    width: 30px;
`;

export const MenuIcon = styled.div<{
    openMenu: boolean;
}>`
    cursor: pointer;
    display: block;
    height: 25px;
    margin: auto;
    position: absolute;
    right: 20px;
    top: 45px;
    width: 30px;
    z-index: 999;

    ${MenuBar}:nth-child(1) {
        animation: ${({ openMenu }) =>
            openMenu ? `inT 0.6s forwards` : `outT 0.6s backwards`};
        animation-direction: ${({ openMenu }) =>
            openMenu ? 'inherit' : 'reverse'};
    }

    ${MenuBar}:nth-child(2) {
        margin: 6px 0;
        animation: ${({ openMenu }) =>
            openMenu ? `inM 0.6s forwards` : `outM 0.6s backwards`};
        animation-direction: ${({ openMenu }) =>
            openMenu ? 'inherit' : 'reverse'};
    }

    ${MenuBar}:nth-child(3) {
        animation: ${({ openMenu }) =>
            openMenu ? `inBtm 0.6s forwards;` : `outBtm 0.6s backwards`};
        animation-direction: ${({ openMenu }) =>
            openMenu ? 'inherit' : 'reverse'};
    }

    @keyframes inM {
        50% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(45deg);
        }
    }

    @keyframes outM {
        50% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(45deg);
        }
    }

    @keyframes inT {
        0% {
            transform: translateY(0px) rotate(0deg);
        }
        50% {
            transform: translateY(9px) rotate(0deg);
        }
        100% {
            transform: translateY(9px) rotate(135deg);
        }
    }

    @keyframes outT {
        0% {
            transform: translateY(0px) rotate(0deg);
        }
        50% {
            transform: translateY(9px) rotate(0deg);
        }
        100% {
            transform: translateY(9px) rotate(135deg);
        }
    }

    @keyframes inBtm {
        0% {
            transform: translateY(0px) rotate(0deg);
        }
        50% {
            transform: translateY(-9px) rotate(0deg);
        }
        100% {
            transform: translateY(-9px) rotate(135deg);
        }
    }

    @keyframes outBtm {
        0% {
            transform: translateY(0px) rotate(0deg);
        }
        50% {
            transform: translateY(-9px) rotate(0deg);
        }
        100% {
            transform: translateY(-9px) rotate(135deg);
        }
    }
`;

export const MobileMenuContainer = styled.div<{
    openMenu: boolean;
}>`
    display: block;
    background-color: rgba(246, 246, 246, 0.92);
    height: 100vh;
    position: absolute;
    right: 0;
    top: 0;
    transform: ${({ openMenu }) =>
        openMenu ? `translateX(0)` : `translateX(100vw)`};
    transition: all ${({ theme }) => theme.transitions.modal}s;
    width: 300px;
`;

export const MobileMenuWrapper = styled(MenuWrapper)`
    align-items: flex-start;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    padding: 0;
    margin: 0;
`;

export const MobileMenuItem = styled(MenuItem)`
    font-size: ${({ theme }) => theme.fontSizes.xxl}px;
    margin: 15px 0;

    @media (max-width: 767px) {
        font-size: ${({ theme }) => theme.fontSizes.xl}px;
    }
`;

export const MobileMenuLink = styled(MenuLink)``;

export const MobileModalLink = styled(ModalLink)`
    font-size: ${({ theme }) => theme.fontSizes.xl}px;
    margin-bottom: 120px;
`;

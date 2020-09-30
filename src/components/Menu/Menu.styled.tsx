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
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    display: block;
    font-family: ${({ theme }) => theme.fontFamily.openSans};
    font-weight: ${({ theme }) => theme.fontWeight.semi_bold};
    text-decoration: none;
    position: relative;
    transition: all ${({ theme }) => theme.transitions.default}s;

    &:after {
        background: ${({ theme }) => theme.colors.white};
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

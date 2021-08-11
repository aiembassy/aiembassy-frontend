import styled from 'styled-components';

export const LandingWorkshopsContainerWrapper = styled.div`
    background: ${({ theme }) => theme.colors.bg};
    display: flex;
    flex-direction: column;
    padding: 100px 0 50px;

    @media (max-width: 1199px) {
        padding: 135px 0 60px;
    }
`;

import styled from "styled-components";

export const LogoWrapper = styled.div`
    width: 100%;
    max-width: 476px;
    height: auto;

    @media (max-width: 768px) {
        max-width: 357px;
    }

    @media (max-width: 480px) {
        max-width: 179px;
    }
`;

export const LogoWrapperMenu = styled(LogoWrapper)`
    width: 60%;
    margin: auto;
    padding: 0.6em 0;
`;

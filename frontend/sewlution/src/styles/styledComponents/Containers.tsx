import styled from "styled-components";

export const StartContainer = styled.div`
    background-color: white;
    width: 80vw;
    height: 80vh;
    border-radius: 75px;
    margin: auto;
    margin-top: 5%;
`;

export const ProjectOverviewContainer = styled.div`
    max-width: 80vw;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    margin-left: 10px;
    li {
        list-style: none;
    }
`;
export const ProjectViewContainer = styled.div`
    background-color: white;
    border-radius: 25px;
    width: 364px;
    height: 137px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProjectHeader = styled(ProjectViewContainer)`
    h1,
    p {
        margin: 0;
    }
`;

export const DeletedProjectsContainer = styled(ProjectViewContainer)`
    min-height: 450px;
    height: 100%;
    width: 75vw;
    margin-left: 22.5%;
    margin-top: 2.5rem;
`;
export const DeletedProjectContainer = styled(ProjectViewContainer)`
    background-color: #55736b;
    height: 119px;
    width: 285px;
`;

export const EditContainer = styled.div`
    background-color: white;
    width: 220px;
    border-radius: 25px;
`;

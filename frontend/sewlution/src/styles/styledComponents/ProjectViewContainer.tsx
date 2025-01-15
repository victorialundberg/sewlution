import styled from "styled-components";

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

export const TodoContainer = styled(ProjectViewContainer)`
    min-height: 150px;
    width: 579px;
    h2 {
        margin: 0;
    }
    .header {
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: 70% 15% 15%;
        background-color: #5c2332;
        color: white;
        :first-child {
            padding-left: 1rem;
        }
        :nth-child(2),
        :nth-child(3) {
            justify-self: center;
            align-self: center;
        }
    }
    ul {
        width: 100%;
        margin: 0;
        padding: 0;
        li {
            margin: 0;
            list-style: none;
        }
    }
`;

export const TodoItem = styled.li`
    width: 100%;
    padding: 0;
    display: grid;
    grid-template-columns: 70% 15% 15%;
    margin: 0;
    list-style: none;
    :first-child {
        padding-left: 1rem;
    }
    :nth-child(2),
    :nth-child(3) {
        justify-self: center;
        align-self: center;
    }
`;

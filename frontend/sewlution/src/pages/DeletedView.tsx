import {
    DeletedProjectsContainer,
    DeletedProjectContainer,
} from "../styles/styledComponents/Containers";

export const DeletedView = () => {
    return (
        <>
            <DeletedProjectsContainer>
                <h1>Deleted Projects</h1>
                <DeletedProjectContainer>
                    <h2>Project name</h2>
                    <button>Restore</button>
                    <button>Delete</button>
                </DeletedProjectContainer>
            </DeletedProjectsContainer>
        </>
    );
};

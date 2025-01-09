import { ProjectOverviewContainer } from "../../styles/styledComponents/ProjectOverviewContainer";
import { ProjectOverview } from "./ProjectOverview";

export const ProjectsOverview = () => {
    const user = localStorage.getItem("username");

    if (user) {
        console.log(user, "is signed in");
        // Read all projects
    } else {
        console.log("no user");
        // Something for fail safe
    }

    // List of projects, heading and add new+
    return (
        <>
            <ProjectOverviewContainer>
                <h1>Active Projects</h1>
                <ul>
                    <li>Title</li>
                    <li>Deadline</li>
                    <li>Added</li>
                </ul>
                <ul>
                    For each
                    <ProjectOverview></ProjectOverview>
                </ul>
                <button>Add new +</button>
            </ProjectOverviewContainer>
        </>
    );
};

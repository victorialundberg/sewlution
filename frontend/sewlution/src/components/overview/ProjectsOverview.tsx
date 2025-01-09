import { useNavigate } from "react-router-dom";
import { ProjectOverviewContainer } from "../../styles/styledComponents/ProjectOverviewContainer";
import { ProjectOverview } from "./ProjectOverview";
import { NewProjectButton } from "../widgets/NewProjectButton";

export const ProjectsOverview = () => {
    const user = localStorage.getItem("username");
    const navigate = useNavigate();

    if (user) {
        console.log(user, "is signed in");
        // Read all projects
    } else {
        console.log("no user");
        navigate("/");
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
                <NewProjectButton />
            </ProjectOverviewContainer>
        </>
    );
};

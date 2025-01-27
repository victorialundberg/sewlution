import { useLoaderData, useNavigate } from "react-router-dom";
import { ProjectOverview } from "./ProjectOverview";
import { IProject } from "../../models/IProject";
import { NewProjectButton } from "../buttons/NewProjectButton";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProjectViewWrapper } from "../../styles/styledComponents/Wrappers";
import { ProjectOverviewContainer } from "../../styles/styledComponents/Containers";
import { Heading } from "../../styles/styledComponents/Items";

export const ProjectsOverview = () => {
    const navigate = useNavigate();
    const [projects, setProjects] = useState(useLoaderData() as IProject[]);
    const user = localStorage.getItem("username");
    const [deleted, setDeleted] = useState(false);
    if (!user) navigate("/");

    useEffect(() => {
        const getUpdatedProjects = async (user: string) => {
            try {
                const response = await axios.post(
                    "http://localhost:3000/projects/read/all/projects",
                    { username: user }
                );
                setProjects(response.data);
            } catch (error) {
                console.log("Error fetching projects");
            }
        };

        if (deleted && user) {
            console.log("Projected deleted, refetching projects");
            getUpdatedProjects(user);
            setDeleted(false);
        }
    }, [deleted, user]);

    const onDelete = () => {
        setDeleted(true);
    };
    return (
        <>
            <ProjectViewWrapper>
                <ProjectOverviewContainer>
                    <Heading>Active Projects</Heading>
                    <ul className="overviewHeader">
                        <li>Title</li>
                        <li>Added</li>
                        <li>Deadline</li>
                        <li>Options</li>
                    </ul>
                    <ul>
                        {projects.map((project) => (
                            <ProjectOverview
                                onDelete={onDelete}
                                project={project}
                                key={project.project_id}
                            ></ProjectOverview>
                        ))}
                    </ul>
                    <div className="overviewFooter">
                        <NewProjectButton />
                    </div>
                </ProjectOverviewContainer>
            </ProjectViewWrapper>
        </>
    );
};

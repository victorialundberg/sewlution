import { useLoaderData, useNavigate } from "react-router-dom";
import { ProjectOverview } from "./ProjectOverview";
import { IProject } from "../../models/IProject";
import { NewProjectButton } from "../buttons/NewProjectButton";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProjectOverviewWrapper } from "../../styles/styledComponents/Wrappers";
import { ProjectOverviewContainer } from "../../styles/styledComponents/Containers";
import { Heading } from "../../styles/styledComponents/Items";
import { useMediaQuery } from "react-responsive";
import { ProjectOverviewMobile } from "./ProjectOverviewMobile";

export const ProjectsOverview = () => {
    const navigate = useNavigate();
    const [projects, setProjects] = useState(useLoaderData() as IProject[]);
    const user = localStorage.getItem("username");
    const [deleted, setDeleted] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 575 });
    const [openProjectId, setOpenProjectId] = useState<number | null>(null);

    const toggleProject = (projectId: number) => {
        setOpenProjectId((prev) => (prev === projectId ? null : projectId));
    };
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
            <ProjectOverviewWrapper>
                <ProjectOverviewContainer>
                    <Heading>Active Projects</Heading>
                    <ul
                        className="overviewHeader"
                        aria-label="Project overview headers"
                    >
                        <li>Title</li>
                        <li>Added</li>
                        <li>Deadline</li>
                        <li>Options</li>
                    </ul>
                    <ul aria-label="Project list">
                        {projects.map((project) =>
                            isMobile ? (
                                <ProjectOverviewMobile
                                    onDelete={onDelete}
                                    isOpen={
                                        openProjectId === project.project_id
                                    }
                                    onToggle={() =>
                                        toggleProject(project.project_id)
                                    }
                                    project={project}
                                    key={project.project_id}
                                ></ProjectOverviewMobile>
                            ) : (
                                <ProjectOverview
                                    onDelete={onDelete}
                                    project={project}
                                    key={project.project_id}
                                ></ProjectOverview>
                            )
                        )}
                    </ul>
                    <div className="overviewFooter">
                        <NewProjectButton />
                    </div>
                </ProjectOverviewContainer>
            </ProjectOverviewWrapper>
        </>
    );
};

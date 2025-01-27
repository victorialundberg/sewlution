import { useLoaderData } from "react-router-dom";
import { ProjectOverviewContainer } from "../styles/styledComponents/Containers";
import { IProject } from "../models/IProject";
import { DeletedProject } from "../components/overview/DeletedProject";
import { useEffect, useState } from "react";
import axios from "axios";
import {
    DeletedProjectWrapper,
    ProjectViewWrapper,
} from "../styles/styledComponents/Wrappers";

export const DeletedView = () => {
    const [projects, setProjects] = useState(useLoaderData() as IProject[]);
    const [changed, setChanged] = useState(false);
    const user = localStorage.getItem("username");

    useEffect(() => {
        const getDeletedProjects = async (user: string) => {
            try {
                const response = await axios.post(
                    "http://localhost:3000/projects/read/all/projects/deleted",
                    { username: user }
                );
                setProjects(response.data);
            } catch (error) {
                console.log("Error fetching projects");
            }
        };

        if (changed && user) {
            console.log("Change detected, refetching deleted projects");
            getDeletedProjects(user);
            setChanged(false);
        }
    }, [changed, user]);

    const handleDelete = () => {
        setChanged(true);
    };
    const handleRestore = () => {
        setChanged(true);
    };

    return (
        <ProjectViewWrapper>
            <ProjectOverviewContainer>
                <DeletedProjectWrapper>
                    <h1>Deleted Projects</h1>
                    {projects.map((project) => (
                        <DeletedProject
                            onRestore={handleRestore}
                            onDelete={handleDelete}
                            project={project}
                            key={project.project_id}
                        ></DeletedProject>
                    ))}
                </DeletedProjectWrapper>
            </ProjectOverviewContainer>
        </ProjectViewWrapper>
    );
};

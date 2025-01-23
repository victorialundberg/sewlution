import { useLoaderData } from "react-router-dom";
import { DeletedProjectsContainer } from "../styles/styledComponents/Containers";
import { IProject } from "../models/IProject";
import { DeletedProject } from "../components/overview/DeletedProject";
import { useEffect, useState } from "react";
import axios from "axios";

export const DeletedView = () => {
    const [projects, setProjects] = useState(useLoaderData() as IProject[]);
    const [deleted, setDeleted] = useState(false);
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

        if (deleted && user) {
            console.log("Projected deleted, refetching deleted projects");
            getDeletedProjects(user);
            setDeleted(false);
        }
    }, [deleted, user]);

    const handleDelete = () => {
        console.log("handle delete");
        setDeleted(true);
    };

    return (
        <>
            <DeletedProjectsContainer>
                <h1>Deleted Projects</h1>
                {projects.map((project) => (
                    <DeletedProject
                        onDelete={handleDelete}
                        project={project}
                        key={project.project_id}
                    ></DeletedProject>
                ))}
            </DeletedProjectsContainer>
        </>
    );
};

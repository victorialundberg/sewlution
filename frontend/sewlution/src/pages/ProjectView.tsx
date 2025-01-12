import { useLoaderData } from "react-router-dom";
import { IProject } from "../models/IProject";

export const ProjectView = () => {
    const project = useLoaderData() as IProject;

    return (
        <>
            <div>
                <p>{project.title}</p>
                {project.link && <p>{project.link}</p>}
                {project.deadline && <span>-</span>}
                {project.deadline && <p>{project.deadline}</p>}
            </div>
            {project.description && (
                <div>
                    <h2>Notes</h2>
                    <p>{project.description}</p>
                </div>
            )}
            {project.measurements && (
                <div>
                    <h2>Measurements</h2>
                    <p>{project.measurements}</p>
                </div>
            )}
        </>
    );
};

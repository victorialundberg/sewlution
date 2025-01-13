import { useLoaderData } from "react-router-dom";
import { IProjectResponse } from "../models/IProjectResponse";
import { Materials } from "../components/widgets/Materials";
import { Todos } from "../components/widgets/Todos";

export const ProjectView = () => {
    const projectLoader = useLoaderData() as IProjectResponse;
    const project = projectLoader.project[0];
    const materials = projectLoader.material;
    const todos = projectLoader.todo;

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
            {materials && <Materials materials={materials} />}
            {todos && <Todos todos={todos} />}
        </>
    );
};

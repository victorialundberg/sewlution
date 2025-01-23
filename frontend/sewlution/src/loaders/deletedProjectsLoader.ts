import { IProject } from "../models/IProject";
import { getDeletedProjects } from "../services/projects/readProjectsService";

export const deletedProjectsLoader = async (): Promise<IProject[]> => {
    const user = localStorage.getItem("username");

    if (user) {
        return await getDeletedProjects(user);
    }
    return [];
};

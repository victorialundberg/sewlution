import { IProject } from "../models/IProject";
import { getProjects } from "../services/projectService";

export const projectLoader = async (): Promise<IProject[]> => {
    const user = localStorage.getItem("username");

    if (user) {
        return await getProjects(user);
    }
    return [];
};

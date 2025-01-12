import { IProject } from "../models/IProject";
import { getProjects } from "../services/projectsService";

export const projectsLoader = async (): Promise<IProject[]> => {
    const user = localStorage.getItem("username");

    if (user) {
        return await getProjects(user);
    }
    return [];
};

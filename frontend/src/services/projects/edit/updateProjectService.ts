import axios from "axios";
import { IProject } from "../../../models/IProject";

interface IPatchRepsonse {
    updatedProject: {
        title: string;
        notes: string;
        deadline: string;
        link: string;
        measurements: string;
    };
}

export const editProject = async (
    project: IProject,
    username: string
): Promise<IPatchRepsonse> => {
    const API_URL = import.meta.env.VITE_APP_API_URL;

    const response = await axios.patch(`${API_URL}/projects/edit/project`, {
        title: project.title,
        notes: project.notes,
        deadline: project.deadline,
        link: project.link,
        measurements: project.measurements,
        project_id: project.project_id,
        username: username,
    });
    return response.data;
};

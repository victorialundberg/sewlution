import axios from "axios";
import { IProject } from "../../../models/IProject";

interface IPatchRepsonse {
    updatedProject: {
        title: string;
        description: string;
        deadline: string;
        link: string;
        measurements: string;
    };
}

export const editProject = async (
    project: IProject,
    username: string
): Promise<IPatchRepsonse> => {
    const API_URL = process.env.REACT_APP_API_URL;

    const response = await axios.patch(`${API_URL}/projects/edit/project`, {
        title: project.title,
        description: project.description,
        deadline: project.deadline,
        link: project.link,
        measurements: project.measurements,
        project_id: project.project_id,
        username: username,
    });
    return response.data;
};

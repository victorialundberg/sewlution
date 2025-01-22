import { IMaterial } from "./IMaterial";
import { IProject } from "./IProject";
import { ITodo } from "./ITodo";

export interface IProjectsResponse {
    projects: IProject[];
    materials: IMaterial[];
    todos: ITodo[];
}

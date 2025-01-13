import { IMaterial } from "./IMaterial";
import { IProject } from "./IProject";
import { ITodo } from "./ITodo";

export interface IProjectResponse {
    project: IProject[];
    material: IMaterial[];
    todo: ITodo[];
}

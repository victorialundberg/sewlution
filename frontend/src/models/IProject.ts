export interface IProject {
    project_id: number;
    title: string;
    description?: string;
    deadline?: string;
    link?: string;
    measurements?: string;
    username?: string;
    deleted: number;
    created: string;
}

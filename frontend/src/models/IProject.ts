export interface IProject {
    project_id: number;
    title: string;
    notes?: string;
    deadline?: string;
    link?: string;
    measurements?: string;
    username?: string;
    deleted: number;
    created: string;
}

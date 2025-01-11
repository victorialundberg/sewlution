import { IProject } from "../../models/IProject";
import { ProjectOverviewItem } from "../../styles/styledComponents/ProjectOverviewItem";

interface IOverViewProps {
    project: IProject;
    key: number;
}

export const ProjectOverview = (props: IOverViewProps) => {
    return (
        <>
            <ProjectOverviewItem>
                <button>{props.project.title}</button>
                {props.project.deadline && (
                    <span>{props.project.deadline}</span>
                )}
                <span>{props.project.created.slice(0, 10)}</span>
                <button>Open icon</button>
                <button>Edit icon</button>
                <button>Delete icon</button>
            </ProjectOverviewItem>
        </>
    );
};

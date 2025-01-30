import { AboutContainer } from "../styles/styledComponents/Containers";
import { ProjectOverviewWrapper } from "../styles/styledComponents/Wrappers";

export const About = () => {
    return (
        <ProjectOverviewWrapper>
            <AboutContainer>
                <h1>About Sewlution</h1>
                <p>This is my Degree Project as a Frontend Developer student</p>
                <p>
                    I had an idea of creating an application to help organize
                    and create an overview of sewing projects - ongoing and
                    planned ones in a digital format. The idea was to help the
                    user spend less time on planning and writing things down on
                    missing papers and spend more time on actual sewing.
                </p>
                <p>
                    I have created an application where you can create a digital
                    project and add a deadline, general notes, measurements, a
                    to-do-list, a table with all the required materials for the
                    project, their price and amount as well as an ability to add
                    a link to a mood board for keeping all thoughts in one
                    place.
                </p>
                <p>
                    The application has an overview from where you can navigate
                    to the different projects and choose if you want to open and
                    view them, edit them or delete them – in which case they end
                    up in the “deleted projects” view – from where the you can
                    permanently delete the projects or restore them. A title is
                    the only thing required for a project and the rest is up to
                    you to customize.
                </p>
            </AboutContainer>
        </ProjectOverviewWrapper>
    );
};

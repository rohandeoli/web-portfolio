import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import './Projects.css';
import ProjectsImg from "./ProjectsImg";
import { portfolioData } from "../../portfolioData";

function Projects(props: { theme: any; setTheme: (theme: any) => void }) {
    const { theme, setTheme } = props;
    const { projectsHeader, projects } = portfolioData;

    return (
        <div className="projects-main">
            <Header theme={theme} setTheme={setTheme} />
            <div className="basic-projects">
                <div className="projects-heading-div">
                    <div className="projects-heading-img-div">
                        <ProjectsImg theme={theme} />
                    </div>
                    <div className="projects-heading-text-div">
                        <h1
                            className="projects-heading-text"
                            style={{ color: theme.text }}
                        >
                            {projectsHeader.title}
                        </h1>
                        <p
                            className="projects-header-detail-text subTitle"
                            style={{ color: theme.secondaryText }}
                        >
                            {projectsHeader["description"]}
                        </p>
                    </div>
                </div>
            </div>
            <div className="repo-cards-div-main">
                {projects.map((repo) => {
                    return <ProjectCard key={repo.id} project={repo} theme={theme} />;
                })}
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Footer theme={props.theme} />
        </div>
    );
};

export default Projects;
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import './Projects.css';
import ProjectsImg from "./ProjectsImg";

function Projects(props: { theme: any; setTheme: (theme: any) => void }) {
    const { theme, setTheme } = props;
    const projectsHeader = {
        title: "Projects",
        description:
            "My projects leverage a wide array of cutting-edge technology tools. Below is a selection of my projects, with the understanding that not all are currently available on GitHub.",
        avatar_image_path: "projects_image.svg",
    };

    const projects = [
        {
            id: "0",
            name: "Blockchain Mining Using GPU",
            url: "https://github.com/rohandeoli/blockchain_gpu",
            description:
                "The project aims to provide mining solution for CPU as well as GPU. IF YOU INTEND TO MINE ON GPU, NVIDIA CARD WITH CUDA IS REQUIRED. (Tested with Nvidia GeFroce 920M, Nvidia Tesla K80)",
            languages: [
                {
                    name: "Python",
                    iconifyClass: "logos-python",
                },
                {
                    name: "C++",
                    iconifyClass: "logos-c-plusplus",
                },
            ],
            links: [
                {
                    name: "Github",
                    url: "https://github.com/rohandeoli/blockchain_gpu",
                    iconifyClass: "ri:github-fill",
                }
            ],
        },
        {
            id: "1",
            name: "Online Portfolio Website",
            url: "https://github.com/rohandeoli/blockchain_gpu",
            description:
                "This is my personal portfolio website, built using React and Material UI. It showcases my projects, skills, and experiences.",
            languages: [
                {
                    name: "JavaScript",
                    iconifyClass: "logos-javascript",
                },
                {
                    name: "React",
                    iconifyClass: "logos-react",
                },
                {
                    name: "Material UI",
                    iconifyClass: "logos-material-ui",
                },
                {
                    name: "HTML",
                    iconifyClass: "logos-html-5",
                },
                {
                    name: "CSS",
                    iconifyClass: "logos-css-3",
                },
            ],
            links: [
                {
                    name: "Github",
                    url: "https://github.com/rohandeoli/blockchain_gpu",
                    iconifyClass: "ri:github-fill",
                }
            ],
        },
        {
            id: "2",
            name: "8085 Microprocessor Simulator",
            url: "https://github.com/rohandeoli/8085-Microprocessor-Simulator",
            description:
                "A simulator for the 8085 microprocessor, built using C++. It allows users to simulate the execution of assembly language programs.",
            languages: [
                {
                    name: "C++",
                    iconifyClass: "logos-c-plusplus",
                },
                {
                    name: "C",
                    iconifyClass: "logos-c",
                }
            ],
            links: [
                {
                    name: "Github",
                    url: "https://github.com/rohandeoli/8085-Microprocessor-Simulator",
                    iconifyClass: "ri:github-fill",
                }
            ],
        },
        {
            id: "3",
            name: "Smart Home Security System",
            url: "https://github.com/rohandeoli/Smart-Home-Security-System",
            description:
                "A smart home security system that is built on Arduino platform. It supports pin based locking system as well as ability to reset password over email.",
            languages: [
                {
                    name: "C++",
                    iconifyClass: "logos-c-plusplus",
                },
                {
                    name: "Arduino",
                    iconifyClass: "logos-arduino",
                },
            ],
            links: [
                {
                    name: "Github",
                    url: "https://github.com/rohandeoli/Smart-Home-Security-System",
                    iconifyClass: "ri:github-fill",
                }
            ],
        }
    ]

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
import CloudInfraImg from '../Skills/CloudInfraImg';
import FullStackImg from '../Skills/FullStackImg';
import '../Skills/Skills.css';
import SoftwareSkill from '../SoftwareSkill/SoftwareSkill';

const skills = {
    data: [
        {
            title: "Front End Development",
            fileName: "FullStackImg",
            skills: [
                "⚡ Develop highly interactive Front end / User Interfaces for your web applications",
                "⚡ Building responsive website front end using Angular and ReactJS",
                "⚡ Integrating backend services with ReactJS and NodeJS",
                "⚡ Integrating Third Party APIs",

            ],
            softwareSkills: [
                {
                    skillName: "HTML5",
                    fontAwesomeClassname: "simple-icons:html5",
                    style: {
                        color: "#E34F26",
                    },
                },
                {
                    skillName: "CSS3",
                    fontAwesomeClassname: "fa-css3",
                    style: {
                        color: "#1572B6",
                    },
                },
                {
                    skillName: "JavaScript",
                    fontAwesomeClassname: "simple-icons:javascript",
                    style: {
                        backgroundColor: "#FFFFFF",
                        color: "#F7DF1E",
                    },
                },
                {
                    skillName: "Angular",
                    fontAwesomeClassname: "simple-icons:angular",
                    style: {
                        backgroundColor: "#FFFFFF",
                        color: "#B52E31",
                    },
                },
                {
                    skillName: "ReactJS",
                    fontAwesomeClassname: "simple-icons:react",
                    style: {
                        color: "#61DAFB",
                    },
                },
                {
                    skillName: "ElectronJS",
                    fontAwesomeClassname: "simple-icons:electron",
                    style: {
                        color: "#47848F",
                    },
                },
                {
                    skillName: "Git",
                    fontAwesomeClassname: "simple-icons:git",
                    style: {
                        color: "#E94E32",
                    },
                },
            ],
        },
        {
            title: "Back End Development",
            fileName: "CloudInfraImg",
            skills: [
                "⚡ Building highly scalable backend applications",
                "⚡ Building RESTful APIs in Node, Express",
                "⚡ Experience with Continuous Integration",
                "⚡ Integration of third party services",
                "⚡ Building microservices",
            ],
            softwareSkills: [
                {
                    skillName: "NodeJS",
                    fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
                    style: {
                        color: "#339933",
                    },
                },
                {
                    skillName: "PostgreSQL",
                    fontAwesomeClassname: "simple-icons:postgresql",
                    style: {
                        color: "#336791",
                    },
                },
                {
                    skillName: "MongoDB",
                    fontAwesomeClassname: "simple-icons:mongodb",
                    style: {
                        color: "#47A248",
                    },
                },
                {
                    skillName: "Docker",
                    fontAwesomeClassname: "simple-icons:docker",
                    style: {
                        color: "#1488C6",
                    },
                },
                {
                    skillName: "GitHub Actions",
                    fontAwesomeClassname: "simple-icons:githubactions",
                    style: {
                        color: "#5b77ef",
                    },
                },
            ],
        },
    ],
};

function GetSkillSvg(props: { fileName: string; theme: any }) {
    if (props.fileName === "FullStackImg")
        return <FullStackImg theme={props.theme} />;
    else if (props.fileName === "CloudInfraImg")
        return <CloudInfraImg theme={props.theme} />;
}

function SkillSection(props: { theme: any }) {
    const { theme } = props;
    return (
        <div>
            {skills.data.map((skill, index) => {
                if (index % 2 === 0) {
                    return (
                        <div className="skills-main-div">
                            <div className="skills-image-div">
                                <GetSkillSvg fileName={skill.fileName} theme={theme} />
                            </div>

                            <div className="skills-text-div">
                                <h1 className="skills-heading" style={{ color: theme.palette.text.primary }}>
                                    {skill.title}
                                </h1>
                                <SoftwareSkill logos={skill.softwareSkills} />
                                <div>
                                    {skill.skills.map((skillSentence) => {
                                        return (
                                            <p
                                                className="subTitle skills-text"
                                                style={{ color: theme.palette.text.secondary }}
                                            >
                                                {skillSentence}
                                            </p>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    );
                } else {
                    return (
                        <div className="skills-main-div">
                            <div className="skills-text-div">
                                <h1 className="skills-heading" style={{ color: theme.palette.text.primary }}>
                                    {skill.title}
                                </h1>
                                <SoftwareSkill logos={skill.softwareSkills} />
                                <div>
                                    {skill.skills.map((skillSentence) => {
                                        return (
                                            <p
                                                className="subTitle skills-text"
                                                style={{ color: theme.palette.text.secondary }}
                                            >
                                                {skillSentence}
                                            </p>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="skills-image-div">
                                <GetSkillSvg fileName={skill.fileName} theme={theme} />
                            </div>
                        </div>
                    );
                }
            })}
        </div>
    );
}

export default SkillSection;
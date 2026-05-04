import CloudInfraImg from '../Skills/CloudInfraImg';
import FullStackImg from '../Skills/FullStackImg';
import '../Skills/Skills.css';
import SoftwareSkill from '../SoftwareSkill/SoftwareSkill';
import { portfolioData } from "../../portfolioData";

function GetSkillSvg(props: { fileName: string; theme: any }) {
    if (props.fileName === "FullStackImg")
        return <FullStackImg theme={props.theme} />;
    else if (props.fileName === "CloudInfraImg")
        return <CloudInfraImg theme={props.theme} />;
}

function SkillSection(props: { theme: any }) {
    const { theme } = props;
    const { skills } = portfolioData;

    return (
        <div>
            {skills.data.map((skill, index) => {
                if (index % 2 === 0) {
                    return (
                        <div key={index} className="skills-main-div">
                            <div className="skills-image-div">
                                <GetSkillSvg fileName={skill.fileName} theme={theme} />
                            </div>

                            <div className="skills-text-div">
                                <h1 className="skills-heading" style={{ color: theme.palette.text.primary }}>
                                    {skill.title}
                                </h1>
                                <SoftwareSkill logos={skill.softwareSkills} />
                                <div>
                                    {skill.skills.map((skillSentence, i) => {
                                        return (
                                            <p
                                                key={i}
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
                        <div key={index} className="skills-main-div">
                            <div className="skills-text-div">
                                <h1 className="skills-heading" style={{ color: theme.palette.text.primary }}>
                                    {skill.title}
                                </h1>
                                <SoftwareSkill logos={skill.softwareSkills} />
                                <div>
                                    {skill.skills.map((skillSentence, i) => {
                                        return (
                                            <p
                                                key={i}
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
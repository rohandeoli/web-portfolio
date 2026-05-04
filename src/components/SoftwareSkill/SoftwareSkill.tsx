import { Tooltip } from "@mui/material";
import { Icon } from "@iconify-icon/react";
import "../Skills/Skills.css";
import "./SoftwareSkill.css";

function SoftwareSkill(props: { logos: { skillName: string; fontAwesomeClassname: string; style: React.CSSProperties }[] }) {
    return (
        <div>
            <div className="software-skills-main-div">
                <ul className="dev-icons">
                    {props.logos.map((logo) => {
                        return (
                            <Tooltip
                                key={logo.skillName}
                                title={logo.skillName}
                                placement="top"
                                arrow
                            >
                                <li
                                    className="software-skill-inline"
                                    data-name={logo.skillName}
                                    aria-label={logo.skillName}
                                >
                                    <Icon
                                        icon={logo.fontAwesomeClassname}
                                        style={logo.style}
                                    />
                                </li>
                            </Tooltip>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default SoftwareSkill;

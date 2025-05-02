import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "../Skills/Skills.css";
import "./SoftwareSkill.css";

function SoftwareSkill(props: { logos: { skillName: string; fontAwesomeClassname: string; style: React.CSSProperties }[] }) {
    return (
        <div>
            <div className="software-skills-main-div">
                <ul className="dev-icons">
                    {props.logos.map((logo) => {
                        return (
                            <OverlayTrigger
                                key={logo.skillName}
                                placement={"top"}
                                overlay={
                                    <Tooltip id={`tooltip-top`}>
                                        <strong>{logo.skillName}</strong>
                                    </Tooltip>
                                }
                            >
                                <li className="software-skill-inline" data-name={logo.skillName}>
                                    <span
                                        className="iconify"
                                        data-icon={logo.fontAwesomeClassname}
                                        style={logo.style}
                                        data-inline="false"
                                    ></span>
                                </li>
                            </OverlayTrigger>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default SoftwareSkill;

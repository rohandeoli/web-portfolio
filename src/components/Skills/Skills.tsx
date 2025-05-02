import SkillSection from '../SkillsSection/SkillSection';
import './Skills.css';

function Skills(props: { theme: any }) {
    const { theme } = props;

    return (
        <div className="main" id="skills">
            <div className="skills-header-div">
                <h1 className="skills-header" style={{ color: theme.text }}>
                    Here's what I do
                </h1>
            </div>
            <SkillSection theme={theme} />
        </div>
    );
}

export default Skills;
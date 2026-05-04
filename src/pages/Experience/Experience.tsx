import ExperienceTimeline from "../../components/ExperienceTimeline/ExperienceTimeline";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Experience.css";
import ExperienceImg from "./ExperienceImg";
import { portfolioData } from "../../portfolioData";

function Experience(props: { theme: any; setTheme: (theme: any) => void; }) {
    const { theme, setTheme } = props;
    const { experience } = portfolioData;

    return (
        <div className="experience-main">
            <Header theme={theme} setTheme={setTheme} />
            <div className="basic-experience">
                <div className="experience-heading-div">
                    <div className="experience-heading-img-div">
                        <ExperienceImg theme={theme} />
                    </div>
                    <div className="experience-heading-text-div">
                        <h1
                            className="experience-heading-text"
                            style={{ color: theme.text }}
                        >
                            {experience.title}
                        </h1>
                        <h3
                            className="experience-heading-sub-text"
                            style={{ color: theme.text }}
                        >
                            {experience["subtitle"]}
                        </h3>
                        <p
                            className="experience-header-detail-text subTitle"
                            style={{ color: theme.secondaryText }}
                        >
                            {experience["description"]}
                        </p>
                    </div>
                </div>
                <div className="experience-timeline-header">
                    <ExperienceTimeline theme={theme} experience={experience.sections[0]} />
                </div>
            </div>
            <Footer theme={theme} />
        </div>
    );
};

export default Experience;
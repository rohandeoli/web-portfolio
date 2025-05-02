import ExperienceTimeline from "../../components/ExperienceTimeline/ExperienceTimeline";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Experience.css";
import ExperienceImg from "./ExperienceImg";

function Experience(props: { theme: any; setTheme: (theme: any) => void; }) {
    const { theme, setTheme } = props;

    const experience = {
        title: "Experience",
        subtitle: "Work, Internship and Volunteership",
        description:
            `Experienced Software Engineer with almost 4 years of expertise in UI Development using Angular and
            proficiency in Node.js. Dedicated to ongoing learning and adept at assimilating new technologies to devise
            innovative solutions. Demonstrated ability to design, develop, and enhance solutions by consistently
            delivering efficient and high-quality code at scale. Committed to staying abreast of industry trends and best
            practices to contribute effectively to software development projects.`,
        header_image_path: "experience.svg",
        sections: [
            {
                title: "Work Experience",
                experiences: [
                    {
                        title: "Specialist Programmer L2",
                        company: "Infosys Ltd.",
                        company_url: "https://www.infosys.com/",
                        logo_path: "crest.png",
                        duration: "Apr 2024 - Present",
                        location: "Bengaluru, Karnataka",
                        description: [`Led the strategic migration of PwC’s mission-critical internal application, Flex, from a monolithic AngularJS/.NET
architecture to a modern Angular Micro Frontend design.`,
                            `This migration resulted in a significant improvement in application performance, scalability, and user experience for
managing client deliverables, approvals, and tracking.`,],
                        contributions: [
                            `Improved application load time by 40%`,
                            `Reduced average transaction processing time by 50%`,
                            `Independent deployment and updates of individual application features.`,
                            `Enhanced maintainability and reduced technical debt.`,],
                        color: "#0071C5",
                    },
                    {
                        title: "Specialist Programmer",
                        company: "Infosys Ltd.",
                        company_url: "https://www.infosys.com/",
                        logo_path: "crest.png",
                        duration: "Jan 2022 - Apr 2024",
                        location: "Bengaluru, Karnataka",
                        description: [`Developed and maintained JRA, a critical internal Job Requisition Portal used across PwC for creating job postings.`,
                            `The platform integrates seamlessly with Workday, automatically fetching and synchronizing job data to ensure
efficient and accurate job information management. The platform is developed using Angular and Nest.JS`],
                        contributions: [
                            `Implemented the Workday integration, automating job data synchronization and reducing manual data entry
by 50%.`,
                            `Developed multiple workflows which reduced the job posting cycle time by 50%.`],
                        color: "#0071C5",
                    },
                    {
                        title: "Digital Specialist Engineer",
                        company: "Infosys Ltd.",
                        company_url: "https://www.infosys.com/",
                        logo_path: "crest.png",
                        duration: "Jan 2021 - Jan 2022",
                        location: "Bengaluru, Karnataka",
                        description: [`Served as a UI Developer for the Indian Income Tax project, responsible for the design, implementation, and
maintenance of the end-to-end flow for statutory forms within the web application. Platform was built on Angular
and Springboot.`,
                            `Key contributions focused on significantly enhancing the user experience (UX) and resolving critical bugs, resulting
in a demonstrably improved taxpayer experience.`],
                        contributions: [
                            `Implemented dynamic form validations that reduced the average form completion time by 20%.`,
                            `Collaborated with back-end developers to optimize data flow and improve form submission performance by 20%.`,
                            `DSuccessfully resolved critical bugs that affected form submission and processing, preventing potential taxpayer issues.`],
                        color: "#0071C5",
                    },
                ],
            }
        ],
    };

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
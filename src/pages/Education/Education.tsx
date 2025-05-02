import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import EducationImg from "./EducationImg";
import './Education.css';
import EducationDetails from "../../components/EducationDetails/EducationDetails";

function Education(props: { theme: any; setTheme: (theme: any) => void; }) {
    const { theme, setTheme } = props;

    return (
        <div className="education-main">
            <Header theme={theme} setTheme={setTheme} />
            <div className="basic-education">
                <div className="heading-div">
                    <div className="heading-text-div">
                        <h1 className="heading-text" style={{ color: theme.text }}>
                            Education
                        </h1>
                        <h3 className="heading-sub-text" style={{ color: theme.text }}>
                            Basic Qualification and Certifications
                        </h3>
                        <p
                            className="experience-header-detail-text subTitle"
                            style={{ color: theme.secondaryText }}
                        >
                            A bit about my education and certifications.
                        </p>
                    </div>
                    <div className="heading-img-div">
                        <EducationImg theme={theme} />
                    </div>
                </div>
                <EducationDetails theme={props.theme} />
            </div>
            <Footer theme={theme} />
        </div>
    );
};

export default Education;
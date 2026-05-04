import CertificationsCard from '../CertificationsCard/CertificationsCard';
import DegreeCard from '../DegreeCard/DegreeCard';
import './EducationDetails.css';
import { portfolioData } from "../../portfolioData";

function EducationDetails(props: { theme: any; }) {
    const { theme } = props;
    const { degrees, certifications } = portfolioData;

    return (
        <div className="main" id="educations">
            <div className="educations-header-div">
                <h1 className="educations-header" style={{ color: theme.palette.text.primary }}>
                    Educational Qualifications
                </h1>
            </div>
            <div className="educations-body-div">
                {degrees.map((degree: any) => {
                    return <DegreeCard key={degree.title} degree={degree} theme={theme} />;
                })}
            </div>
            <div className="educations-header-div">
                <h1 className="educations-header" style={{ color: theme.palette.text.primary }}>
                    Certifications
                </h1>
            </div>
            <div className="educations-body-div">
                {certifications.map((certification: any) => {
                    return <CertificationsCard key={certification.title} certification={certification} theme={theme} />;
                })}
            </div>
        </div>
    );
}

export default EducationDetails;
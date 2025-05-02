import CertificationsCard from '../CertificationsCard/CertificationsCard';
import DegreeCard from '../DegreeCard/DegreeCard';
import './EducationDetails.css';

function EducationDetails(props: { theme: any; }) {
    const { theme } = props;

    const degrees = [
        {
            title: "Graphic Era Deemed University",
            subtitle: "Bachelors in Technology",
            // logo_path: "ssec.png",
            alt_name: "GEU",
            duration: "2016 - 2020",
            descriptions: [
                "⚡ Majored in Computer Science and Engineering.",
                "⚡ Focused on Data Structures, Algorithms, Operating Systems and Web Development.",
                "⚡ Other areas of focus included Machine Learning, Computer Vision.",
                "⚡ Participated in various hackathons and coding competitions.",
            ],
            website_link: "http://www.geu.ac.in/",
        },
    ];

    const certifications = [
        {
            title: "Responsive Web Design",
            subtitle: "Free Code Camp",
            logo_path: "fcc.png",
            certificate_link:
                "https://www.freecodecamp.org/certification/rohan1010/responsive-web-design",
            alt_name: "Free Code Camp",
            // color_code: "#2AAFED",
            color_code: "#47A048",
        }
    ];

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
import "./SocialMedia.css";

export default function SocialMedia() {

    const socialMediaLinks = {
        /* Your Social Media Link */
        github: "https://github.com/rohandeoli",
        linkedin: "https://www.linkedin.com/in/rohan-deoli/",
        gmail: "rohan.deoli98@gmail.com",
        twitter: "https://twitter.com/rohan1010",
    };

    return (
        <div className="social-media-div">
            <a
                href={socialMediaLinks.github}
                className="icon-button github"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-github"></i>
                <span></span>
            </a>
            <a
                href={socialMediaLinks.linkedin}
                className="icon-button linkedin"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-linkedin-in"></i>
                <span></span>
            </a>
            <a
                href={`mailto:${socialMediaLinks.gmail}`}
                className="icon-button google"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-google"></i>
                <span></span>
            </a>
            <a
                href={socialMediaLinks.twitter}
                className="icon-button twitter"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-twitter"></i>
                <span></span>
            </a>
        </div>
    );
}

import "./SocialMedia.css";
import { portfolioData } from "../../portfolioData";

export default function SocialMedia() {
    const { socialMediaLinks } = portfolioData;

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
        </div>
    );
}

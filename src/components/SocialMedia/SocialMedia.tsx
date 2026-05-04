import "./SocialMedia.css";
import { portfolioData } from "../../portfolioData";
import { Icon } from "@iconify-icon/react";

export default function SocialMedia() {
    const { socialMediaLinks } = portfolioData;

    return (
        <div className="social-media-div">
            <a
                href={socialMediaLinks.github}
                className="icon-button github"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
            >
                <Icon icon="akar-icons:github-fill" />
                <span></span>
            </a>
            <a
                href={socialMediaLinks.linkedin}
                className="icon-button linkedin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
            >
                <Icon icon="entypo-social:linkedin-with-circle" />
                <span></span>
            </a>
            <a
                href={`mailto:${socialMediaLinks.gmail}`}
                className="icon-button google"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Gmail"
            >
                <Icon icon="ion:logo-google" />
                <span></span>
            </a>
        </div>
    );
}

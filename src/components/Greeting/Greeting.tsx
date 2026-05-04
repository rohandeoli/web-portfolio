import { Button } from "@mui/material";
import GreetingImage from "../GreetingImage/GreetingImage";
import SocialMedia from "../SocialMedia/SocialMedia";
import './Greeting.css';
import { portfolioData } from "../../portfolioData";
import { useNavigate } from "react-router";

function Greeting(props: { theme: any; }) {
    const { theme } = props;
    const { greeting } = portfolioData;
    const navigate = useNavigate();

    return (
        <div className="greet-main" id="greeting">
            <div className="greeting-main">
                <div className="greeting-text-div">
                    <h1 className="greeting-text">{greeting.title}</h1>
                    <p
                        className="greeting-text-p subTitle"
                        style={{ color: theme.palette.secondary.main }}
                    >
                        <span>I'm </span>
                        <span style={{ color: theme.palette.primary.main }}>
                            {greeting.full_name}.{" "}
                        </span>
                        {greeting.subTitle}
                    </p>
                    <SocialMedia />
                    <div className="portfolio-repo-btn-div">
                        <Button
                            className="button"
                            onClick={() => {
                                navigate("/contact");
                            }}
                            sx={{
                                backgroundColor: theme.palette.primary.main,
                                color: theme.palette.text.primary,
                            }}
                        >
                            Contact Me
                        </Button>
                    </div>
                </div>
                <div className="greeting-image-div">
                    <GreetingImage theme={theme} />
                </div>
            </div>
        </div>
    );
};

export default Greeting;
import { Button } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import BlogsImg from "./BlogsImg";
import "./Contact.css";
import ContactImage from "./ContactImage";
import { portfolioData } from "../../portfolioData";

function Contact(props: { theme: any, setTheme: (theme: any) => void }) {
    const { theme, setTheme } = props;
    const { contactData, blogSection } = portfolioData;

    return (
        <div className="contact-main">
            <Header theme={theme} setTheme={setTheme} />
            <div className="basic-contact">
                <div className="contact-heading-div">
                    <div className="contact-heading-img-div">
                        <ContactImage theme={theme} />
                    </div>
                    <div className="contact-heading-text-div">
                        <h1
                            className="contact-heading-text"
                            style={{ color: theme.text }}
                        >
                            {contactData["title"]}
                        </h1>
                        <p
                            className="contact-header-detail-text subTitle"
                            style={{ color: theme.secondaryText }}
                        >
                            {contactData["description"]}
                        </p>
                        <SocialMedia />
                        <br />
                        <br />
                        <Button
                            className="button"
                            onClick={() => {
                                window.open(contactData.resumeLink, "_blank");
                            }}
                            sx={{
                                backgroundColor: theme.palette.primary.main,
                                color: theme.palette.text.primary,
                                marginTop: "35px",
                            }}
                        >
                            My Resume
                        </Button>
                    </div>
                </div>
                <div className="blog-heading-div">
                    <div className="blog-heading-text-div">
                        <h1 className="blog-heading-text" style={{ color: theme.text }}>
                            {blogSection["title"]}
                        </h1>
                        <p
                            className="blog-header-detail-text subTitle"
                            style={{ color: theme.secondaryText }}
                        >
                            {blogSection["subtitle"]}
                        </p>
                        <div className="blogsite-btn-div">
                            <Button
                                className="button"
                                onClick={() => {
                                    window.open(blogSection.link, "_blank");
                                }}
                                sx={{
                                    backgroundColor: theme.palette.primary.main,
                                    color: theme.palette.text.primary,
                                    marginTop: "35px",
                                }}
                            >
                                My Medium Blogs
                            </Button>
                        </div>
                    </div>
                    <div className="blog-heading-img-div">
                        <BlogsImg theme={theme} />
                    </div>
                </div>
            </div>
            <Footer theme={theme} />
        </div>
    );
}

export default Contact;

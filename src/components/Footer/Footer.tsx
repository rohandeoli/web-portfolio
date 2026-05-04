import "./Footer.css";
import { portfolioData } from "../../portfolioData";

export default function Footer(props: { theme: any }) {
  const { theme } = props;
  const { greeting } = portfolioData;
  return (
    <div className="footer-div">
      <p className="footer-text" style={{ color: theme.palette.text.secondary }}>
        Made with <span role="img">❤️</span> by {greeting.full_name}
      </p>
    </div>
  );
}

import "./Footer.css";

export default function Footer(props: { theme: any }) {
  const { theme } = props;
  return (
    <div className="footer-div">
      <p className="footer-text" style={{ color: theme.palette.text.secondary }}>
        Made with <span role="img">❤️</span> by Rohan Deoli
      </p>
    </div>
  );
}

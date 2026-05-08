import BentoSkills from "../../components/BentoSkills/BentoSkills";
import Hero from "../../components/Hero/Hero";
import { Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { portfolioData } from "../../portfolioData";

function Home() {
  return (
    <Box>
      <Helmet>
        <title>{portfolioData.greeting.full_name} | Home</title>
        <meta name="description" content={portfolioData.greeting.subTitle} />
        <meta property="og:title" content={`${portfolioData.greeting.full_name} | Home`} />
        <meta property="og:description" content={portfolioData.greeting.subTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={portfolioData.greeting.siteUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${portfolioData.greeting.full_name} | Home`} />
        <meta name="twitter:description" content={portfolioData.greeting.subTitle} />
      </Helmet>
      <Hero />
      <BentoSkills />
    </Box>
  );
}

export default Home;

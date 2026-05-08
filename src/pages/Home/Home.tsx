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
      </Helmet>
      <Hero />
      <BentoSkills />
    </Box>
  );
}

export default Home;

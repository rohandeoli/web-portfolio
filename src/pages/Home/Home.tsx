import BentoSkills from "../../components/BentoSkills/BentoSkills";
import Hero from "../../components/Hero/Hero";
import { Box } from "@mui/material";
import PageMeta from "../../components/PageMeta/PageMeta";
import { portfolioData } from "../../portfolioData";

function Home() {
  return (
    <Box>
      <PageMeta pageTitle="Home" description={portfolioData.greeting.subTitle} path="/" />
      <Hero />
      <BentoSkills />
    </Box>
  );
}

export default Home;

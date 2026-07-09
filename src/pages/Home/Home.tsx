import BentoSkills from "../../components/BentoSkills/BentoSkills";
import Hero from "../../components/Hero/Hero";
import { Box } from "@mui/material";
import PageMeta from "../../components/PageMeta/PageMeta";
import { portfolioData } from "../../portfolioData";
import InteractiveTerminal from "../../components/InteractiveTerminal/InteractiveTerminal";

function Home() {
  return (
    <Box>
      <PageMeta pageTitle="Home" description={portfolioData.greeting.subTitle} path="/" />
      <Hero />
      <InteractiveTerminal />
      <BentoSkills />
    </Box>
  );
}

export default Home;

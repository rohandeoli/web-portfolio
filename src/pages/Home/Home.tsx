import Footer from "../../components/Footer/Footer";
import Greeting from "../../components/Greeting/Greeting";
import Header from "../../components/Header/Header";
import Skills from "../../components/Skills/Skills";

function Home( props: { theme: any; setTheme: (theme: any) => void; } ) {
  const { theme, setTheme } = props;

  return (
    <div>
      <Header theme={theme} setTheme={setTheme} />
      <Greeting theme={theme} />
      <Skills theme={theme} />
      <Footer theme={theme} />
    </div>
  );
};

export default Home;
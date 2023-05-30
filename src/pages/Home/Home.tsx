import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Menu from "../../components/Menu/Menu";
import SectionAbout from "./SectionAbout";
import SectionCallAction from "./SectionCallAction";
import SectionLadies from "./SectionLadies";
import SectionNumbers from "./SectionNumbers";
import SectionSocialMedia from "./SectionSocialMedia";

const Home = () => {
  return (
    <>
      <Header />

      <Menu/>

      <SectionAbout />

      <SectionLadies />

      <SectionNumbers />

      <SectionSocialMedia />

      <SectionCallAction />

      <Footer />
    </>
  );
};

export default Home;

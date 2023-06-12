import NewFooter from "../../components/Footer/NewFooter";
import Header from "../../components/Header";
import SectionAbout from "./SectionAbout";
import SectionCallAction from "./SectionCallAction";
import SectionLadies from "./SectionLadies";
import SectionNumbers from "./SectionNumbers";
import SectionSocialMedia from "./SectionSocialMedia";

const Home = () => {
  return (
    <>
      <Header />

      <SectionAbout />

      <SectionLadies />

      <SectionNumbers />

      <SectionSocialMedia />

      <SectionCallAction />

      <NewFooter />
    </>
  );
};

export default Home;

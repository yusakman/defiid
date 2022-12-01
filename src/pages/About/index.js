import AboutComponent from "../../components/AboutComponent";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import staticAssets from "../../const/static";

const About = () => {
  const props = {
    staticAssets,
  };
  return (
    <div>
      <Navbar {...props}></Navbar>
      <AboutComponent {...props}></AboutComponent>
      <Footer {...props}></Footer>
    </div>
  );
};

export default About;

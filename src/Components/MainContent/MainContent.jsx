import Hero from "../../Sections/Hero/Hero";
import { MyNavbar } from "../MyNavbar/MyNavbar";
import About from "../../Sections/About/About";
import Services from "../../Sections/Services/Services";
import Projects from "../../Sections/Projects/Projects";
import Contact from "../../Sections/Contact/Contact";
import Footer from "../../Components/Footer/Footer";

export default function MainContent() {
  return (
    <>
      <header>
        <MyNavbar />
      </header>
      <main>
        <Hero/>
        <About/>
        <Services/>
        <Projects/>
        <Contact/>
        <Footer/>
      </main>
    </>
  );
}

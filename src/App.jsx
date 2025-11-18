import About from "./Sections/About/About";
import Contact from "./Sections/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Sections/Hero/Hero";
import { MyNavbar } from "./Components/MyNavbar/MyNavbar";
import Services from "./Sections/Services/Services";
import Projects from "./Sections/Projects/Projects";

function App() {
  return (
    <>
      <header>
        <MyNavbar />
      </header>
      <main>
        <Hero />
          <About />
          <Services />
          <Projects/>
          <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;

import About from "./Sections/About/About";
import Contact from "./Sections/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Sections/Hero/Hero";
import { MyNavbar } from "./Components/MyNavbar/MyNavbar";
import Services from "./Sections/Services/Services";

function App() {
  return (
    <>
      <header className="fixed z-50 w-full">
        <MyNavbar />
      </header>
      <main>
        <Hero />
          <About />
          <Services />
          <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;

import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import { MyNavbar } from "./Components/MyNavbar/MyNavbar";
import Services from "./Components/Services/Services";

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

import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import { MyNavbar } from "./Components/MyNavbar/MyNavbar";

function App() {
  return (
    <>
      <header className="fixed z-50 w-full">
        <MyNavbar />
      </header>
      <main>
        <Hero />
        <About/>
      </main>
    </>
  );
}

export default App;

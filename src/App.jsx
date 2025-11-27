
import { useEffect, useState } from "react";
import Loader from "./Components/Loader/Loader";
import { AnimatePresence } from "framer-motion";
import MainContent from "./Components/MainContent/MainContent";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const Timeout = setTimeout(() => {
      setIsLoading(false);
    }, 900);
    return () => clearTimeout(Timeout);
  }, []);
  return (
    <>
      <AnimatePresence>
        {isLoading ? <Loader key="loader"/> : <MainContent key="main"/>}
      </AnimatePresence>
    </>
  );
}

export default App;

import { Navbar, NavbarBrand } from "flowbite-react";
import { AnimatePresence, motion } from "framer-motion";
import LetterE from "../../assets/images/Letter E.png";
import HireButton from "../HireButton/HireButton";
import { useEffect, useRef, useState } from "react";
export function MyNavbar() {
  const [active, setactive] = useState("Home");
  const [NavBG, setNavBG] = useState(false);
  const [show, setShow] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const lastScrollY = useRef(0);
  const sections = ["Home", "About", "Services", "Projects", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = active;
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop - 100;
          const height = section.offsetHeight;
          if (scrollY >= offsetTop && scrollY < offsetTop + height) {
            current = id;
          }
        }
      });
      if (current !== active) {
        setactive(current);
      }
      if (scrollY > 100) {
        setNavBG(true);
      } else {
        setNavBG(false);
      }
      if (scrollY > lastScrollY.current) {
        setShow(false);
      } else {
        setShow(true);
      }

      lastScrollY.current = scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <Navbar
      className={`Nav px-0 md:px-4 py-6 bg-transparent fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-linear ${
        NavBG ? "bg-black  shadow-lg" : "bg-transparent"
      } ${show ? "translate-y-0" : "-translate-y-full"}`}
    >
      <NavbarBrand>
        <div className="flex justify-center items-center gap-2">
          <div className="bg-[#ff6d5a] flex items-center justify-center rounded-md px-1 py-1">
            <img
              src={LetterE}
              alt="Eslam logo"
              className="w-9 h-9 object-contain"
            />
          </div>
          <h1 className="text-white font-Jost text-4xl font-semibold">
            Esla<span className="text-[#ff6d5a]">m</span>
          </h1>
        </div>
      </NavbarBrand>
      <div className="right-side xl:order-2 items-center gap-3">
        <div className="hidden lg:block font-Lexend">
          <HireButton />
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="navbar-toggle flex flex-col justify-center items-center lg:hidden gap-[6px] p-2"
        >
          <motion.svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            className="cursor-pointer"
          >
            {/* Line 1 */}
            <motion.line
              x1="3"
              y1="6"
              x2="21"
              y2="6"
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Line 2 */}
            <motion.line
              x1="6"
              y1="12"
              x2="21"
              y2="12"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />

            {/* Line 3 */}
            <motion.line
              x1="3"
              y1="18"
              x2="21"
              y2="18"
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.svg>
        </button>
      </div>
      <div
        className={
          "Navlinks font-Jost mr-5 py-3 sm:max-xl:w-full sm:max-xl:hidden xl:flex xl:gap-8 transition-all duration-300 ease-in-out"
        }
      >
        {sections.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`font-normal text-lg transition-all duration-300  ${
              active == id
                ? "text-[#ff6d5a]"
                : "text-[#b5b5c0] hover:text-[#ff6d5a]"
            }`}
          >
            {id}
          </a>
        ))}
      </div>
      
        <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="Navlinks font-Jost py-3 mt-3 sm:max-xl:w-full xl:flex xl:gap-8 bg-[#181818] border-t-2 border-[#ff6d5a] rounded-t-lg overflow-hidden"
          >
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setIsOpen(false)}
                className={`sm:max-xl:block sm:max-xl:py-2 sm:max-xl:px-4 font-normal text-lg transition-all duration-300 ${
                  active == id
                    ? "text-[#ff6d5a]"
                    : "text-white xl:!text-[#b5b5c0] hover:text-[#ff6d5a]"
                }`}
              >
                {id}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </Navbar>
  );
}

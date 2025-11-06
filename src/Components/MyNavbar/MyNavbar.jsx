import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import LetterE from "../../assets/images/Letter E.png";
import HireButton from "../HireButton/HireButton";
import { useEffect, useState } from "react";
export function MyNavbar() {
  const [active, setactive] = useState("Home");
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
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);
  return (
    <Navbar className="Nav px-0 md:px-4 py-7 bg-transparent absolute top-0 left-0 w-full">
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
      <div className="flex md:order-2 items-center gap-3">
        <div className="hidden lg:flex font-Lexend">
          <HireButton />
        </div>
        <NavbarToggle />
      </div>

      <NavbarCollapse className="Navlinks font-Jost py-3">
        {sections.map((id) => (
          <NavbarLink
            key={id}
            href={`#${id}`}
            className={`font-normal text-lg transition-all duration-300 ${
              active == id
                ? "text-[#ff6d5a]"
                : "text-[#b5b5c0] hover:text-[#ff6d5a]"
            }`}
          >
            {id}
          </NavbarLink>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
}

import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import LetterE from "../../assets/images/Letter E.png";
import HireButton from "../HireButton/HireButton";
export function MyNavbar() {
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
        <HireButton/>
       </div>
        <NavbarToggle />
      </div>

      <NavbarCollapse className="Navlinks font-Jost py-3">
          <NavbarLink
            href="#"
            active
            className="text-[#ff6d5a] font-normal text-lg hover:text-[#ff6d5a] transition-all duration-300"
          >
            Home
          </NavbarLink>
          <NavbarLink
            href="#"
            className="text-[#b5b5c0] font-normal text-lg hover:text-[#ff6d5a] transition-all duration-200"
          >
            About
          </NavbarLink>
          <NavbarLink
            href="#"
            className="text-[#b5b5c0] font-normal text-lg hover:text-[#ff6d5a] transition-all duration-200"
          >
            Services
          </NavbarLink>
          <NavbarLink
            href="#"
            className="text-[#b5b5c0] font-normal text-lg hover:text-[#ff6d5a] transition-all duration-200"
          >
            Projects
          </NavbarLink>
          <NavbarLink
            href="#"
            className="text-[#b5b5c0] font-normal text-lg hover:text-[#ff6d5a] transition-all duration-200"
          >
            Contact
          </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

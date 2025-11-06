import { Button } from "flowbite-react";
import React from "react";

export default function Footer() {
  return (
    <>
      <section id="footer">
        <div className="xl:mx-[159px] sm:max-md:px-4 md:max-lg:px-3 text-center">
          <div className="sm:max-lg:py-16 lg:py-20 xl:flex justify-around items-center font-Lexend">
            <div>
              <h1 className="sm:max-lg:text-[46px] lg:max-xl:text-[70px] xl:text-[92px] sm:max-lg:leading-[59px] lg:max-xl:leading-[90px] xl:leading-[119px] sm:max-xl:mb-5 font-semibold bg-gradient-to-l from-[#8b85ff] to-[#ffeae8] bg-clip-text text-transparent ">
                Have a project?
              </h1>
            </div>
            <div className="flex justify-center">
              <Button className="!bg-[#ff6d5a] !rounded-lg h-auto  text-lg font-semibold sm:max-xl:py-2 px-8 xl:py-4  relative overflow-hidden group focus:ring-0 focus:outline-none">
                <span className="inline-block  transition-all duration-300 group-hover:-translate-y-10">
                  Let's Talk
                </span>
                <span className="absolute inset-0 flex items-center justify-center translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  Let's Talk
                </span>
              </Button>
            </div>
          </div>
          <div className="copyright font-Jost">
            <p>Designed & Built by Eslam ElGharbawy</p>
          </div>
        </div>
      </section>
    </>
  );
}

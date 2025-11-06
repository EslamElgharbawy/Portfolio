import { Button } from "flowbite-react";
import React from "react";

export default function Footer() {
  return (
    <>
      <section id="footer">
        <div className="xl:mx-[159px] xl:px-3">
          <div className="py-20 flex justify-around items-center font-Lexend">
            <div className="">
              <h1 className="text-[92px] leading-[119px] font-semibold bg-gradient-to-l from-[#8b85ff] to-[#ffeae8] bg-clip-text text-transparent ">
                Have a project?
              </h1>
            </div>
            <div>
              <Button className="!bg-[#ff6d5a] !rounded-lg h-auto  text-lg font-semibold px-9 py-4  relative overflow-hidden group focus:ring-0 focus:outline-none">
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

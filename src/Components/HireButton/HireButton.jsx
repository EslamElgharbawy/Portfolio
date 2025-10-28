import { Button } from "flowbite-react";

export default function HireButton() {
  return (
    <>
      <div className="bg-[#ff6d5a] rounded-lg md:order-2  md:flex">
        <Button className="text-lg font-semibold px-7 py-3 h-12 relative overflow-hidden group focus:ring-0 focus:outline-none">
          <span className="inline-block  transition-all duration-300 group-hover:-translate-y-10">
            Hire Me
          </span>
          <span className="absolute inset-0 flex items-center justify-center translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            Hire Me
          </span>
        </Button>
      </div>
    </>
  );
}

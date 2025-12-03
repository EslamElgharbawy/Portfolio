import { motion } from "framer-motion";
export default function ProjectCard({
  project_image,
  Link,
  project_name,
  description,
}) {
  return (
    <>
      <div className="sm:max-md:min-h-[365px] md:max-lg:min-h-[395px] lg:min-h-[400px] xl:min-h-[400px] md:max-xl:scale-95">
        <div className="Card_hover p-4 bg-white rounded-lg relative">
          <a href={Link} target="_blank" rel="noopener noreferrer">
            <div className="relative overflow-hidden rounded-lg  group">
              <img
                src={project_image}
                alt={project_name}
                className="w-full object-cover transition-all duration-[0.35s] ease-linear group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
            </div>
          </a>
          <div className="flex justify-between items-center mt-5">
            <div>
              <h1 className="font-Lexend text-[25px] font-medium   text-[#12103e]">
                {project_name}
              </h1>
              <p className="relative font-Jost w-fit text-[#767682] font-medium">
                {description}
              </p>
            </div>
            <motion.a
              href={Link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#ff6d5a1a] overflow-hidden transition-all duration-300 ease-in-out text-[#ff6d5a] flex justify-center items-center rounded-full relative"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.span
                className="block"
                variants={{
                  rest: { y: 0, x: 0 },
                  hover: { y: "-20px", x: "20px" },
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
              >
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 10L10 1"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M1 1H10V10"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </motion.span>
              <motion.span
                className="absolute inset-0 flex items-center justify-center"
                variants={{
                  rest: { y: "20px", x: "-20px" },
                  hover: { y: 0, x: 0 },
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
              >
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 10L10 1"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M1 1H10V10"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </motion.span>
            </motion.a>
          </div>
        </div>
      </div>
    </>
  );
}

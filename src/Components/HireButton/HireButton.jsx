import { motion } from "framer-motion";

export default function HireButton() {
  return (
    <>
      <div className="bg-second rounded-lg md:order-2 md:flex">
        <motion.a
          href="#Contact"
          className="text-white text-lg font-semibold px-7 py-3  relative overflow-hidden focus:ring-0 focus:outline-none"
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <motion.span
            className="block"
            variants={{
              rest: { y: 0 },
              hover: { y: -45 },
            }}
            transition={{
              duration: 0.55,
              ease: "linear",
              type: "spring",
              stiffness: 120,
            }}
          >
            Hire Me
          </motion.span>
          <motion.span
            className="absolute inset-0 flex items-center justify-center"
            variants={{
              rest: { y: 45 },
              hover: { y: 0 },
            }}
            transition={{
              duration: 0.55,
              ease: "linear",
              type: "spring",
              stiffness: 120,
            }}
          >
            Hire Me
          </motion.span>
        </motion.a>
      </div>
    </>
  );
}

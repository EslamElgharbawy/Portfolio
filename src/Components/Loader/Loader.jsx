import { motion } from "framer-motion";
export default function Loader() {
  return (
    <>
      <motion.div
        className="cs_preloader cs_center"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="cs_preloader_in"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        ></motion.div>
      </motion.div>
    </>
  );
}

import Eslam from "../../assets/images/upscalemedia-transformed.png";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <>
      <section id="Home">
        <div className="centerSide relative flex justify-center items-center w-full h-full pt-[120px]  lg:pt-[8%] lg:pb-[70px] px-[12px]">
          <img
            src={Eslam}
            alt="Eslam ElGahrbawy"
            className="h-[520px] xl:h-[540px] object-cover sm:max-md:max-w-[340px] md:max-xl:max-w-[360px]"
          />
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="name absolute sm:bottom-[20px] sm:max-md:bottom-[4%] xl:bottom-[3%] 2xl:bottom-[8%] px-4 text-center z-10"
          >
            <h1 className=" sm:max-md:text-[42px] md:text-[46px] xl:text-[85px] font-extrabold font-Lexend bg-gradient-to-l from-[#8b85ff] to-[#ffeae8] bg-clip-text text-transparent leading-snug">
              Eslam ElGharbawy
            </h1>
            <p className="font-Jost text-[20px] md:text-[22px] xl:text-[24px] font-normal text-[#b5b5c0]">
              Do you have a project?
              <span className="pl-2">
                <a
                  href="#Contact"
                  className="relative font-semibold text-[#ff6d5a] before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#ff6d5a] before:transition-all before:duration-500 hover:before:w-full"
                >
                  Let’s Talk
                </a>
              </span>
            </p>
          </motion.div>
        </div>
        <div className="container font-Jost flex lg:flex-row justify-between px-2 md:px-3 py-12  lg:absolute lg:z-10 lg:top-[42%] lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
          <div className="leftSide">
            <div className="flex flex-col justify-center items-start gap-10 ">
              <div className="MyInfo pl-8 lg:pl-0 min-w-[260px]">
                <h2 className="text-[#ff6d5a] text-xl font-semibold">
                  Frontend Developer
                </h2>
                <h3 className="text-white opacity-60 text-lg">Based in EGY</h3>
              </div>
              <div className="MyEmail pl-8 lg:pl-0 min-w-[260px]">
                <h2 className="text-white opacity-60 text-lg">Say hello to</h2>
                <h3 className="text-white text-lg">eslamelsayd334@gmail.com</h3>
              </div>
              <div className="Links flex justify-center items-start">
                <a
                  href="https://www.facebook.com/share/1AVxLbQ5JM/"
                  className="p-3"
                >
                  <i class="fa-brands fa-facebook-f text-2xl text-[#352eac] hover:text-[#ff6d5a] duration-300"></i>
                </a>
                <a
                  href="https://www.instagram.com/eslam_elgharbawy0?igsh=MjduanhlN200amln"
                  className="p-3"
                >
                  <i class="fa-brands fa-instagram text-2xl text-[#352eac] hover:text-[#ff6d5a] duration-300"></i>
                </a>
                <a
                  href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BOzl7lXCPRha7ee9yJNO6uA%3D%3D"
                  className="p-3"
                >
                  <i class="fa-brands fa-linkedin-in text-2xl text-[#352eac] hover:text-[#ff6d5a] duration-300"></i>
                </a>
                <a href="https://github.com/EslamElgharbawy" className="p-3">
                  <i class="fa-brands fa-github text-2xl text-[#352eac] hover:text-[#ff6d5a] duration-300"></i>
                </a>
              </div>
            </div>
            <div></div>
          </div>
          <div className="rightSide">
            <div className="achivements pb-6 border-b border-[#19155b] text-right">
              <h2 className="text-white text-2xl font-Inter font-semibold">
                100%
              </h2>
              <h3 className="text-white opacity-60 lg:text-lg">
                {" "}
                Learning & Improving
              </h3>
            </div>
            <div className="achivements py-6 border-b border-[#19155b] text-right">
              <h2 className="text-white text-2xl font-Inter font-semibold">
                10+
              </h2>
              <h3 className="text-white opacity-60 lg:text-lg">
                {" "}
                Projects Done
              </h3>
            </div>
            <div className="achivements pt-6 text-right">
              <h2 className="text-white text-2xl font-Inter font-semibold">
                1+
              </h2>
              <h3 className="text-white opacity-60 lg:text-lg">
                {" "}
                Years Experience
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

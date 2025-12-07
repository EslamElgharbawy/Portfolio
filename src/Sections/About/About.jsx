import { Progress, TabItem, Tabs } from "flowbite-react";
import AboutImage from "../../assets/images/upscalemedia-transformed (2)9.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <>
      <section id="About" className="py-[80px] xl:py-[150px]">
        <div className="xl:mx-[159px]">
          <div className="xl:flex justify-center items-center  lg:max-2xl:mx-10 sm:max-lg:mx-2">
            <div className="xl:w-1/2 px-3">
              <div className="image_back flex justify-center sm:w-[300px] md:w-[370px] lg:w-[600px] xl:w-[500px] rounded-tr-3xl rounded-tl-3xl rounded-br-3xl relative">
                <img
                  src={AboutImage}
                  alt="Eslam ElGahrbawy"
                  className="w-full xl:!w-[430px]"
                />
              </div>
            </div>
            <div className="xl:w-1/2 px-3">
              <div className="xl:ps-14 mt-12 xl:mt-16">
                <motion.div
                  ref={ref}
                  className="flex gap-4 text-third w-fit"
                  initial={{ x: 30, opacity: 0 }}
                  animate={
                    isInView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }
                  }
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                  <p className="font-Jost">About Me</p>

                  <motion.span
                    className="icon-animation"
                    animate={{ rotateY: 360 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    {" "}
                    <svg
                      width="34"
                      height="18"
                      viewBox="0 0 34 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.164 1.06887C13.1878 2.25431 14.6046 4.16031 15.5689 3.80003C15.9856 3.63732 15.9856 3.463 15.5332 2.19621C14.4498 -0.813889 13.1402 0.115862 13.164 1.06887ZM21.0215 3.75354C20.6882 4.67168 21.843 4.83439 22.6407 3.98598C23.4502 3.11433 24.3193 1.81268 24.7836 0.929407C25.2956 0.0810016 24.2955 -0.349012 23.4621 0.348307C22.474 1.16185 21.2477 3.11433 21.0215 3.75354ZM4.61598 3.0446C3.87784 3.33515 6.35416 6.33363 7.35421 6.35687C8.52093 6.38011 8.61615 6.12443 7.80659 5.06683C6.53272 3.39327 5.46126 2.70757 4.61598 3.0446ZM15.807 7.35636C15.3665 7.78637 14.8426 8.3791 14.6403 8.65803C12.9021 11.1916 12.8783 11.2149 12.0806 10.6221C10.2353 9.274 7.1994 8.35586 7.79467 10.7035C8.16374 12.1214 9.25905 14.7131 9.54478 15.5731C10.2829 17.8394 10.6758 18.2113 11.9854 17.9091C15.2355 17.1421 19.8787 17.1188 23.2003 17.851C24.0217 18.037 24.0693 17.944 24.1527 16.3285C24.3194 13.0628 26.248 9.87833 26.248 8.8556C26.248 7.70502 24.0217 8.56505 20.9978 10.8778L20.6882 11.1103L20.2477 10.8197C19.3429 10.227 18.8905 10.6919 19.4024 11.6797C19.8191 12.4817 20.1644 12.749 21.0811 12.319C21.6049 12.0749 22.3311 11.61 23.355 10.9011C23.7598 10.6221 24.0932 10.4246 24.0932 10.4594C24.0932 10.6221 23.3669 13.6671 23.3669 13.6787L21.5573 13.5276C20.1167 13.4695 19.9501 14.2133 21.4382 14.4342C21.593 14.4574 23.1169 14.6434 23.1169 14.6434C23.1169 14.6434 23.0574 15.2942 22.8907 15.6661C22.7121 16.038 22.4145 16.131 21.9264 15.9683C18.1047 14.7363 11.8782 16.2356 11.8663 16.2356C11.6401 16.2704 9.56861 10.9359 9.73528 10.7732C9.75909 10.75 10.0091 10.9011 10.2948 11.1103C13.5211 13.3998 13.8545 13.3301 15.9856 9.99456L16.9856 8.42559L17.3785 8.99507C18.5214 10.657 20.1405 9.92483 19.2357 8.70452C18.9262 8.29775 18.4143 7.6934 17.5928 6.75202C17.2238 6.32201 16.6761 6.50795 15.807 7.35636ZM31.2959 7.18203C30.8673 7.42609 28.6291 9.51805 28.3672 9.9132C27.8076 10.7848 28.9743 10.9824 30.0339 10.1921C31.2721 9.27399 33.0222 7.69341 33.0222 7.48421C33.0341 7.06582 31.8793 6.85661 31.2959 7.18203ZM1.8063 12.749C3.54448 13.1674 4.54451 13.272 4.93739 13.0628C5.58028 12.7257 5.28265 12.4817 3.75877 12.1098C3.6159 12.0749 2.21106 11.6914 1.24672 11.6914C0.556213 11.6914 -0.979555 12.0633 1.8063 12.749Z"
                        fill="#342EAD"
                      ></path>{" "}
                    </svg>{" "}
                  </motion.span>
                </motion.div>
                <div className="section_Header mb-8 xl:mb-10">
                  <h1 className="text-primary">
                    Why you <span className="text-second">hire me </span> for
                    your <span className="text-third">next project?</span>
                  </h1>
                </div>

                <div className="info min-h-[380px] ">
                  <Tabs
                    aria-label="Pills"
                    variant="pills"
                    className="tabs-custom font-Jost gap-8"
                  >
                    <TabItem active title="MYSELF">
                      <div className="w-fit">
                        <p className="text-lg text-fourth">
                          I am a Computer Science student and a Frontend
                          Engineer with strong experience in HTML, CSS,
                          JavaScript, TypeScript, React.js, and Next.js. I work
                          on building simple, fast, and responsive user
                          interfaces. I also have experience with Bootstrap,
                          Tailwind CSS, and Material UI, which helps me create
                          clean, attractive designs that reflect brand identity.
                          I always keep up with the latest trends and
                          technologies in frontend development to deliver modern
                          and up-to-date work.
                        </p>
                        <div className="bg-second rounded-lg md:flex text-white w-fit mt-8 font-Jost">
                          <motion.a
                            href="https://drive.google.com/file/d/1R6op2_UhdGhUM5dlcXB7l6gAFxqDxmbT/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-lg font-semibold sm:max-xl:px-8 xl:px-9 py-3 relative overflow-hidden focus:ring-0 focus:outline-none flex justify-center items-center"
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
                              View Resume
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
                              View Resume
                            </motion.span>
                          </motion.a>
                        </div>
                      </div>
                    </TabItem>
                    <TabItem title="EDUCATION">
                      <p className="text-lg text-fourth">
                        <ul className="space-y-4">
                          <li className="flex items-center gap-3">
                            <span className="text-second">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </span>
                            B.Sc. in Computer Science – Suez Canal University
                          </li>

                          <li className="flex items-center gap-3">
                            <span className="text-second">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </span>
                            UX/UI Design Summer Training – ITI (Aug 2025)
                          </li>

                          <li className="flex items-center gap-3">
                            <span className="text-second">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </span>
                            Focused on Frontend Development using React,
                            Tailwind CSS, and TypeScript
                          </li>
                        </ul>
                      </p>
                    </TabItem>
                    <TabItem title="MYTOOLS">
                      <div className="mb-5">
                        <h2 className="text-xl font-semibold text-second font-Lexend">
                          Skills
                        </h2>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                        <div>
                          <div className="flex justify-between items-center bottom-1">
                            <h2 className="text-xl">HTML</h2>
                            <span className="text-sm font-Lexend">95%</span>
                          </div>
                          <Progress className="progress" progress={95} />
                        </div>
                        <div>
                          <div className="flex justify-between items-center bottom-1">
                            <h2 className="text-xl">CSS</h2>
                            <span className="text-sm font-Lexend">88%</span>
                          </div>
                          <Progress className="progress" progress={88} />
                        </div>
                        <div>
                          <div className="flex justify-between items-center bottom-1">
                            <h2 className="text-xl">Javascript</h2>
                            <span className="text-sm font-Lexend">80%</span>
                          </div>
                          <Progress className="progress" progress={80} />
                        </div>
                        <div>
                          <div className="flex justify-between items-center bottom-1">
                            <h2 className="text-xl">React.js</h2>
                            <span className="text-sm font-Lexend">92%</span>
                          </div>
                          <Progress className="progress" progress={92} />
                        </div>
                        <div>
                          <div className="flex justify-between items-center bottom-1">
                            <h2 className="text-xl">Tailwind CSS</h2>
                            <span className="text-sm font-Lexend">90%</span>
                          </div>
                          <Progress className="progress" progress={90} />
                        </div>
                        <div>
                          <div className="flex justify-between items-center bottom-1">
                            <h2 className="text-xl">TypeScript</h2>
                            <span className="text-sm font-Lexend">75%</span>
                          </div>
                          <Progress className="progress" progress={75} />
                        </div>
                      </div>
                    </TabItem>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

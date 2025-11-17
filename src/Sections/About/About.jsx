import { Button, Progress, TabItem, Tabs } from "flowbite-react";
import AboutImage from "../../assets/images/upscalemedia-transformed (2)9.png";
export default function About() {
  return (
    <>
      <section id="About" className="py-[80px] xl:py-[150px]">
        <div className="xl:mx-[159px]">
          <div className="xl:flex justify-center items-center  lg:max-2xl:mx-10 sm:max-lg:mx-2">
            <div className="xl:w-1/2 px-3">
              <div className="image_back flex justify-center xl:w-[500px] rounded-tr-3xl rounded-tl-3xl rounded-br-3xl relative">
                <img
                  src={AboutImage}
                  alt="Eslam ElGahrbawy"
                  className="w-full xl:!w-[430px]"
                />
              </div>
            </div>
            <div className="xl:w-1/2 px-3">
              <div className="xl:ps-14 mt-12 xl:mt-16">
                <div className="text-[42px] leading-tight xl:leading-normal xl:text-5xl font-semibold font-Lexend mb-8 xl:mb-10">
                  <h1 className="text-[#12103e]">
                    Why you <span className="text-[#ff6d5a]">hire me </span> for
                    your <span className="text-[#342ead]">next project?</span>
                  </h1>
                </div>

                <div className="info min-h-[350px] ">
                  <Tabs
                    aria-label="Pills"
                    variant="pills"
                    className="tabs-custom font-Jost gap-8"
                  >
                    <TabItem active title="MYSELF">
                      <div className="w-fit">
                        <p className="text-lg text-[#767682]">
                          I am a Computer Science student and Frontend Engineer
                          skilled at HTML, CSS, Javascript and React js also has
                          good experience in Ui frameworks as (Bootstrap,
                          Tailwind CSS , Material Ui) to create a unique
                          customer experience that highlights brand messaging
                          also Maintains up to date awareness of technological
                          trends and technological advances.
                        </p>
                        <div className="w-fit mt-8 font-Jost">
                          <div className="bg-[#ff6d5a] rounded-lg md:order-2 md:flex">
                            <Button className="text-lg font-semibold px-8 h-12 xl:!px-9 xl:!h-14 relative overflow-hidden group focus:ring-0 focus:outline-none">
                              <a className="flex justify-center items-center transition-all duration-300 group-hover:-translate-y-10">
                                View Resume
                              </a>
                              <a
                                href="https://drive.google.com/file/d/1R6op2_UhdGhUM5dlcXB7l6gAFxqDxmbT/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 flex items-center justify-center translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                              >
                                View Resume
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </TabItem>
                    <TabItem title="EDUCATION">
                      <p className="text-lg text-[#767682]">
                        B.Sc. in Computer Science, Suez Canal University <br />
                        UX/UI Design Summer Training, ITI (Aug 2025) <br />
                        Focused on Frontend Development with React, Tailwind
                        CSS, and TypeScript.
                      </p>
                    </TabItem>
                    <TabItem title="MYTOOLS">
                      <div className="mb-5">
                        <h2 className="text-xl font-semibold text-[#ff6d5a] font-Lexend">
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

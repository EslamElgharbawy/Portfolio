import { useRef } from "react";
import Card from "../../Components/Card/Card";
import { motion, useInView } from "framer-motion";

export default function Services() {
  const ref = useRef(null);
  const isinView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <>
      <section id="Services" className="py-[80px] xl:py-[150px] sm:max-xl:px-5">
        <div className="xl:mx-[159px]">
          <motion.div
            ref={ref}
            className="flex gap-4 text-[#342ead]"
            initial={{ x: -30, opacity: 0 }}
            animate={isinView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <p className="font-Jost ">Services</p>
            <motion.span
              animate={{ rotateY: 360 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="icon-animation"
            >
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.3165 0.722028C7.59665 0.85855 7.46009 1.00749 7.3608 1.6529C7.28633 2.17419 7.27388 2.1866 7.01329 2.02525C5.33769 0.933026 1.46525 3.71325 2.66918 5.14059C3.30217 5.88533 3.48833 6.25767 3.57521 6.38178C1.5521 6.69201 0.96875 6.64236 0.96875 8.90136C0.96875 10.7755 1.46522 10.6762 3.82344 10.8376C3.61244 11.1355 2.7809 12.4387 2.30925 12.9848C1.8252 13.5433 1.84999 13.6674 2.59469 14.4494C4.76674 16.7455 5.90861 17.1179 7.05048 15.9015C7.5221 15.4051 7.6463 15.492 7.65866 16.3856C7.68349 17.4778 8.94951 17.7881 12.1889 17.4654C14.2245 17.2668 14.0382 17.031 13.8769 15.8643L15.1802 16.4104C16.5082 16.9689 17.0171 16.5966 19.636 13.1337C19.7973 12.9227 19.3133 12.5008 18.9161 12.5008C18.7671 12.5008 18.3699 12.2525 18.0348 11.9546L17.4142 11.4085C17.8487 11.3589 18.5685 11.2596 19.1519 11.1603C19.4497 11.1106 19.6608 10.8624 19.6856 10.5645C19.8097 8.78962 19.8594 8.0325 19.8594 8.04495C19.8718 7.84638 19.7725 7.64771 19.6111 7.53605C19.4249 7.41194 19.1147 7.25055 18.5686 7.1389C17.6997 6.96514 17.6873 7.05198 18.6678 6.00944C19.7228 4.86753 19.7477 4.942 17.8735 3.01819C16.26 1.35502 14.9692 0.833728 14.1748 1.49155L13.7901 1.81425L13.7155 1.50396C13.5294 0.759261 10.4513 0.312435 8.3165 0.722028ZM11.7918 3.30365C11.9034 5.94734 12.3627 6.17074 13.9266 4.35865C15.5526 2.48449 15.3044 2.55895 16.409 3.61395C17.5881 4.731 17.6253 4.55724 15.9993 6.08391C14.1624 7.79673 14.2866 8.15661 16.6199 7.90839C18.3327 7.72218 18.1465 8.10696 17.9728 10.2542C14.8698 10.4528 13.8273 10.4528 15.4656 11.6195C16.744 12.538 17.3149 13.084 17.166 13.2826C17.0915 13.3695 15.5898 15.2313 15.5898 15.2313C15.3912 15.0824 15.0933 14.9583 14.0755 13.9777C12.5861 12.5628 12.0897 12.7738 12.1393 14.8465L12.1766 16.3236C9.64453 16.6711 9.73145 16.8324 9.59489 14.5238C9.54524 13.6799 9.65699 12.1656 7.94417 12.8358C7.17459 13.1337 6.20649 13.9156 5.80931 14.6479C5.63555 14.9706 5.51145 14.921 4.70469 14.3004C3.81104 13.6178 3.78622 13.8163 4.89086 12.5131C5.25079 12.0912 5.61075 11.6071 5.83416 11.2719C6.70298 9.93153 5.39977 9.64603 3.81108 9.64603H3.09116C3.09116 9.64603 3.10358 8.2559 3.21528 7.63534C3.3394 7.63534 4.13374 7.64771 4.89086 7.66017C6.92637 7.68499 6.98845 7.63534 6.08239 6.64236C5.22599 5.71149 4.7419 5.09094 4.44403 4.74341C4.61779 4.58206 3.83589 5.33917 6.09482 3.1423C6.23134 3.29124 6.93879 4.03594 7.62148 4.85511C8.4778 5.88524 9.48323 5.50053 9.48323 4.80547V4.06077C9.4956 1.40467 9.38385 1.59084 10.9106 1.62807L11.7173 1.64049L11.7918 3.30365Z"
                  fill="#342EAD"
                ></path>
              </svg>
            </motion.span>
          </motion.div>
          <div className="mb-[72px] leading-normal sm:max-lg:text-[42px] lg:text-5xl font-semibold font-Lexend">
            <h1 className="text-[#12103e]">
              How Can
              <span className="text-[#ff6d5a]"> I help you</span>
            </h1>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:max-xl:gap-4 xl:gap-8 justify-items-center font-Jost">
              <Card
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-8 text-[#342ead]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                    />
                  </svg>
                }
                title={"Web Development"}
                body={
                  "I build responsive, fast, and modern websites using React, Tailwind CSS, and API integrations"
                }
              />
              <Card
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-8 text-[#342ead]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                }
                title={"Responsive Design"}
                body={
                  "I ensure all websites I build look great on every device from desktops to smartphones"
                }
              />
              <Card
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-8 text-[#342ead]"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                    />{" "}
                  </svg>
                }
                title={"Website Optimization"}
                body={
                  "Improving website speed, accessibility, and SEO for better performance and user experience."
                }
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

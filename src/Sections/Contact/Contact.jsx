import { Button, Textarea, TextInput } from "flowbite-react";
import InfoCard from "../../Components/InfoCard/InfoCard";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  /**
   * @param {Event} e
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      await fetch("/", {
        method: "POST",
        body: formData,
      });

      toast.success("Message sent successfully 🎉", { duration: 3000 });
      e.target.reset();
    } catch (error) {
      toast.error("Failed to send message. Try again!");
    }
  };
  return (
    <>
      <Toaster position="top-center" />
      <section id="Contact" className="py-[150px]">
        <div className="xl:mx-[159px] grid xl:grid-cols-2">
          <div className="mb-[72px]">
            <div className="mb-8">
              <h1 className="sm:max-lg:text-[42px] lg:text-5xl font-semibold font-Lexend text-[#12103e] leading-tight mb-6">
                Let’s Discuss
                <span className="text-[#ff6d5a]">
                  {" "}
                  Your
                  <br />
                  Project
                </span>
              </h1>
              <p className="text-[#767682] font-Jost text-[18px] max-w-[400px]">
                Always available for freelancing if the right project comes
                along
              </p>
            </div>

            <div className="space-y-3">
              <InfoCard
                Title={"Address:"}
                Content={"Port Said"}
                svg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-[#ff6d5a] group-hover:text-white group-hover:duration-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                }
              />
              <InfoCard
                Title={"My Email:"}
                Content={"eslamelsayd334@gmail.com"}
                svg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-[#ff6d5a] group-hover:text-white group-hover:duration-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                }
              />
              <InfoCard
                Title={"Call Me Now:"}
                Content={"01212938700"}
                svg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-[#ff6d5a] group-hover:text-white transition-all duration-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                }
              />
            </div>
          </div>

          <div className="form w-full mt-10">
            <h3 className="text-[#767682] font-Jost text-[18px] mb-4">
              Got a project in mind? Fill in the form or send me.
            </h3>
            <form
              className="flex flex-col gap-5"
              name="hire-me"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="hire-me" />
              <input type="hidden" name="name" />
              <input type="hidden" name="email" />
              <input type="hidden" name="subject" />
              <input type="hidden" name="message" />
              <input type="text" name="bot-field" style={{ display: "none" }} />

              <div>
                <TextInput
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="input font-Jost"
                />
              </div>

              <div>
                <TextInput
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className="input font-Jost"
                />
              </div>

              <div>
                <TextInput
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  required
                  className="input font-Jost"
                />
              </div>

              <div>
                <Textarea
                  id="comment"
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={6}
                  className="bg-white font-Jost !pl-4 text-base border-2 border-[#ecebf9] transition-all duration-150 ease-in-out focus:border-[#ff6d5a] focus:outline-none focus:ring-0 focus:shadow-[0_0_0_1px_#ff6d5a]"
                />
              </div>

              <Button
                type="submit"
                className="w-fit mt-2 !bg-[#ff6d5a] font-Lexend focus:outline-none focus:ring-0 text-lg h-auto !py-3 !px-9"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

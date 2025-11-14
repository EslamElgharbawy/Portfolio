import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";

export default function Contact() {
  return (
    <>
      <section className="py-[150px]">
        <div className="xl:mx-[159px] grid xl:grid-cols-2">
          <div className="mb-[72px]">
            <div className="mb-12">
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
                along, Feel free to contact me.
              </p>
            </div>

            <div>
              <div className="flex gap-3 w-fit justify-center items-center">
                <span className="w-[50px] h-[50px] flex justify-center items-center bg-[#FF6D5A1A] rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-[#ff6d5a]"
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
                </span>
                <div className="">
                    <p className="font-Jost text-[#767682] text-sm">Address:</p>
                    <p className="font-Lexend text-lg">Port Said</p>
                </div>
              </div>
              
            </div>
          </div>

          <div className="form w-full mt-10">
            <h3 className="text-[#767682] font-Jost text-[18px] mb-4">
              Got a project in mind? Fill in the form or send us.
            </h3>
            <form className="flex flex-col gap-4 ">
              <div>
                <TextInput
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <TextInput
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <TextInput
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  required
                />
              </div>
              <div>
                <Textarea
                  id="comment"
                  placeholder="Your Message"
                  required
                  rows={6}
                />
              </div>
              <Button
                type="submit"
                className="bg-red-600 font-Lexend text-lg h-auto !py-3 !px-9"
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

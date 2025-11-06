export default function Card({ icon, projects, title, body }) {
  return (
    <>
      <div className="Card lg:px-5 lg:min-w-[410px] mb-20">
        <div className="Card_sahdow relative rounded-[20px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_12.5%,#fff_100%)] shadow-2xl px-9 pb-10 pt-16">
          <div className="Card-icon">{icon}</div>
          <div>
            <div className="Card-title mb-4">
              <p className="text-[15px] text-[#9e9eac] uppercase">
                {projects} Projects
              </p>
              <h3 className="font-Lexend text-[28px] font-medium text-[#12103e] ">
                {title}
              </h3>
            </div>
            <div className="Card-body mb-8 text-lg text-[#767682]">
              <p>{body}</p>
            </div>
            <div className="Explore">
              <p className="text-[#12103e] pr-8">Explore</p>
              <div className="Explore-icon group">
                <span className="inline-block  transition-all duration-300 group-hover:translate-y-[-20px] group-hover:translate-x-[20px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="size-4 text-[#ff6d5a]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </span>
                <span className="absolute translate-x-[-20px] translate-y-[20px] flex items-center justify-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="size-4 text-[#ff6d5a]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

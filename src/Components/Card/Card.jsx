export default function Card({ icon, projects, title, body }) {
  return (
    <>
      <div className="px-5 rounded-t-[20] ">
        <div className="Card_sahdow bg-white shadow-2xl px-9 pb-6">
          <div className="Card-icon mb-5 p-2">
            {icon}
          </div>
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
              {/* <span className="Explore-icon"></span> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

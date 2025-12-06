export default function Card({ icon, title, body }) {
  return (
    <>
      <div className="Card lg:px-5 lg:min-w-[410px] sm:max-xl:mb-20">
        <div className="Card_sahdow relative rounded-[20px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_12.5%,#fff_100%)] shadow-2xl px-9 pb-10 pt-16">
          <div className="Card-icon">{icon}</div>
          <div>
            <div className="Card-title mb-4">
              <h3 className="font-Lexend text-[28px] font-medium text-primary ">
                {title}
              </h3>
            </div>
            <div className="Card-body mb-4 text-lg text-fourth">
              <p>{body}</p>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
}

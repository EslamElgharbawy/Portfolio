export default function InfoCard({ Title, Content, svg }) {
  return (
    <>
      <div className="Info_card flex gap-3 w-full max-w-[400px] justify-start items-center hover:shadow-[0_10px_32px_rgba(0,0,0,0.08)] transition-all duration-300 hover:rounded-xl group p-5">
        <span className="w-[50px] h-[50px] flex justify-center items-center bg-[#FF6D5A1A] group-hover:bg-[#ff6d5a] transition-all duration-300 rounded-lg">
          {svg}
        </span>
        <div className="">
          <p className="font-Jost text-[#767682] text-sm">{Title}</p>
          <p className="font-Lexend text-lg">{Content}</p>
        </div>
      </div>
    </>
  );
}

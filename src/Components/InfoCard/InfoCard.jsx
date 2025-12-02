export default function InfoCard({ Title, Content, svg }) {
  return (
    <>
      <div
        className="Info_card flex gap-3 w-full max-w-[400px] justify-start items-center p-4"
      >
        <span className="w-[50px] h-[50px] flex justify-center items-center bg-[#FF6D5A1A] rounded-lg">
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

import CircularDiv from "@/components/ui/CircularDiv";
import Link from "next/link";

export default function HomeHero1() {
  return (
    <section
      id="#hero1"
      className="py-10 flex flex-col items-center md:px-0 md:flex-row md:space-x-10 space-y-8 md:space-y-0"
    >
      <div
        className="flex flex-col space-y-4 w-full md:w-1/2 px-4 items-center justify-center
       md:items-start md:justify-start text-center md:text-left py-6"
      >
        <h1 className="font-bold text-2xl md:text-4xl md:leading-10">
          Welcome to space Power developer Community
        </h1>
        <p className="text-sm">
          CodeCrafters: Crafting Tomorrow&apos;s Solutions Today
        </p>
        <button
          className="px-8 py-2 rounded-full bg-gradient-to-r from-[#7CFEDE] 
        to-[#fff] text-black max-w-fit font-bold hover:brightness-75"
        >
          <Link href="/">Job openings</Link>
        </button>
      </div>

      <div className="flex flex-col space-y-0 w-full md:w-1/2 sm:px-2 md:px-20 py-10">
        <div className="items-start justify-start">
          <CircularDiv>
            <h1 className="font-bold text-3xl">Software</h1>
          </CircularDiv>
        </div>

        <div className="items-end justify-end ml-auto">
          <CircularDiv>
            <h1 className="font-bold text-3xl">Application</h1>
          </CircularDiv>
        </div>
      </div>
    </section>
  );
}

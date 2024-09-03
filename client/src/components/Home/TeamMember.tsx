import Image from "next/image";

export default function TeamMember() {
  return (
    <div className="p-4 rounded-lg space-y-2 w-full flex-1">
      <div className="relative aspect-square">
        <Image
          src="/user.webp"
          alt="logo"
          width={200}
          height={150}
          className="z-50 object-cover p-4"
        />
        <div
          className="w-full h-full absolute bg-slate-300 top-0 rounded-sm -z-10 
        rounded-tl-[60px] rounded-br-[50px]"
        />
      </div>

      <h1 className="font-medium pt-2 text-center text-base md:text-xl">Andrew Garfield</h1>
      <p className="text-xs md:text-base text-center font-medium">Founder and CEO</p>
    </div>
  );
}

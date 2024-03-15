import Image from "next/image";

export default function Product() {
  return (
    <div className="flex items-center space-x-2">
      <Image
        src="/tg.png"
        alt="product"
        width={30}
        height={50}
        className="object-cover h-8 w-8 md:w-14 md:h-14"
      />

      <div className="flex flex-col justify-between h-full">
        <h6 className="text-sm md:text-base">Spdc online group meet</h6>
        <p className="text-xs">Free</p>
      </div>
    </div>
  );
}

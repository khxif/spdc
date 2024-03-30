import Image from "next/image";
import Link from "next/link";

export default function HomeHero2() {
  return (
    <section
      id="hero2"
      className="py-10 flex items-center flex-col-reverse md:flex-row md:space-x-20 space-y-10 md:space-y-0"
    >
      <div className="w-full md:flex-1 p-10">
        <Image
          src="/home-hero.png"
          alt="hero"
          height={500}
          width={500}
          draggable={false}
          quality={100}
          priority
          className="object-cover w-full h-full"
        />
      </div>

      <div className="w-full md:flex-1 px-10 relative">
        <div
          className="px-4 py-8 rounded-2xl bg-white/5 w-full max-w-fit space-y-4 relative 
        backdrop-blur-3xl backdrop-brightness-50"
        >
          <Image
            src="/stars.svg"
            alt="svg"
            width={10}
            height={10}
            priority
            quality={100}
            className="w-8 h-8 object-contain"
          />
          <p className="max-w-sm text-[#D0D0D0] leading-6">
            We create custom software, websites, and mobile apps to meet your
            unique needs. From concept to launch, we&apos;re your digital
            solutions partner, driving innovation and delivering results.
          </p>
          <button
            className="px-6 py-2 rounded-full bg-gradient-to-r from-[#7CFEDE] 
        to-[#fff] text-black max-w-fit font-bold hover:brightness-75"
          >
            <Link href="/about" className="w-full h-full">
              More Info
            </Link>
          </button>
          <div
            className="absolute top-0 left-0 w-1/2 bg-gradient-to-b
           from-white/10 via-gray-300/20 to-white/10 h-full filter blur-3xl"
          />
        </div>
      </div>
    </section>
  );
}

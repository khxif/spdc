import Contact from "@/sections/Home/Contact";
import HomeHero1 from "@/sections/Home/HomeHero1";
import HomeHero2 from "@/sections/Home/HomeHero2";
import Products from "@/sections/Home/Products";
import Team from "@/sections/Home/Team";

export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/softwares`, {
    cache: "no-store",
  });
  const softwares = await res.json();

  return (
    <main className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-0">
      <HomeHero1 />
      <HomeHero2 />
      <Products softwares={softwares} />
      <Team />
      <Contact />
    </main>
  );
}

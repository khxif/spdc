import Contact from "@/sections/Home/Contact";
import HomeHero1 from "@/sections/Home/HomeHero1";
import HomeHero2 from "@/sections/Home/HomeHero2";
import Products from "@/sections/Home/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SPDC",
};

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-2 md:px-0">
      <HomeHero1 />
      <HomeHero2 />
      <Products />
      <Contact />
    </main>
  );
}

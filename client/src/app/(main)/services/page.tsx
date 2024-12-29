import { Separator } from "@/components/ui/separator";
import { Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Check out our services",
};

export default function ServicesPage() {
  return (
    <main className="max-w-7xl mx-auto my-10 px-2 sm:px-4 lg:px-0">
      <section className="bg-zinc-700/50 px-6 py-4">
        <h1 className="text-xl">Our Services</h1>
        <Separator className="my-2 bg-[#303030]" />

        <div className="px-2 md:px-8 py-8 space-y-12">
          <p className="font-light text-sm md:text-base leading-7">
            At <span className="font-semibold ">DevDopz</span>, we
            specialize in creating dynamic and innovative solutions tailored to
            meet your digital needs. Whether you&apos;re looking to establish a
            powerful online presence, develop cutting-edge software, or create
            engaging mobile apps and games, we&apos;ve got you covered.
          </p>

          <div className="space-y-2">
            <h2 className="font-semibold text-xl">Website Development</h2>
            <p className="font-light text-sm md:text-base leading-7">
              Elevate your brand with a stunning website designed to captivate
              your audience and drive results. From sleek portfolios to robust
              e-commerce platforms, we bring your vision to life with precision
              and creativity.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-semibold text-xl">Software Development</h2>
            <p className="font-light text-sm md:text-base leading-7">
              Harness the power of technology to streamline your operations and
              enhance productivity. Our custom software solutions are crafted to
              address your unique challenges, providing scalable and efficient
              tools for your business.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-semibold text-xl">Mobile Apps</h2>
            <p className="font-light text-sm md:text-base leading-7">
              Reach your customers wherever they are with intuitive and
              feature-rich mobile applications. Whether for iOS or Android, we
              develop user-friendly apps that deliver seamless experiences and
              drive user engagement.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-semibold text-xl">Web Apps</h2>
            <p className="font-light text-sm md:text-base leading-7">
              Transform your business processes with dynamic web applications
              tailored to your specific requirements. From content management
              systems to customer portals, we empower your organization with
              flexible and scalable solutions.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-semibold text-xl">Game Development</h2>
            <p className="font-light text-sm md:text-base leading-7">
              Immerse your audience in captivating worlds and thrilling
              adventures with our expert game development services. From casual
              mobile games to immersive virtual reality experiences, we bring
              your gaming vision to life with passion and expertise.
            </p>
          </div>

          <p className="font-light text-sm md:text-base leading-7">
            Call Us for More Information: Ready to take your digital presence to
            the next level? Contact us today to learn more about our services
            and how we can help you achieve your goals.
          </p>

          <a
            href="https://wa.me/7306932563"
            target="_blank"
            className="flex items-center space-x-2.5 cursor-pointer"
          >
            <span className="bg-[#7CFEDE] rounded-full p-2 text-black">
              <Phone className="w-5 h-5" />
            </span>
            <p className="font-light text-sm sm:text-base lg:text-lg">
              Make a call
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}

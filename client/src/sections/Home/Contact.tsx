import dynamic from "next/dynamic";
import Image from "next/image";

const ContactForm = dynamic(() => import("@/components/Home/ContactForm"), {
  ssr: false,
});

export default function Contact() {
  return (
    <section className="py-10">
      <h1 className="text-2xl text-center flex items-center space-x-4 justify-center">
        <span>Contact Us</span>
        <Image
          src="/stars2.svg"
          alt="svg"
          width={10}
          height={10}
          quality={100}
          className="w-8 h-8 object-contain"
        />
      </h1>

      <ContactForm />
    </section>
  );
}

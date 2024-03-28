import ContactForm from "@/components/Home/ContactForm";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="py-10" id="#contact">
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

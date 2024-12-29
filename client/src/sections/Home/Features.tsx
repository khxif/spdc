import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <section className="flex flex-col w-full space-y-10 py-20 px-4 md:px-0">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl text-center font-bold md:text-5xl">
          Core Features of Devdopz
        </h1>
        <p className="text-gray-400 text-center max-w-lg text-base md:text-lg">
          Building Tomorrow&apos;s Solutions Today: Pioneering the Future of
          Software Development
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 py-4 gap-10">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="p-6 border border-purple-400 max-w-fit h-full flex flex-col space-y-7 font-medium rounded-lg"
          >
            <Image
              src={feature.image}
              width={300}
              height={200}
              alt="image"
              className="w-full h-[15rem] rounded-t-md object-contain"
            />

            <div className="flex flex-col space-y-4">
              <h1 className="text-xl md:text-2xl text-center">
                {feature.title}
              </h1>
              <p className="text-gray-400 text-base">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const features = [
  {
    id: 1,
    title: "Game Development",
    image: "/features/feature-1.webp",
    description:
      "At SPDC, we specialize in creating immersive gaming experiences across 3D, 2D, VR, and AR platforms. Our team excels in developing detailed 3D worlds, engaging 2D adventures, and cutting-edge VR and AR games that blend the digital and physical realms. We combine stunning visuals with seamless gameplay to captivate and entertain players",
  },
  {
    id: 2,
    title: "100% Free for you",
    image: "/features/feature-2.webp",
    description:
      "Effective immediately, any project that misses its deadline, even by just one hour, will be provided to the client at no cost. This policy reflects our commitment to delivering projects on time and reinforces our dedication to client satisfaction.",
  },
  {
    id: 3,
    title: "High-quality UI/UX Design",
    image: "/features/feature-3.webp",
    description:
      "At SPDC, we specialize in creating immersive gaming experiences across 3D, 2D, VR, and AR platforms. Our team excels in developing detailed 3D worlds, engaging 2D adventures, and cutting-edge VR and AR games that blend the digital and physical realms. We combine stunning visuals with seamless gameplay to captivate and entertain players",
  },
  {
    id: 4,
    title: "2D/3D Animation Ads & Movies making",
    image: "/features/feature-4.webp",
    description:
      "Transform your ideas into mesmerizing visuals with our skilled 2D/3D designers and animators. Elevate your brand with captivating animation videos and ads. Let's bring your vision to life!",
  },
  {
    id: 5,
    title: "Powerfull Video/Photo Editing",
    image: "/features/feature-5.webp",
    description:
      "Ready to elevate your content? Our team of video and photo editing experts is here to make your vision shine. Whether you're a content creator, business owner, or filmmaker, we have the skills and creativity to transform your footage and images into polished masterpieces. From basic edits to complex post-production effects, we specialize in delivering high-quality results that captivate and engage your audience. Let's collaborate and bring your content to life like never before!",
  },
  {
    id: 6,
    title: "Marketing Team",
    image: "/features/feature-6.webp",
    description:
      "Elevate your marketing game with our dynamic team of experts! We're not just marketers; we're strategists, creatives, and innovators, dedicated to helping you achieve your business goals. From crafting compelling campaigns to executing targeted strategies, we're here to drive results and boost your brand's visibility. With our deep understanding of consumer behavior and market trends, we'll help you stand out in today's competitive landscape. Let's collaborate and make waves in your industry together!",
  },
  {
    id: 7,
    title: "Dynamic and Static Website Development Services",
    image: "/features/feature-7.webp",
    description:
      "Elevate your online presence with our expert website development! Whether you need a dynamic or static site, we're here to bring your vision to life. Our dynamic websites offer interactive, real-time experiences ideal for versatile platforms. Static websites provide fast, secure, and easy-to-manage solutions perfect for a straightforward web presence. At Devdopz we blend creativity and technical expertise to deliver high-quality, tailored web development. Let's create a website that not only looks great but also drives your business goals forward. Collaborate with us to make a lasting impact online!",
  },
];

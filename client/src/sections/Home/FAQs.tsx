import React from "react";

export default function FAQs() {
  return (
    <section className="relative py-16 min-w-screen animation-fade animation-delay">
      <div className="container px-4 mx-auto">
        <p
          className="text-xs font-bold text-left text-purple-500 uppercase sm:mx-6 sm:text-center sm:text-normal sm:font-bold"
          data-primary="pink-500"
        >
          Got a Question? We’ve got answers.
        </p>
        <h3 className="mt-1 text-2xl font-bold text-left text-white/80 sm:mx-6 sm:text-3xl md:text-4xl lg:text-5xl sm:text-center sm:mx-0">
          Frequently Asked Questions
        </h3>
        <div
          className="w-full px-6 py-6 mx-auto mt-10 bg- border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3"
          data-rounded="rounded-lg"
          data-rounded-max="rounded-full"
        >
          <h3
            className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl"
            data-primary="purple-500"
          >
            How much does it cost for an e-commerce website?
          </h3>
          <p className="mt-2 text-base text-gray-100 sm:text-lg md:text-normal">
            The cost of an e-commerce website depends on the features, design,
            and functions you want. The more customized and advanced your
            requirements, the higher the cost is likely to be. It&apos;s best to
            discuss your specific needs with a web development team to get an
            accurate quote tailored to your business.
          </p>
        </div>
        <div
          className="w-full px-6 py-6 mx-auto mt-10 border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3"
          data-rounded="rounded-lg"
          data-rounded-max="rounded-full"
        >
          <h3
            className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl"
            data-primary="purple-500"
          >
            how much does a dynamic website cost
          </h3>
          <p className="mt-2 text-base text-gray-100 sm:text-lg md:text-normal">
            The cost of a dynamic website in India can range from
            ₹10,000–₹5,000,000, depending on the user&apos;s needs. A basic website
            with a few pages and minimal functionality may cost around
            ₹10,000–₹50,000
          </p>
        </div>
        <div
          className="w-full px-6 py-6 mx-auto mt-10 border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3"
          data-rounded="rounded-lg"
          data-rounded-max="rounded-full"
        >
          <h3
            className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl"
            data-primary="purple-500"
          >
            static website development cost
          </h3>
          <p className="mt-2 text-base text-gray-100 sm:text-lg md:text-normal">
            The starting price for a static website in India can range from
            3,000–5,000
          </p>
        </div>
      </div>
    </section>
  );
}

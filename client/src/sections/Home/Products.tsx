"use client";

import CategoryTabs from "@/components/Home/CategoryTabs";
import Product from "@/components/Home/Product";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

interface ProductsProps {
  softwares: Software[];
}

export default function Products({ softwares }: ProductsProps) {
  const [category, setCategory] = useState<Category>("software");
  return (
    <section
      id="products"
      className="my-10 px-2 sm:px-4 md:px-12 py-6 bg-[#1A1A1A] w-full overflow-x-hidden"
    >
      <div className="flex flex-col space-y-5 md:flex-row items-center md:justify-between w-full">
        <h2 className="font-medium text-lg md:text-xl">Our Products</h2>

        <CategoryTabs category={category} setCategory={setCategory} />
      </div>
      <Separator className="my-4 bg-[#303030]" />

      <div className="py-6 grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 md:gap-12">
        {softwares &&
          softwares?.map((software: Software) => (
            <Product
              key={software?._id}
              software={software}
              category={category}
            />
          ))}
      </div>
    </section>
  );
}

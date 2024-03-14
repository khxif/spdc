import Product from "@/components/Home/Product";
import { Separator } from "@/components/ui/separator";

export default function Products() {
  return (
    <section className="my-10 px-5 md:px-12 py-6 bg-[#1A1A1A]">
      <div className="flex items-center justify-between w-full">
        <h2 className="font-medium text-xl">Our Products</h2>

        <div>
          <span
            className="px-4 py-2 text-sm font-medium rounded-full text-black
           bg-gradient-to-r from-white to-[#C1FFF0]"
          >
            Softwares
          </span>
        </div>
      </div>
      <Separator className="my-4 bg-[#303030]" />

      <div className="py-6 grid grid-cols-3 gap-x-2 gap-y-6 md:gap-12">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
}

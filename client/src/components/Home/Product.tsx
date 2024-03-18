import Image from "next/image";

interface ProductProps {
  software: Software;
  category: Category;
}

export default function Product({ software, category }: ProductProps) {
  if (!software.category.includes(category)) return;
  return (
    <div className="flex items-center space-x-2">
      <Image
        src={software?.imageUrl || ""}
        alt="product"
        width={30}
        height={50}
        className="object-cover h-8 w-8 md:w-14 md:h-14 rounded-md"
      />

      <div className="flex flex-col justify-between h-full">
        <h6 className="text-sm md:text-base capitalize">{software?.name}</h6>
        <p className="text-xs">Free</p>
      </div>
    </div>
  );
}

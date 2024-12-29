import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";

interface CategoryTabsProps {
  category: string;
  setCategory: Dispatch<SetStateAction<Category>>;
}

export default function CategoryTabs({
  category,
  setCategory,
}: CategoryTabsProps) {
  const categories = ["software", "web", "app", "game"];
  return (
    <div className="flex items-center justify-center space-x-4 py-2 overflow-x-scroll w-full md:w-auto scrollbar-hide">
      {categories?.map((ctgry) => (
        <div key={ctgry}>
          <span
            className={cn(
              `px-4 py-2 text-sm font-medium rounded-full bg-slate-500 text- hover:brightness-90 capitalize
              cursor-pointer transition-all duration-200 ease-linear hover:bg-[#7CFEDE] hover:text-black`,
              ctgry === category && "text-black bg-gradient-to-r from-[#7CFEDE] to-[#fff]"
            )}
            onClick={() => setCategory(ctgry as Category)}
          >
            {ctgry}
          </span>
        </div>
      ))}
    </div>
  );
}

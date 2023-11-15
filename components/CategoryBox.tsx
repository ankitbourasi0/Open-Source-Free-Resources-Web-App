import React from "react";
import { TagIcon } from "@heroicons/react/24/outline";

type Props = {
  category: Category;
};

const CategoryBox = ({ category }: Props) => {
  return (
    <div className="py-[2px] px-2 bg-zinc-200 dark:bg-zinc-600 rounded-full w-fit">
     
      <h4 className="text-[14px] sm:font-medium">{category.name}</h4>
    </div>
  );
};

export default CategoryBox;

import React from "react";
import { IoCloseOutline } from "react-icons/io5";
const Sidebar = React.memo(({ onSelectCategory, open, setOpenClose }) => {
  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];
  // console.log("Sidebar rendered");

  return (
    <aside
      className={`${
        open
          ? "translate-x-0 transition-transform duration-300 ease-linear"
          : "-translate-x-72 transition-all duration-300 ease-linear opacity-0"
      } w-56 p-4 border-r bg-white fixed h-full top-0 z-20`}
    >
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <hr />
      <IoCloseOutline
        onClick={() => setOpenClose((prev) => !prev)}
        className="absolute text-4xl top-6 -right-10 text-opacity-85 text-black cursor-pointer rounded-full"
      />
      <ul className="mt-4">
        {categories.map((category) => (
          <li
            key={category}
            className="cursor-pointer text-lg p-3 hover:bg-gray-100 w-full rounded-md capitalize"
            onClick={() =>{ 
              onSelectCategory(category)
              setOpenClose((prev) => !prev)
            }}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
});

export default Sidebar;

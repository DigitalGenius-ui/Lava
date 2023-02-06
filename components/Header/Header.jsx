import React, { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="flex items-center justify-between py-1 ">
      <h1 className="text-customWhite font-bold text-2rem">
        L
      </h1>
      <nav
        id={`${!openMenu ? "translate" : ""}`}
        className="z-50 fixed inset-0 flex flex-col items-center justify-center gap-4 text-customWhite bg-banner 
        transition-all duration-500
        md:flex md:gap-2 md:bg-inherit md:static md:flex-row"
      >
        <span
          onClick={() => setOpenMenu(false)}
          className="absolute top-2 right-2 text-2rem cursor-pointer md:hidden"
        >
          &times;
        </span>
        <span className="nav">
          <a href="#">about</a>
        </span>
        <span className="nav">
          <a href="#">articles</a>
        </span>
        <span className="nav border py-0.4rem px-1 hover:bg-slate-100/70 hover:text-slate-700/80">
          <a href="#">subscribe</a>
        </span>
      </nav>
      <span
        onClick={() => setOpenMenu(true)}
        className="text-customWhite text-1.2rem cursor-pointer md:hidden"
      >
        &#9776;
      </span>
    </div>
  );
};

export default Header;

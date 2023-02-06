import React from "react";

const Footer = () => {
  return (
    <footer className="bg-artBg text-white">
      <div className="max-w-screen-xl w-[90%] text-center md:text-auto md:w-[80%] mx-auto sm:flex sm:items-center sm:justify-between py-3">
        <h1 className="text-2rem font-bold">L</h1>
        <nav className="flex flex-col gap-1 mt-2 sm:mt-0 sm:flex sm:items-center sm:gap-4 sm:flex-row uppercase tracking-wide">
          <span className="hover:text-slate-100/60">
            <a href="#">About</a>
          </span>
          <span className="hover:text-slate-100/60">
            <a href="#">Articles</a>
          </span>
          <span className="hover:text-slate-100/60">
            <a href="#">Subscribe</a>
          </span>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import Header from "../Header/Header";

const Banner = () => {
  return (
    <main
      className="max-w-screen-xl mx-auto w-full h-full bg-banner-bg bg-no-repeat bg-contain bg-top
      sm:bg-cover sm:bg-top md:bg-cover md:bg-bottom"
    >
      <section className="w-[90%] mx-auto md:w-[80%]">
        <Header />

        <section className="mt-10 sm:mt-16 text-white text-center sm:text-left md:mt-16">
          <h1 className="font-bold text-4rem leading-10 pb-2">Lava</h1>
          <span
            className="text-darkText uppercase tracking-widest text-1.2rem relative
            after:content-[''] after:border-b-2 after:left-0 after:w-[4rem] after:bottom-[-0.7rem] 
            after:absolute"
          >
            black sand beach
          </span>

          <section className="text-center mt-10 md:mt-16 pb-9">
            <h1 className="text-2rem">Slow traveling</h1>
            <span
              id="line"
              className="text-darkText uppercase tracking-widest text-1.2rem relative
              after:w-[3rem]"
            >
              a travel blog
            </span>
            <p
              className="w- full text-center mx-auto pt-2 text-darkText
              leading-8 font-light md:w-1/2"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos reprehenderit provident officia ipsa atque molestias
              unde deleniti rerum beatae velit?.
            </p>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Banner;

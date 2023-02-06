import React from "react";

const Articles = () => {
  return (
    <section className="bg-artBg py-5">
      <div className="text-center">
        <h1 className="text-2rem text-white">Latest articles</h1>
        <span
          id="line"
          className="text-darkText uppercase tracking-widest relative
        after:right-5 after:left-5"
        >
          our most recent posts
        </span>
      </div>

      <div id="grid" className="max-w-screen-xl w-[90%] mx-auto pt-3 md:w-[75%]">
        <div
          id="card"
          className="bg-poster-1 bg-center bg-no-repeat bg-cover">
            <h1 className="uppercase tracking-wider text-1.2rem">Destination</h1>
            <span className="pb-1 uppercase text-darkText text-1">trip article</span>
          </div>
        <div
          id="card"
          className="bg-poster-2 bg-center bg-no-repeat bg-cover">
            <h1 className="uppercase tracking-wider text-1.2rem">Destination</h1>
            <span className="pb-1 uppercase text-darkText text-1">trip article</span>
          </div>
        <div
          id="card"
          className="bg-poster-3 bg-center bg-no-repeat bg-cover">
            <h1 className="uppercase tracking-wider text-1.2rem">Destination</h1>
            <span className="pb-1 uppercase text-darkText text-1">trip article</span>
          </div>
      </div>
    </section>
  );
};

export default Articles;

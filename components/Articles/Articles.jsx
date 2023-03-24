import Image from "next/image";
import React from "react";

const Articles = () => {
  const data = [
    {
      title: "Destination",
      sub: "trip article",
      img: "https://static.euronews.com/articles/stories/06/35/29/74/1440x810_cmsv2_aeacd0c1-3106-54ce-b1ba-04cb723194f8-6352974.jpg",
    },
    {
      title: "Destination",
      sub: "trip article",
      img: "https://www.ncl.com/sites/default/files/TravelBlog.Beach5_V2.jpg",
    },
    {
      title: "Destination",
      sub: "trip article",
      img: "https://nationaltoday.com/wp-content/uploads/2020/08/National-Beach-Day.jpg",
    },
  ];
  return (
    <section className="bg-artBg py-5">
      <div className="text-center">
        <h1 className="text-2rem text-white">Latest articles</h1>
        <span
          id="line"
          className="text-darkText uppercase tracking-widest relative after:w-[4rem]"
        >
          our most recent posts
        </span>
      </div>

      <div
        className="max-w-screen-xl w-[90%] mx-auto pt-3 md:w-[75%] 
        grid grid-cols-card gap-4"
      >
        {data.map((item, i) => (
          <div
            key={i}
            className={`shadow-box text-white hover:scale-110 group 
            transition-all duration-500 w-full h-[25rem] relative overflow-hidden
            `}
          >
            <div className="bg-gradient-to-r from-black/40 to-black/70">
              <img
                src={item.img}
                alt="cardImage"
                className="absolute top-0 left-0 w-full h-full object-cover opacity-40
                cursor-pointer group-hover:opacity-100 transition-all duration-500"
              />
            </div>
            <div className="flex items-center flex-col justify-end h-full pointer-events-none">
              <h1 className="z-10  uppercase tracking-wider text-1.2rem">
                {item.title}
              </h1>
              <span className="z-10  pb-1 uppercase text-darkText text-1">
                {item.sub}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;

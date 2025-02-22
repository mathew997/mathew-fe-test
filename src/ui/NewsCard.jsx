import React from "react";
import news01 from "../assets/news-01.png";
import { CalenderIcon } from "../lib/icon";
const NewsCard = () => {
  return (
    <article className="group border border-[#c0b8be] rounded-xl overflow-clip text-[#001d29]">
      <div className="overflow-hidden">
        <img
          src={news01}
          alt="News image"
          loading="lazy"
          className="group-hover:scale-150 transition-transform duration-500 ease-in-out"
        />
      </div>

      <div className="p-8">
        <div className="flex gap-2 items-center">
          <CalenderIcon />
          <span className="text-base">Saturday, May 12th</span>
        </div>

        <h2 className="text-2xl font-brand-bold mt-4 lg:mt-6 group-hover:underline">
          Japan Books Ticket to AFC U17 Asian Cup™ 2025 Finals, Seals Group F
          Top Spot
        </h2>

        <div className="mt-4 flex gap-1 flex-wrap items-center">
          <button className="py-2.5 px-4 rounded-4xl font-brand-bold border border-[#001d29] uppercase">
            REFEREES
          </button>

          <button className="py-2.5 px-4 rounded-4xl font-brand-bold border border-[#001d29] uppercase">
            Football Development
          </button>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;

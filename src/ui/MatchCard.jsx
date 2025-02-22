import React from "react";
import image01 from "../assets/match-img-01.png";
import image02 from "../assets/match-img-02.png";
import { CalenderIcon } from "../lib/icon";
import MatchTime from "./MatchTime";
import Tickect from "./Tickect";
const MatchCard = () => {
  return (
    <article
      data-match-card
      className="relative group rounded-xl bg-[#f4eaf7] overflow-clip hover:-translate-y-1 transition-transform duration-500 ease-in-out"
    >
      <div className="relative bg-white w-fit mx-auto py-1.5 px-3 flex gap-1.5 border-t-2 border-t-brand items-center rounded-b-lg">
        <span className="text-brand">
          <CalenderIcon />
        </span>
        <span className="text-xs">Saturday, May 12th</span>
      </div>
      <div className="relative flex gap-3.5 items-center justify-center my-6">
        <div>
          <img
            src={image01}
            loading="lazy"
            alt="Team image"
            className="mx-auto"
          />
          <h2 className="uppercase text-brand font-brand-bold text-center group-hover:text-white transition-colors">
            Umm Salal SC
          </h2>
        </div>
        <div className="size-8 aspect-square rounded-4xl bg-white text-[#c6002f] font-brand-bold grid place-content-center">
          VS
        </div>
        <div>
          <img
            src={image02}
            loading="lazy"
            alt="Team image"
            className="mx-auto"
          />
          <h2 className="uppercase text-brand font-brand-bold text-center group-hover:text-white transition-colors">
            Al-Duhail SC
          </h2>
        </div>
      </div>
      <div className="relative bg-white rounded-b-xl py-3 grid place-content-center w-[calc(100%-4px)] mx-auto mb-[2.5px]">
        <MatchTime time="10:20 PM" />
      </div>
      <div
        className="absolute left-1/2 -translate-x-1/2 group-hover:-translate-y-14 transition-transform ease-in-out duration-500"
        style={{ "--ticket-cut-clr": "#fff" }}
      >
        <Tickect />
      </div>
    </article>
  );
};

export default MatchCard;

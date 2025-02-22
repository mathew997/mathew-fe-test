import React from "react";
import {
  BarChartIcon,
  BullsEyeIcon,
  FlagIcon,
  FootballIcon,
  PlayIcon,
  WhistleIcon,
} from "../lib/icon";

const Hero = () => {
  const dummyArr = Array.from({ length: 10 }, (_, index) => index);
  return (
    <section data-hero className="bg-[#8c0321] relative overflow-clip">
      <div className="container mx-auto">
        <div className="px-5 lg:px-32 grid h-dvh">
          <div className="my-auto">
            <h1 className="text-4xl lg:text-7xl grid font-brand-bold tracking-tight">
              <span className="">WE ARE </span>
              <span className="inline-block">
                THE{" "}
                <span className="text-[#ffb92e] inline-block">CHAMPIONS</span>
              </span>
            </h1>

            <p className="text-bse lg:text-xl mt-4 lg:mt-6 max-w-2xl">
              Lorem ipsum dolor sit amet consectetur. Vestibulum metus non
              tortor pulvinar orci elementum nulla nunc. A diam quam et at
              viverra et.
            </p>

            <div className="mt-5 lg:mt-8 flex gap-5 items-center flex-wrap">
              <button className="flex gap-3.5 items-center group text-[1.125rem] cursor-pointer">
                <span className="size-10 aspect-square rounded-4xl grid place-content-center group-hover:bg-white group-hover:text-black transition-colors ease-in-out duration-300 border border-white">
                  <PlayIcon />
                </span>
                <span>Fixtures</span>
              </button>

              <button className="flex gap-3.5 items-center group text-[1.125rem] cursor-pointer">
                <span className="size-10 aspect-square rounded-4xl grid place-content-center group-hover:bg-white group-hover:text-black transition-colors ease-in-out duration-300 border border-white">
                  <BullsEyeIcon />
                </span>
                <span>Live Score</span>
              </button>

              <button className="flex gap-3.5 items-center group text-[1.125rem] cursor-pointer">
                <span className="size-10 aspect-square rounded-4xl grid place-content-center group-hover:bg-white group-hover:text-black transition-colors ease-in-out duration-300 border border-white">
                  <BarChartIcon />
                </span>
                <span>Statistics</span>
              </button>
            </div>
          </div>
        </div>
        <ul
          className="scroll absolute left-0 bottom-[0rem] flex bg-white *:whitespace-nowrap"
          data-reverse="true"
          style={{
            "--duration": 12,
            "--count": 8,
            "--spacing": 0,
          }}
        >
          <li className="text-brand" style={{ "--index": 1 }}>
            <div className="flex gap-2 items-center">
              <span className="">
                <FlagIcon />
              </span>
              <span className="text-xl font-brand-bold">FOOTBALL IN QATAR</span>
            </div>
          </li>

          <li className="text-brand" style={{ "--index": 2 }}>
            <div className="flex gap-2 items-center">
              <span className="">
                <FootballIcon />
              </span>
              <span className="text-xl font-brand-bold">FOOTBALL IN QATAR</span>
            </div>
          </li>

          <li className="text-brand" style={{ "--index": 3 }}>
            <div className="flex gap-2 items-center">
              <span className="">
                <WhistleIcon />
              </span>
              <span className="text-xl font-brand-bold">FOOTBALL IN QATAR</span>
            </div>
          </li>

          <li className="text-brand" style={{ "--index": 4 }}>
            <div className="flex gap-2 items-center">
              <span className="">
                <WhistleIcon />
              </span>
              <span className="text-xl font-brand-bold">FOOTBALL IN QATAR</span>
            </div>
          </li>

          <li className="text-brand" style={{ "--index": 5 }}>
            <div className="flex gap-2 items-center">
              <span className="">
                <FlagIcon />
              </span>
              <span className="text-xl font-brand-bold">FOOTBALL IN QATAR</span>
            </div>
          </li>

          <li className="text-brand" style={{ "--index": 6 }}>
            <div className="flex gap-2 items-center">
              <span className="">
                <FootballIcon />
              </span>
              <span className="text-xl font-brand-bold">FOOTBALL IN QATAR</span>
            </div>
          </li>

          <li className="text-brand" style={{ "--index": 7 }}>
            <div className="flex gap-2 items-center">
              <span className="">
                <WhistleIcon />
              </span>
              <span className="text-xl font-brand-bold">FOOTBALL IN QATAR</span>
            </div>
          </li>

          <li className="text-brand" style={{ "--index": 8 }}>
            <div className="flex gap-2 items-center">
              <span className="">
                <WhistleIcon />
              </span>
              <span className="text-xl font-brand-bold">FOOTBALL IN QATAR</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import HeadingSection from "../ui/HeadingSection";
import { AngleRightIcon } from "../lib/icon";
import NewsCard from "../ui/NewsCard";

const LatestNews = () => {
  return (
    <section className="bg-white pb-10 lg:pb-20">
      <div className="container mx-auto">
        <div className="px-5 lg:px-32">
          <div className="grid gap-4 md:grid-cols-[auto_auto] lg:grid-cols-[auto_auto_auto]">
            <HeadingSection
              breadcrumb="NEWS & UPDATES"
              title="LATEST"
              subtitle="NEWS & UPDATES"
            />
            <div className="mt-auto">
              <p className="text-xl text-[#6d5f7d] max-w-md text-balance">
                Lorem ipsum dolor sit amet consectetur. Vestibulum metus non
                tortor pulvinar orci elementum nulla nunc. A diam quam et at
                viverra et.
              </p>
            </div>
            <div className="flex gap-3 items-center mt-auto ml-5 justify-self-end col-end-auto md:col-end-3 lg:col-end-auto">
              <a href="#" className="text-[#2f1a45] font-brand-bold underline">
                View all
              </a>
              <div className="flex gap-1 text-xl" data-active="false">
                <button className="text-[#8C0321] border border-[#8C0321] data-[active=true]:bg-[#8C0321] data-[active=true]:text-white rounded-4xl size-8 aspect-square grid place-content-center hover:bg-[#8C0321] hover:text-white transition-colors duration-300">
                  <span>
                    <AngleRightIcon />
                  </span>
                </button>
                <button
                  data-active="true"
                  className="text-[#8C0321] border border-[#8C0321] data-[active=true]:bg-[#8C0321] data-[active=true]:text-white rounded-4xl size-8 aspect-square grid place-content-center hover:bg-[#8C0321] hover:text-white transition-colors duration-300"
                >
                  <span className="rotate-180">
                    <AngleRightIcon />
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="grid gap-5 lg:gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 lg:mt-10">
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;

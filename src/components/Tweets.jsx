import React from "react";
import { AngleRightIcon } from "../lib/icon";
import HeadingSection from "../ui/HeadingSection";
import Tweet from "../ui/Tweet";

const Tweets = () => {
  return (
    <section className="py-10 lg:py-20 border-t border-brand">
      <div className="container mx-auto">
        <div className="px-5 lg:px-32">
          <div className="flex items-center justify-between">
            <HeadingSection breadcrumb="TWITTER FEEDS" />
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

          <div className="mt-8 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tweets;

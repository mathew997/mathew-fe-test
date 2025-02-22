import React from "react";
import HeadingSection from "../ui/HeadingSection";

import * as Tabs from "@radix-ui/react-tabs";
import MatchCard from "../ui/MatchCard";
import { AngleRightIcon } from "../lib/icon";

const LiveMatches = () => {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="container mx-auto">
        <div className="px-5 lg:px-32">
          <HeadingSection title="LIVE" subtitle="MATCHES" />

          <Tabs.Root
            defaultValue="tab1"
            orientation="vertical"
            className="text-black mt-8"
          >
            <div className="flex gap-4 items-center justify-between flex-wrap">
              <Tabs.List
                aria-label="Live matches"
                className="bg-[#fbfbfb] text-[#2f1a45]/50 w-fit py-2 px-3 rounded-2xl border border-[#d2d2d2]/50 font-brand-bold text-base lg:text-xl"
              >
                <Tabs.Trigger
                  value="tab1"
                  className="py-5 px-5 lg:px-10 rounded-2xl data-[state=active]:bg-brand data-[state=active]:text-white transition-colors duration-300"
                >
                  NATIONAL TEAM
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="tab2"
                  className="py-5 px-5 lg:px-10 rounded-2xl data-[state=active]:bg-brand data-[state=active]:text-white transition-colors duration-300"
                >
                  OTHER MATCHES
                </Tabs.Trigger>
              </Tabs.List>

              <div className="flex gap-1 ml-auto" data-active="false">
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
            <div className="mt-12">
              <Tabs.Content value="tab1">
                <div className="grid gap-4 lg:gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                  <MatchCard />
                  <MatchCard />
                  <MatchCard />
                  <MatchCard />
                </div>
              </Tabs.Content>
              <Tabs.Content value="tab2">Tab two content</Tabs.Content>
            </div>
          </Tabs.Root>
        </div>
      </div>
    </section>
  );
};

export default LiveMatches;

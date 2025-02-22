import React from "react";
import Search from "../ui/Search";
import { GlobeIcon, TicketIcon } from "../lib/icon";
import Navbar from "../ui/Navbar";
import Tickect from "../ui/Tickect";

const Header = () => {
  return (
    <header className="bg-brand">
      <div className="container mx-auto">
        <div className="px-5 lg:px-32">
          <div className="py-6 lg:py-8 flex gap-5 lg:gap-8 items-center justify-between flex-wrap">
            <h2 className="text-3xl font-brand-bold mr-auto">Navigation</h2>

            <Search />

            <div className="flex gap-3 items-center">
              <span className="text-[#DAD2D8]">
                <GlobeIcon />
              </span>
              <span className="">AR</span>
            </div>

            <Tickect />
          </div>

          <div className="border-t border-t-[#DAD2D8]">
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import HeadingSection from "../ui/HeadingSection";
import { AngleRightIcon, BookIcon } from "../lib/icon";

const About = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 bg-brand">
      <div className="py-6 lg:py-16" data-gradient>
        <div
          className="relative pl-5 lg:pl-32 xl:max-w-[calc(80rem_/_2)] 2xl:max-w-[calc(96rem_/_2)] "
          data-we-are
        >
          <HeadingSection
            breadcrumb="WHAT WE ARE"
            title="FOOTBALL"
            subtitle="IN QATAR"
          />

          <p className="mt-5 mb-10 text-xl text-white max-w-md">
            Lorem ipsum dolor sit amet consectetur. Vestibulum metus non
          </p>

          <button className="bg-white cursor-pointer flex items-center text-brand font-brand-bold text-[1.125rem] rounded-md">
            <span className="py-4 px-5 border-r-2 border-brand">KNOW MORE</span>
            <span className="rotate-180 p-3.5">
              <AngleRightIcon />
            </span>
          </button>
        </div>
      </div>
      <div data-rule>
        <div className="relative pl-5 lg:pl-20 py-6 lg:py-16 max-w-2xl flex items-center h-full">
          <div className="grid gap-5 grid-cols-[auto_1fr]">
            <span className="text-white -mt-4">
              <BookIcon />
            </span>
            <div className="">
              <h3 className="text-4xl font-brand-bold">RULES & REGULATIONS</h3>
              <p className="text-xl mt-2.5 text-balance">
                Lorem ipsum dolor sit amet consectetur. Vestibulum metus non
              </p>

              <a
                href="#"
                className="text-white font-brand-bold underline mt-5 block"
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

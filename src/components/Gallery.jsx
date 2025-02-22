import React from "react";
import HeadingSection from "../ui/HeadingSection";
import gallery01 from "../assets/galley-01.png";
import gallery02 from "../assets/galley-02.png";
import gallery03 from "../assets/galley-03.png";
import gallery04 from "../assets/galley-04.png";
import gallery05 from "../assets/galley-05.png";
import gallery06 from "../assets/galley-06.png";
import gallery07 from "../assets/galley-07.png";
import gallery08 from "../assets/galley-08.png";
import gallery09 from "../assets/galley-09.png";
import gallery10 from "../assets/galley-10.png";
import gallery11 from "../assets/galley-11.png";
import gallery12 from "../assets/galley-12.png";
const Gallery = () => {
  return (
    <section className="pb-10 lg:pb-20">
      <div className="container mx-auto">
        <div className="px-5 lg:px-32">
          <div className="flex justify-between">
            <HeadingSection
              breadcrumb="MEDIA"
              title="IMAGES "
              subtitle={`& VIDEOS`}
            />
            <a
              href="#"
              className="text-[#2f1a45] font-brand-bold underline mt-auto"
            >
              View all
            </a>
          </div>

          <div className="mt-6 lg:mt-14">
            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[350px_1fr_160px_1fr_200px] gap-2">
                <div className="h-72 relative overflow-hidden rounded-lg">
                  <img
                    src={gallery01}
                    alt="Soccer goal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-72 relative overflow-hidden rounded-lg">
                  <img
                    src={gallery02}
                    alt="Soccer goal"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="h-72 relative overflow-hidden rounded-lg grid gap-2">
                  <img
                    src={gallery03}
                    alt="Soccer goal"
                    className="w-full h-full object-cover rounded-lg"
                  />

                  <img
                    src={gallery04}
                    alt="Soccer goal"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="h-72 relative overflow-hidden rounded-lg">
                  <img
                    src={gallery05}
                    alt="Soccer goal"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="h-72 relative overflow-hidden rounded-lg">
                  <img
                    src={gallery06}
                    alt="Soccer goal"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_350px_200px_1fr_160px] gap-2 mt-2">
                <div className="h-72 relative overflow-hidden rounded-lg">
                  <img
                    src={gallery07}
                    alt="Soccer goal"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="h-72 relative overflow-hidden rounded-lg">
                  <img
                    src={gallery08}
                    alt="Soccer goal"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="h-72 relative overflow-hidden rounded-lg">
                  <img
                    src={gallery09}
                    alt="Soccer goal"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="h-72 relative overflow-hidden rounded-lg">
                  <img
                    src={gallery10}
                    alt="Soccer goal"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="h-72 relative overflow-hidden rounded-lg grid gap-2">
                  <img
                    src={gallery11}
                    alt="Soccer goal"
                    className="w-full h-full object-cover rounded-lg"
                  />

                  <img
                    src={gallery12}
                    alt="Soccer goal"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

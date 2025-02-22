import React from "react";
import HeadingSection from "../ui/HeadingSection";
import * as Tabs from "@radix-ui/react-tabs";
import flag01 from "../assets/flags/flag-01.png";
import flag02 from "../assets/flags/flag-02.png";
import flag03 from "../assets/flags/flag-03.png";
import flag04 from "../assets/flags/flag-04.png";
import flag05 from "../assets/flags/flag-05.png";
import { ChevronIcon } from "../lib/icon";

const Ranking = () => {
  return (
    <section className="py-10 lg:py-20">
      <div className="container mx-auto">
        <div className="px-5 lg:px-32">
          <div
            className="py-7 lg:py-20 px-5 lg:px-24 rounded-xl overflow-clip"
            data-ranking
          >
            <HeadingSection
              breadcrumb="TEAM TABLE"
              title="FOOTBALL"
              subtitle="RANKING"
            />

            <div className="mt-5 lg:mt-8">
              <Tabs.Root
                defaultValue="tab1"
                orientation="vertical"
                className="text-black mt-8"
              >
                <Tabs.List aria-label="Ranks">
                  <Tabs.Trigger
                    value="tab1"
                    className="py-5 px-5 lg:px-10 rounded-t-2xl font-brand-bold bg-white text-[#2f1a45]/50 data-[state=active]:bg-brand data-[state=active]:text-white transition-colors duration-300"
                  >
                    FIFA WORLD RANKING
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    value="tab2"
                    className="py-5 px-5 lg:px-10 rounded-t-2xl font-brand-bold bg-white text-[#2f1a45]/50 data-[state=active]:bg-brand data-[state=active]:text-white transition-colors duration-300"
                  >
                    ASIAN TEAMS RANKING
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    value="tab3"
                    className="py-5 px-5 lg:px-10 rounded-t-2xl font-brand-bold bg-white text-[#2f1a45]/50 data-[state=active]:bg-brand data-[state=active]:text-white transition-colors duration-300"
                  >
                    Ooredoo Stars League
                  </Tabs.Trigger>
                </Tabs.List>

                <Tabs.Content value="tab1">
                  <div className="overflow-x-auto max-w-full">
                    <table className="w-full rounded-t-xl overflow-hidden">
                      <thead>
                        <tr className="font-brand-bold text-black text-xl bg-[#f2f2f2] *:py-6 *:px-8 *:whitespace-nowrap">
                          <th>POSITION</th>
                          <th>TEAM</th>
                          <th>POINTS</th>
                          <th>PREVIOUS POINTS</th>
                          <th>RECENT MATCHES RESULTS</th>
                        </tr>
                      </thead>
                      <tbody className="bg-gradient-to-r p-6 to-teal-700 from-fuchsia-900">
                        <tr className="bg-white py-4 px-6 rounded-md my-5 *:py-6 *:px-8">
                          <td className="text-[#899aa0] text-3xl text-center">
                            01
                          </td>
                          <td>
                            <div className="flex gap-2 items-center">
                              <div className="size-12 aspect-square rounded-4xl">
                                <img src={flag01} alt="Flag image" />
                              </div>
                              <span className="font-brand-bold text-[#143642] text-2xl ml-2">
                                Argentina
                              </span>

                              <div
                                className="flex gap-2 data-[rank=up]:text-[#15aa9c] data-[rank=down]:text-[#cc1a44]"
                                data-rank="up"
                              >
                                <span className="flex my-auto ml-2 [[data-rank=down]_&]:rotate-180">
                                  <ChevronIcon />
                                </span>
                                <span className="font-brand-bold">+3</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="bg-[#f4f1f3] font-brand-bold py-3 px-4 rounded-4xl flex justify-center w-fit mx-auto">
                              1777
                            </span>
                          </td>
                          <td>
                            <span className="bg-[#f4f1f3] font-brand-bold py-3 px-4 rounded-4xl flex justify-center w-fit mx-auto">
                              1777
                            </span>
                          </td>
                          <td>
                            <div className="flex gap-2 5 justify-center">
                              <span
                                data-rank="up"
                                className="size-8 aspect-square grid place-content-center font-brand-bold text-white data-[rank=up]:bg-[#15aa9c] data-[rank=down]:bg-[#cc1a44] rounded-4xl"
                              >
                                W
                              </span>

                              <span
                                data-rank="down"
                                className="size-8 aspect-square grid place-content-center font-brand-bold text-white data-[rank=up]:bg-[#15aa9c] data-[rank=down]:bg-[#cc1a44] rounded-4xl"
                              >
                                L
                              </span>
                            </div>
                          </td>
                        </tr>

                        <tr className="bg-white py-4 px-6 rounded-md my-5 *:py-6 *:px-8">
                          <td className="text-[#899aa0] text-3xl text-center">
                            02
                          </td>
                          <td>
                            <div className="flex gap-2 items-center">
                              <div className="size-12 aspect-square rounded-4xl">
                                <img src={flag02} alt="Flag image" />
                              </div>
                              <span className="font-brand-bold text-[#143642] text-2xl ml-2">
                                France
                              </span>

                              <div
                                className="flex gap-2 data-[rank=up]:text-[#15aa9c] data-[rank=down]:text-[#cc1a44]"
                                data-rank="down"
                              >
                                <span className="flex my-auto ml-2 [[data-rank=down]_&]:rotate-180">
                                  <ChevronIcon />
                                </span>
                                <span className="font-brand-bold">+3</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="bg-[#f4f1f3] font-brand-bold py-3 px-4 rounded-4xl flex justify-center w-fit mx-auto">
                              1777
                            </span>
                          </td>
                          <td>
                            <span className="bg-[#f4f1f3] font-brand-bold py-3 px-4 rounded-4xl flex justify-center w-fit mx-auto">
                              1777
                            </span>
                          </td>
                          <td>
                            <div className="flex gap-2 5 justify-center">
                              <span
                                data-rank="up"
                                className="size-8 aspect-square grid place-content-center font-brand-bold text-white data-[rank=up]:bg-[#15aa9c] data-[rank=down]:bg-[#cc1a44] rounded-4xl"
                              >
                                W
                              </span>

                              <span
                                data-rank="down"
                                className="size-8 aspect-square grid place-content-center font-brand-bold text-white data-[rank=up]:bg-[#15aa9c] data-[rank=down]:bg-[#cc1a44] rounded-4xl"
                              >
                                L
                              </span>
                            </div>
                          </td>
                        </tr>

                        <tr className="bg-white py-4 px-6 rounded-md my-5 *:py-6 *:px-8">
                          <td className="text-[#899aa0] text-3xl text-center">
                            03
                          </td>
                          <td>
                            <div className="flex gap-2 items-center">
                              <div className="size-12 aspect-square rounded-4xl">
                                <img src={flag03} alt="Flag image" />
                              </div>
                              <span className="font-brand-bold text-[#143642] text-2xl ml-2">
                                Spain
                              </span>

                              <div
                                className="flex gap-2 data-[rank=up]:text-[#15aa9c] data-[rank=down]:text-[#cc1a44]"
                                data-rank="up"
                              >
                                <span className="flex my-auto ml-2 [[data-rank=down]_&]:rotate-180">
                                  <ChevronIcon />
                                </span>
                                <span className="font-brand-bold">+3</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="bg-[#f4f1f3] font-brand-bold py-3 px-4 rounded-4xl flex justify-center w-fit mx-auto">
                              1777
                            </span>
                          </td>
                          <td>
                            <span className="bg-[#f4f1f3] font-brand-bold py-3 px-4 rounded-4xl flex justify-center w-fit mx-auto">
                              1777
                            </span>
                          </td>
                          <td>
                            <div className="flex gap-2 5 justify-center">
                              <span
                                data-rank="up"
                                className="size-8 aspect-square grid place-content-center font-brand-bold text-white data-[rank=up]:bg-[#15aa9c] data-[rank=down]:bg-[#cc1a44] rounded-4xl"
                              >
                                W
                              </span>

                              <span
                                data-rank="down"
                                className="size-8 aspect-square grid place-content-center font-brand-bold text-white data-[rank=up]:bg-[#15aa9c] data-[rank=down]:bg-[#cc1a44] rounded-4xl"
                              >
                                L
                              </span>
                            </div>
                          </td>
                        </tr>

                        <tr className="bg-white py-4 px-6 rounded-md my-5 *:py-6 *:px-8">
                          <td className="text-[#899aa0] text-3xl text-center">
                            04
                          </td>
                          <td>
                            <div className="flex gap-2 items-center">
                              <div className="size-12 aspect-square rounded-4xl">
                                <img src={flag04} alt="Flag image" />
                              </div>
                              <span className="font-brand-bold text-[#143642] text-2xl ml-2">
                                England
                              </span>

                              <div
                                className="flex gap-2 data-[rank=up]:text-[#15aa9c] data-[rank=down]:text-[#cc1a44]"
                                data-rank="down"
                              >
                                <span className="flex my-auto ml-2 [[data-rank=down]_&]:rotate-180">
                                  <ChevronIcon />
                                </span>
                                <span className="font-brand-bold">+3</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="bg-[#f4f1f3] font-brand-bold py-3 px-4 rounded-4xl flex justify-center w-fit mx-auto">
                              1777
                            </span>
                          </td>
                          <td>
                            <span className="bg-[#f4f1f3] font-brand-bold py-3 px-4 rounded-4xl flex justify-center w-fit mx-auto">
                              1777
                            </span>
                          </td>
                          <td>
                            <div className="flex gap-2 5 justify-center">
                              <span
                                data-rank="up"
                                className="size-8 aspect-square grid place-content-center font-brand-bold text-white data-[rank=up]:bg-[#15aa9c] data-[rank=down]:bg-[#cc1a44] rounded-4xl"
                              >
                                W
                              </span>

                              <span
                                data-rank="down"
                                className="size-8 aspect-square grid place-content-center font-brand-bold text-white data-[rank=up]:bg-[#15aa9c] data-[rank=down]:bg-[#cc1a44] rounded-4xl"
                              >
                                L
                              </span>
                            </div>
                          </td>
                        </tr>

                        <tr className="bg-white py-4 px-6 rounded-md my-5 *:py-6 *:px-8">
                          <td className="text-[#899aa0] text-3xl text-center">
                            05
                          </td>
                          <td>
                            <div className="flex gap-2 items-center">
                              <div className="size-12 aspect-square rounded-4xl">
                                <img src={flag04} alt="Flag image" />
                              </div>
                              <span className="font-brand-bold text-[#143642] text-2xl ml-2">
                                Brazil
                              </span>

                              <div
                                className="flex gap-2 data-[rank=up]:text-[#15aa9c] data-[rank=down]:text-[#cc1a44]"
                                data-rank="down"
                              >
                                <span className="flex my-auto ml-2 [[data-rank=down]_&]:rotate-180">
                                  <ChevronIcon />
                                </span>
                                <span className="font-brand-bold">+3</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="bg-[#f4f1f3] font-brand-bold py-3 px-4 rounded-4xl flex justify-center w-fit mx-auto">
                              1777
                            </span>
                          </td>
                          <td>
                            <span className="bg-[#f4f1f3] font-brand-bold py-3 px-4 rounded-4xl flex justify-center w-fit mx-auto">
                              1777
                            </span>
                          </td>
                          <td>
                            <div className="flex gap-2 5 justify-center">
                              <span
                                data-rank="up"
                                className="size-8 aspect-square grid place-content-center font-brand-bold text-white data-[rank=up]:bg-[#15aa9c] data-[rank=down]:bg-[#cc1a44] rounded-4xl"
                              >
                                W
                              </span>

                              <span
                                data-rank="down"
                                className="size-8 aspect-square grid place-content-center font-brand-bold text-white data-[rank=up]:bg-[#15aa9c] data-[rank=down]:bg-[#cc1a44] rounded-4xl"
                              >
                                L
                              </span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Tabs.Content>
                <Tabs.Content value="tab2">Tab two content</Tabs.Content>
              </Tabs.Root>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ranking;

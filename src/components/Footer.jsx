import React from "react";
import { FacebookIcon, InstagramIcon, XIcon, YoutubeIcon } from "../lib/icon";
import brand01 from "../assets/brands/brand-01.png";
import brand02 from "../assets/brands/brand-02.png";
import brand03 from "../assets/brands/brand-03.png";
import brand04 from "../assets/brands/brand-04.png";
import brand05 from "../assets/brands/brand-05.png";
import brand06 from "../assets/brands/brand-06.png";
import brand07 from "../assets/brands/brand-07.png";
import brand08 from "../assets/brands/brand-08.png";
const Footer = () => {
  return (
    <footer>
      <section data-footer-top className="relative bg-brand text-white">
        <div className="container mx-auto">
          <div className="px-5 lg:px-32">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="pt-5 lg:pt-20">
                <h4 className="text-3xl font-brand-bold">Navigation</h4>
                <p className="mt-4 lg:mt-8 max-w-sm text-xl">
                  Lorem ipsum dolor sit amet consectetur. Vestibulum metus non
                </p>

                <ul className="mt-8 lg:mt-20 flex gap-4">
                  <li className="size-9 aspect-square grid place-content-center border border-white rounded-4xl">
                    <InstagramIcon />
                  </li>

                  <li className="size-9 aspect-square grid place-content-center border border-white rounded-4xl">
                    <YoutubeIcon />
                  </li>

                  <li className="size-9 aspect-square grid place-content-center border border-white rounded-4xl">
                    <FacebookIcon />
                  </li>

                  <li className="size-9 aspect-square grid place-content-center border border-white rounded-4xl">
                    <XIcon className="size-3" />
                  </li>
                </ul>
              </div>

              <ul className="grid grid-cols-1 lg:grid-cols-2 lg:border-l border-l-[#6d5f7d]">
                <div className="lg:pl-20 pt-5 lg:pt-20 pb-5 lg:pb-9">
                  <h5 className="text-xl font-brand-bold mb-5">QUICK LINKS</h5>
                  <ul className="grid gap-3">
                    <li>Home</li>
                    <li>Competitions</li>
                    <li>Football in Qatar</li>
                    <li>About us</li>
                    <li>Careers</li>
                  </ul>
                </div>

                <div className="lg:pl-20 pt-5 lg:pt-20 pb-5 lg:pb-9">
                  <h5 className="text-xl font-brand-bold mb-5">LOCATION</h5>
                  <ul className="grid">
                    <li>Al-Bidda Tower, Cornich</li>
                    <li>Al-Bidda Tower, Cornich</li>
                    <li>Fax: 44754300</li>
                    <li>P.O.Box: 5333</li>
                    <li>Doha - Qatar</li>
                  </ul>
                </div>

                <div className="lg:pl-20 pt-5 lg:pt-10 border-t border-t-[#6d5f7d] pb-5 lg:pb-11">
                  <h5 className="text-xl font-brand-bold mb-5">
                    PRIVACY & POLICY
                  </h5>
                  <ul className="grid gap-3">
                    <li>Terms of Use</li>
                    <li>Privacy Policy</li>
                    <li>Sitemap</li>
                  </ul>
                </div>

                <div className="lg:pl-20 pt-5 lg:pt-10 border-t border-t-[#6d5f7d] pb-5 lg:pb-11">
                  <h5 className="text-xl font-brand-bold mb-5">CONTACT US</h5>
                  <ul className="grid gap-3">
                    <li>Phone: 44754444</li>
                    <li>info@qfa.qa</li>
                  </ul>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand flex flex-wrap p-5 lg:py-10">
        <div className="container mx-auto">
          <div className="flex justify-center flex-wrap gap-5 w-fit lg:gap-7 max-w-5xl mx-auto *:lg:basis-[14%]">
            <div className="grid gap-4">
              <div className="h-10">
                <img
                  src={brand01}
                  alt="Brand image"
                  className="mx-auto object-contain h-full w-full mix-blend-lighten"
                />
              </div>

              <h6 className="text-[1.125rem] text-center">Official Bank</h6>
            </div>
            <div className="grid gap-4">
              <div className="h-10">
                <img
                  src={brand02}
                  alt="Brand image"
                  className="mx-auto object-contain h-full w-full mix-blend-lighten"
                />
              </div>
              <h6 className="text-[1.125rem] text-center">Official Bank</h6>
            </div>
            <div className="grid gap-4">
              <div className="h-10">
                <img
                  src={brand03}
                  alt="Brand image"
                  className="mx-auto object-contain h-full w-full mix-blend-lighten"
                />
              </div>
              <h6 className="text-[1.125rem] text-center">Official Bank</h6>
            </div>
            <div className="grid gap-4">
              <div className="h-10">
                <img
                  src={brand04}
                  alt="Brand image"
                  className="mx-auto object-contain h-full w-full mix-blend-lighten"
                />
              </div>
              <h6 className="text-[1.125rem] text-center">Official Bank</h6>
            </div>
            <div className="grid gap-4">
              <div className="h-10">
                <img
                  src={brand05}
                  alt="Brand image"
                  className="mx-auto object-contain h-full w-full mix-blend-lighten"
                />
              </div>
              <h6 className="text-[1.125rem] text-center">Official Bank</h6>
            </div>
            <div className="grid gap-4">
              <div className="h-10">
                <img
                  src={brand06}
                  alt="Brand image"
                  className="mx-auto object-contain h-full w-full mix-blend-lighten"
                />
              </div>
              <h6 className="text-[1.125rem] text-center">Official Bank</h6>
            </div>
            <div className="grid gap-4">
              <div className="h-10">
                <img
                  src={brand07}
                  alt="Brand image"
                  className="mx-auto object-contain h-full w-full mix-blend-lighten"
                />
              </div>
              <h6 className="text-[1.125rem] text-center">Official Bank</h6>
            </div>
            <div className="grid gap-4">
              <div className="h-10">
                <img
                  src={brand08}
                  alt="Brand image"
                  className="mx-auto object-contain h-full w-full mix-blend-lighten"
                />
              </div>
              <h6 className="text-[1.125rem] text-center">Official Bank</h6>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#8c0321] py-5 text-center text-[1.125rem]">
        Powered by Qatar Football Association
      </section>
    </footer>
  );
};

export default Footer;

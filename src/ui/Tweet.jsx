import React from "react";
import tweet01 from "../assets/tweet-01.png";

const Tweet = () => {
  return (
    <article className="rounded-xl">
      <img src={tweet01} alt="Tweet image" className="aspect-video" />
      <div className="mt-4 lg:mt-6">
        <h3 className="text-xl text-black font-brand-bold">
          <span className="text-[#8e2baf]">#AlAnnabi</span> is ready for
          tomorrow's match! 🔥
          <span className="text-[#8e2baf]">#Our_Journey_To2026</span>
        </h3>

        <p className="mt-4 lg:mt-5 text-[#899aa0]">1 Aug 2023</p>
      </div>
    </article>
  );
};

export default Tweet;

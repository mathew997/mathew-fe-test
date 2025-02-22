import React from "react";
import { TicketIcon } from "../lib/icon";

const Tickect = () => {
  return (
    <button
      data-ticket
      className="relative overflow-clip cursor-pointer flex items-center px-6 rounded-md bg-[#ffb92e] text-brand text-[1.125rem] font-brand-bold"
    >
      <span className="pr-2.5 py-2.5 border-dashed border-r border-brand ">
        <TicketIcon />
      </span>

      <span className="text-xl pl-2.5">TICKETS</span>
    </button>
  );
};

export default Tickect;

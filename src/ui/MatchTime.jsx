import React from "react";

const MatchTime = ({ time }) => {
  if (!time) return null;

  const [hour, minute, period] = time.split(/[: ]/);
  return (
    <div className="flex items-center gap-2 text-white text-2xl font-bold">
      {/* Hour */}
      <div className="px-2.5 py-3.5 border border-[#ddbfe7] rounded-md text-brand font-brand-bold text-[1.125rem]">
        {hour}
      </div>

      {/* Colon */}
      <span className="text-3xl font-bold text-brand">:</span>

      {/* Minute */}
      <div className="px-2.5 py-3.5 border border-[#ddbfe7] rounded-md text-brand font-brand-bold text-[1.125rem]">
        {minute}
      </div>

      {/* AM/PM */}
      <div className="px-2.5 py-3.5 border border-[#ddbfe7] rounded-md text-brand font-brand-bold text-[1.125rem] uppercase">
        {period.toLowerCase()}
      </div>
    </div>
  );
};

export default MatchTime;

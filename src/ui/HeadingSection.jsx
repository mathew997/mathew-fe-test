import React from "react";

const HeadingSection = ({ breadcrumb, title, subtitle }) => {
  return (
    <div className="text-left">
      {breadcrumb && (
        <p className="text-sm text-[#f26522] text-[1.125rem]">/ {breadcrumb}</p>
      )}
      {title && subtitle && (
        <h2
          className={`text-3xl lg:text-6xl font-brand-bold max-w-xl ${
            breadcrumb ? "mt-5" : ""
          }`}
        >
          <span
            data-title
            className="text-transparent inline-block pr-1.5"
            style={{ WebkitTextStroke: "1px var(--color-brand)" }}
          >
            {title}{" "}
          </span>
          <span data-subtitle className="text-brand inline-block">
            {subtitle}
          </span>
        </h2>
      )}
    </div>
  );
};

export default HeadingSection;

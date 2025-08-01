import React, { JSX } from "react";

type HomeSolutionProps = {
  title: string;
  icon: JSX.Element;
  children: JSX.Element;
};

export const HomeSolution = ({ title, icon, children }: HomeSolutionProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg md:text-2xl text-gradient animate-gradient">
        {title}
      </h3>
      <div className="flex">
        <div
          className="text-5xl font-bold float-left mr-2 text-cyan-600"
          data-aos="fade-right"
        >
          {icon}
        </div>
        <div data-aos="fade-left">{children}</div>
      </div>
    </div>
  );
};

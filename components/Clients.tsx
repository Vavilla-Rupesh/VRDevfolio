"use client";

import React from "react";
import { achievements, skills } from "@/data";
import { InfiniteMovingCards } from "@/components/ui/InfiniteCards";
import lightenDarkenColor from "@/components/ui/LightenDarkenColor";

const Clients = () => {
  return (
    <section id="achievements" className="py-20">
      <h1 className="heading">
        My Technical
        <span className="text-purple"> Skills & Expertise</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={achievements}
            direction="right"
            speed="slow"
          />
        </div>

        <div id="skills" className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex md:max-w-60 max-w-32 gap-2 items-center p-4 rounded-lg bg-black-100 border border-white/[0.1] hover:bg-black-200 transition-all duration-300"
            >
              <div
                className="text-2xl md:text-4xl"
                style={{ color: skill.color }} // Icon slightly darker
              >
                {React.createElement(skill.icon)}
              </div>
              <span
                className="text-sm md:text-base font-medium"
                style={{ color: lightenDarkenColor(skill.color, 40) }} // Text slightly lighter
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

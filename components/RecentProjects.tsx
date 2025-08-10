"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "@/components/ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            key={item.id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            {/* Whole card clickable */}
            <div
              onClick={() => window.open(item.link, "_blank", "noopener,noreferrer")}
              className="block w-full h-full transition-transform hover:scale-[1.02] group cursor-pointer"
            >
              <PinContainer>
                {/* Project image */}
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  ></div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="absolute inset-0 w-full h-full object-cover z-10 rounded-2xl lg:rounded-3xl"
                  />
                </div>

                {/* Title */}
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                {/* Description */}
                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                {/* Tech Icons + Check Application */}
                <div className="flex items-center justify-between mt-7 mb-3">
                  {/* Icons */}
                  <div className="flex items-center gap-3">
                    {item.iconLists.map((tech, index) => (
                      <span
                        key={index}
                        title={tech.name}
                        className="hover:scale-110 transition-transform duration-200"
                      >
                        {tech.icon}
                      </span>
                    ))}
                  </div>

                  {/* Check Application visual only */}
                  <div className="group/link flex items-center gap-2 transition-all duration-300 hover:drop-shadow-[0_0_0.4rem_#CBACF9aa]">
                    <span className="relative text-purple lg:text-xl md:text-xs text-sm font-medium">
                      <span className="relative z-10">Check Application</span>
                      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-purple scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left duration-300"></span>
                    </span>
                    <FaLocationArrow
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                      color="#CBACF9"
                    />
                  </div>
                </div>
              </PinContainer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;

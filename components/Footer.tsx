import React from "react";
import {
  FaLocationArrow,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const iconMap = {
  GitHub: <FaGithub className="text-[#333] group-hover:text-[#6e5494]" />,
  Instagram: (
    <FaInstagram className="text-[#E4405F] group-hover:text-[#E1306C]" />
  ),
  LinkedIn: (
    <FaLinkedin className="text-[#0077B5] group-hover:text-[#005582]" />
  ),
};

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative z-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96 -z-10">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-center">
          Transform <span className="text-purple">your concepts</span> into
          reality.
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Get in touch and let&apos;s build something impactful
          together—tailored to your goals and vision.
        </p>
        <a href="mailto:rupeshvavilla200325@gmail.com">
          <MagicButton
            title="Let's Connect"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light text-white-300">
          Copyright &copy; {new Date().getFullYear()} Vavilla Rupesh
        </p>
        <div className="flex items-center md:gap-3 gap-6 mt-4 md:mt-0">
          {socialMedia.map(({ id, name, link }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-10 h-10 flex justify-center items-center rounded-full border border-white transition-transform transform hover:scale-125 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              style={{
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
              }}
            >
              {React.cloneElement(iconMap[name as keyof typeof iconMap], {
                size: 20,
                className:
                  iconMap[name as keyof typeof iconMap].props.className +
                  " transition-colors duration-300",
              })}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

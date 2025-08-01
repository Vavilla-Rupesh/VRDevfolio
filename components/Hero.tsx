"use client";

import React, { useEffect, useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";

const Hero = () => {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight = window.innerHeight * 0.8;
      setShrink(window.scrollY > heroSectionHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="home"
      className="relative min-h-screen scroll-mt-36 pt-24 pb-16 md:pt-40 md:pb-20"
    >
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] v-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] v-[50vw]" fill="blue" />
      </div>

      {/* Background Grid Mask */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] 
        bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Profile Image - Floating for Desktop */}
      <motion.div
        className={`mt-36 hidden md:block fixed z-50 transition-all ease-in-out ${
          shrink
            ? "top-4 right-4 w-16 h-16"
            : "top-[20%] right-[5%] w-48 h-48"
        } rounded-full
        shadow-[0_4px_14px_0_rgb(0,118,255,0.39)]
        hover:shadow-[0_6px_40px_rgba(147,51,234,0.8)] 
        bg-gradient-to-br from-purple-700 to-fuchsia-600`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          duration: 0.5,
        }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileHover={{ scale: 1.05 }}
      >
        <img
          src="/profile.jpg"
          alt="Rupesh"
          className="w-full h-full object-cover rounded-full border-2 border-white"
        />
      </motion.div>

      {/* Hero Content */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center space-y-6">
          {/* Top tagline */}
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 lg:max-w-none lg:whitespace-nowrap">
            Blending sleek frontend with strong backend for progress
          </p>

          {/* Animated Text */}
          <TextGenerateEffect
            words="Designing with intent coding with focus and continuously evolving"
            className="text-center text-2xl sm:text-3xl md:text-5xl lg:text-6xl"
          />

          {/* Profile Image - Static on Mobile only */}
          <div className="block md:hidden w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-md bg-gradient-to-br from-purple-700 to-fuchsia-600">
            <img
              src="/profile.jpg"
              alt="Rupesh"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Name Description */}
          <p className="text-center md:tracking-wider text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Vavilla Rupesh, a frontend-focused full-stack learner
          </p>

          <a href="#about">
            <MagicButton
              title={"Explore my builds"}
              icon={<FaLocationArrow />}
              position={"right"}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

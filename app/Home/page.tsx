"use client";

import { useEffect, useRef } from "react";
import Button from "../components/Button";
import { ChevronDown, Globe, GraduationCap, Users } from "lucide-react";

export default function Home() {
  const worldRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!worldRef.current) return;

      // Disable effect on small screens
      if (window.innerWidth < 768) return;

      const { innerWidth, innerHeight } = window;

      const x = (e.clientX / innerWidth - 0.5) * 30;
      const y = (e.clientY / innerHeight - 0.5) * 30;

      worldRef.current.style.transform = `
        translate(${x}px, ${y}px)
        scale(1.04)
      `;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex flex-col min-h-dvh w-full pt-16 px-mobile lg:px-main items-center justify-center relative overflow-hidden bg-color-background">
      {/* 🌍 Interactive World Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          ref={worldRef}
          src="./Home/world.svg"
          alt="World Map Background"
          className="
            w-auto h-full object-cover object-top
            transition-transform duration-300 ease-out
            opacity-[0.8]
          "
          style={{
            filter: "drop-shadow(0 0 12px rgba(255,255,255,0.25))",
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-color-background via-color-background/80 to-transparent" />
      </div>

      {/* 🧠 Content */}
      <div className="w-full max-w-content flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 z-10 text-center">
        <div className="w-full flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5">
          {/* Glassy Blue Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 text-fontsize-caption font-semibold text-color-text-primary rounded-full backdrop-blur-lg border border-blue-400/30 bg-gradient-to-r from-blue-500/15 to-blue-600/15 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
            <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="whitespace-nowrap">10+ Countries</span>
          </div>

          {/* Glassy Amber/Orange Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 text-fontsize-caption font-semibold text-color-text-primary rounded-full backdrop-blur-lg border border-amber-400/30 bg-gradient-to-r from-amber-500/15 to-orange-500/15 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105">
            <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="whitespace-nowrap hidden sm:inline">
              Top Global Universities
            </span>
            <span className="whitespace-nowrap sm:hidden">
              Global Universities
            </span>
          </div>

          {/* Glassy Emerald/Teal Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 text-fontsize-caption font-semibold text-color-text-primary rounded-full backdrop-blur-lg border border-purple-400/30 bg-gradient-to-r from-purple-500/15 to-purple-500/15 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105">
            <Users className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="whitespace-nowrap">500+ Students Placed</span>
          </div>
        </div>
        <h1 className="text-fontsize-display font-fontfamily-display font-fontweight-bold leading-lineheight-display text-color-text-primary">
          Turning Dreams into
          <span className="text-color-text-accent">International</span> Degrees
        </h1>

        <div className="text-center w-full lg:w-[55%] flex items-center justify-center">
          <p className="text-fontsize-body max-w-3xl text-color-text-muted font-fontweight-regular leading-lineheight-body">
            Empowering international students and recruitment partners to access
            world-class education at leading global universities.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-5">
          <Button label="Get In Touch" size="md" className="w-[200px] py-3" />
          <Button
            label="Learn More"
            variant="secondary"
            size="md"
            className="w-[200px] py-3"
          />
        </div>
      </div>
      <div
        className="
        absolute bottom-4 left-1/2 -translate-x-1/2
        text-color-text-muted
        animate-bounce
      "
        aria-label="Scroll down"
      >
        <ChevronDown size={20} strokeWidth={2} />
      </div>
    </div>
  );
}

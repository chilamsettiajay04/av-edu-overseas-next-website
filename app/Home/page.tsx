// "use client";

// import { useEffect, useRef } from "react";
// import Button from "../components/Button";
// import { ChevronDown, Globe, GraduationCap, Users } from "lucide-react";

// export default function Home() {
//   const worldRef = useRef<HTMLImageElement>(null);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (!worldRef.current) return;

//       // Disable effect on small screens
//       if (window.innerWidth < 768) return;

//       const { innerWidth, innerHeight } = window;

//       const x = (e.clientX / innerWidth - 0.5) * 30;
//       const y = (e.clientY / innerHeight - 0.5) * 30;

//       worldRef.current.style.transform = `
//         translate(${x}px, ${y}px)
//         scale(1.04)
//       `;
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <div className="flex flex-col min-h-fit mt-16 lg:mt-0 lg:min-h-dvh w-full py-16 px-mobile xl:px-main items-center justify-center relative overflow-hidden bg-color-background">
//       {/* 🌍 Interactive World Background */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         {/* <img
//           ref={worldRef}
//           src="./Home/world.svg"
//           alt="World Map Background"
//           className="
//             w-auto h-full object-cover object-top
//             transition-transform duration-300 ease-out
//             opacity-[0.8]
//           "
//           style={{
//             filter: "drop-shadow(0 0 12px rgba(255,255,255,0.25))",
//           }}
//         /> */}

//         {/* Gradient overlay */}
//         {/* <div className="absolute inset-0 bg-gradient-to-t from-color-background via-color-background/80 to-transparent" /> */}
//       </div>

//       {/* 🧠 Content */}
//       <div className="w-full max-w-content flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 z-10 text-center">
//         <div className="w-full flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5">
//           {/* Glassy Blue Tag */}
//           <div className="inline-flex items-center gap-2 px-4 py-2 text-fontsize-caption font-semibold text-color-text-white rounded-full backdrop-blur-lg border border-blue-400/30 bg-gradient-to-r from-blue-500/15 to-blue-600/15 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
//             <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
//             <span className="whitespace-nowrap">10+ Countries</span>
//           </div>

//           {/* Glassy Amber/Orange Tag */}
// <div className="inline-flex items-center gap-2 px-4 py-2 text-fontsize-caption font-semibold text-color-text-white rounded-full backdrop-blur-lg border border-amber-400/30 bg-gradient-to-r from-amber-500/15 to-orange-500/15 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105">
//   <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
//   <span className="whitespace-nowrap hidden sm:inline">
//     Top Global Universities
//   </span>
//   <span className="whitespace-nowrap sm:hidden">
//     Global Universities
//   </span>
// </div>

//           {/* Glassy Emerald/Teal Tag */}
//           <div className="inline-flex items-center gap-2 px-4 py-2 text-fontsize-caption font-semibold text-color-text-white rounded-full backdrop-blur-lg border border-purple-400/30 bg-gradient-to-r from-purple-500/15 to-purple-500/15 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105">
//             <Users className="w-4 h-4 sm:w-5 sm:h-5" />
//             <span className="whitespace-nowrap">500+ Students Placed</span>
//           </div>
//         </div>
//         <h1 className="text-fontsize-display font-fontfamily-display font-fontweight-bold leading-lineheight-display text-color-text-white">
//           Turning Dreams Into
//           <span className="text-color-text-accent ml-2">International</span> Degrees
//         </h1>

//         <div className="text-center w-full lg:w-[55%] flex items-center justify-center">
//           <p className="text-fontsize-body max-w-3xl text-color-text-white opacity-70 font-fontweight-regular leading-lineheight-body">
//             Empowering international students and recruitment partners to access
//             world-class education at leading global universities.
//           </p>
//         </div>

//         <div
//           className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mt-6 w-full sm:w-auto"
//           data-testid="cta-buttons"
//         >
//           <Button
//             label="Book Free Consultation"
//             variant="primary"
//             size="lg"
//             className="w-full sm:w-auto"
//             data-testid="book-consultation-btn"
//           />
//           <Button
//             label="Call Us Now"
//             variant="secondary"
//             size="lg"
//             className="w-full sm:w-auto"
//             data-testid="call-now-btn"
//           />
//         </div>
//       </div>
//       <div
//         className="
//         absolute bottom-4 left-1/2 -translate-x-1/2
//         text-color-text-white opacity-70
//         animate-bounce
//       "
//         aria-label="Scroll down"
//       >
//         <ChevronDown size={20} strokeWidth={2} />
//       </div>
//     </div>
//   );
// }
"use client";
import { Play, Users, GraduationCap } from "lucide-react";
import Button from "../components/Button";
import openWhatsApp from "../utils/whatsapp";
import makePhoneCall from "../utils/mobile";
import { siteContent } from "../constants/siteContent";

const HeroSection = () => {
  return (
    <section
      className="flex flex-col min-h-fit mt-16 pb-16 xl:pb-0 xl:mt-0 xl:min-h-dvh pt-16 w-full px-mobile lg:px-main items-center justify-center relative overflow-hidden bg-color-home-background"
      id="home"
    >
      {/* Content */}
      <div className="max-w-content grid lg:grid-cols-2  items-center">
        {/* TEXT CONTENT */}
        <div className="flex flex-col gap-6 text-center lg:text-left">
          {/* Heading */}
          <h1 className="text-fontsize-display text-left text-color-text-white leading-lineheight-heading font-fontweight-bold animate-fade-in-up animation-delay-100 ">
            {siteContent.home.heading.text}{" "}
            <span className="text-color-text-accent">{siteContent.home.heading.highlight}</span>
          </h1>

          {/* Sub Heading (IMPORTANT) */}
          <p className="text-fontsize-body text-left text-color-text-white opacity-70 max-w-xl animate-fade-in-up animation-delay-200">
            {siteContent.home.subHeading}
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 mt-6 w-full sm:w-auto"
            data-testid="cta-buttons"
          >
            <Button
              label={siteContent.home.buttons.book}
              onClick={() => openWhatsApp()}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
              data-testid="book-consultation-btn"
            />
            <Button
              label={siteContent.home.buttons.call}
              onClick={() => makePhoneCall()}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto text-white hover:text-black"
              data-testid="call-now-btn"
            />
          </div>

          {/* Trust Indicators */}
          {/* Trust Indicators */}
          <div className="flex items-center justify-start  gap-6 lg:gap-10 animate-fade-in-up animation-delay-400">
            {siteContent.home.trust.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="text-start">
                  <div className="text-fontsize-h3 font-fontweight-bold text-color-text-accent">
                    {item.value}
                  </div>
                  <p className="text-fontsize-caption text-color-text-white opacity-60">
                    {item.label}
                  </p>
                </div>
                {index < siteContent.home.trust.length - 1 && (
                  <div className="w-px h-12 bg-color-border-divider ml-6 lg:ml-10" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* VISUAL SECTION */}
        <div className="hidden lg:flex justify-end items-center relative animate-fade-in-up animation-delay-300">
          <div className="relative w-[470px] h-[470px]">
            <div className="absolute inset-0 border border-color-accent rounded-full opacity-10" />
            <div className="absolute inset-8 border border-color-accent rounded-full opacity-20" />
            <div className="absolute inset-16 border border-color-accent rounded-full opacity-30" />
            <div
              className="absolute inset-16 rounded-full 
              bg-gradient-to-br from-color-accent to-color-accent-hover 
              blur-3xl 
              animate-light-spread 
              shadow-2xl opacity-70"
            />

            {/* Image */}
            <img
              src="./About/home_image.png"
              alt="Global Education"
              className="absolute z-20 scale-105 rounded-lg"
            />

            {/* Floating Card 1 */}
            <div className="absolute top-10 right-12 bg-white/10 backdrop-blur-xl rounded-2xl p-4 shadow-md animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-color-accent to-color-accent-hover flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-color-text-white" />
                </div>
                <div>
                  <div className="text-fontsize-h6 text-color-text-white font-fontweight-bold">
                    {siteContent.home.floatingCards.card1.value}
                  </div>
                  <p className="text-fontsize-caption text-color-text-white opacity-70">
                    {siteContent.home.floatingCards.card1.label}
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute bottom-20 left-0 bg-white/20 backdrop-blur-xl rounded-2xl p-4 shadow-md animate-float animation-delay-300 ">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-color-accent to-color-accent-hover flex items-center justify-center">
                  <Users className="w-5 h-5 text-color-text-white" />
                </div>
                <div>
                  <div className="text-fontsize-h6 text-color-text-white font-fontweight-bold">
                    {siteContent.home.floatingCards.card2.value}
                  </div>
                  <p className="text-fontsize-caption text-color-text-white opacity-70">
                    {siteContent.home.floatingCards.card2.label}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

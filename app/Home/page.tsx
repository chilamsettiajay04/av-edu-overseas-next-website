"use client";
import { Users, GraduationCap } from "lucide-react";
import Button from "../components/Button";
import openWhatsApp from "../utils/whatsapp";
import makePhoneCall from "../utils/mobile";
import { siteContent } from "../constants/siteContent";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--initial-vh", `${vh}px`);
  }, []);
  return (
    <section
      className="flex flex-col min-h-[calc(var(--initial-vh,1vh)*100)] xl:min-h-dvh pt-16 w-full px-mobile lg:px-main items-center justify-center relative overflow-hidden bg-color-home-background"
      id="home"
    >
      {/* Content */}
      <div className="max-w-content grid lg:grid-cols-2  items-center">
        {/* TEXT CONTENT */}
        <div className="flex flex-col gap-6 text-center lg:text-left">
          {/* Heading */}
          <h1 className="text-fontsize-display text-left text-color-text-white leading-lineheight-heading font-fontweight-bold animate-fade-in-up animation-delay-100 ">
            {siteContent.home.heading.text}{" "}
            <span className="text-color-text-accent">
              {siteContent.home.heading.highlight}
            </span>
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
          <div className="flex items-center justify-start  gap-6 lg:gap-12 animate-fade-in-up animation-delay-400">
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
          <div className="relative w-[470px] h-[470px] 2xl:w-[600px] 2xl:h-[600px]">
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
              src="./About/home_image.webp"
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
            <div className="absolute bottom-20 left-0 bg-white/20 backdrop-blur-xl rounded-2xl p-4 shadow-md animate-float">
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

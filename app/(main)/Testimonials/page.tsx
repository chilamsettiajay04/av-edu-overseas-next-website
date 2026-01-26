"use client";
import { useRef, useState, useEffect } from "react";
import SectionTag from "../../components/SectionTag";
import TestimonialCard from "../../components/TestimonialCard";
import { siteContent } from "../../constants/siteContent";
import ScrollAnimation from "../../components/ScrollAnimation";

export default function Trust() {
  const testimonialsData = siteContent.testimonials;

  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Desktop scroll buttons
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  // Responsive
  const [isMobile, setIsMobile] = useState(false);

  // Mobile slider state
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  /* -------------------- Responsive check -------------------- */
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* -------------------- Desktop scroll logic -------------------- */
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current || isMobile) return;

    const cardWidth = 350 + 24; // card + gap
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

    const newScrollLeft = scrollRef.current.scrollLeft + scrollAmount;

    scrollRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });

    updateButtonVisibility(newScrollLeft);
  };

  const updateButtonVisibility = (scrollLeft: number) => {
    if (!scrollRef.current || isMobile) return;

    const { scrollWidth, clientWidth } = scrollRef.current;
    setShowLeftButton(scrollLeft > 10);
    setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const handleScroll = () => {
    if (!scrollRef.current || isMobile) return;
    updateButtonVisibility(scrollRef.current.scrollLeft);
  };

  /* -------------------- Mobile swipe handlers -------------------- */
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const endX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - endX;

    if (diff > 50 && activeIndex < testimonialsData.testimonials.length - 1) {
      setActiveIndex((prev) => prev + 1);
    } else if (diff < -50 && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }

    touchStartX.current = null;
  };

  /* -------------------- Layout rules -------------------- */
  const showAsGrid =
    !isMobile && testimonialsData.testimonials.length <= 3;

  const showHorizontalScroll =
    !isMobile && testimonialsData.testimonials.length > 3;

  /* -------------------- JSX -------------------- */
  return (
    <section
      id="testimonials"
      className="flex flex-col w-full px-mobile lg:px-main py-16 items-center bg-color-background"
    >
      <div className="max-w-content mx-auto w-full relative">
        {/* Header */}
        <ScrollAnimation variant="fadeUp" className="mb-10 space-y-4">
          <SectionTag
            variant="accent"
            label={testimonialsData.sectionTag}
          />

          <h2 className="text-fontsize-h1 font-fontweight-medium text-color-text-primary">
            {testimonialsData.heading.text}
            <span className="text-color-text-accent ml-2">
              {testimonialsData.heading.highlight}
            </span>
          </h2>

          <p className="text-fontsize-body text-color-text-muted max-w-2xl">
            {testimonialsData.description}
          </p>
        </ScrollAnimation>

        {/* -------------------- MOBILE SLIDER -------------------- */}
        {isMobile && (
          <ScrollAnimation variant="fadeUp">
            <div
              className="relative overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{
                  transform: `translateX(-${activeIndex * 100}%)`,
                }}
              >
                {testimonialsData.testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="min-w-full py-2"
                  >
                    <TestimonialCard
                      name={testimonial.name}
                      university={testimonial.university}
                      country={testimonial.country}
                      rating={testimonial.rating}
                      content={testimonial.content}
                    />
                  </div>
                ))}
              </div>

              {/* Dots */}
              <div className="flex justify-center mt-4 space-x-2">
                {testimonialsData.testimonials.map((_, index) => (
                  <span
                    key={index}
                    className={`h-2 rounded-full transition-all ${index === activeIndex
                      ? "w-4 bg-color-text-accent"
                      : "w-2 bg-gray-300"
                      }`}
                  />
                ))}
              </div>
            </div>
          </ScrollAnimation>
        )}

        {/* -------------------- DESKTOP GRID -------------------- */}
        {showAsGrid && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialsData.testimonials.map((testimonial, index) => (
              <ScrollAnimation key={index} variant="fadeUp" delay={index * 0.1}>
                <TestimonialCard {...testimonial} />
              </ScrollAnimation>
            ))}
          </div>
        )}

        {/* -------------------- DESKTOP HORIZONTAL SCROLL -------------------- */}
        {showHorizontalScroll && (
          <ScrollAnimation variant="fadeUp" className="relative">
            {/* Fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-color-background to-transparent z-20" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-color-background to-transparent z-20" />

            {/* Buttons */}
            {/* Navigation Buttons */}
            <button
              onClick={() => scroll('left')}
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-30 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 ${showLeftButton ? 'opacity-100' : 'opacity-50 cursor-not-allowed'
                }`}
              aria-label="Scroll left"
              disabled={!showLeftButton}
            >
              <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => scroll('right')}
              className={`absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-30 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 ${showRightButton ? 'opacity-100' : 'opacity-50 cursor-not-allowed'
                }`}
              aria-label="Scroll right"
              disabled={!showRightButton}
            >
              <svg className="w-4 h-64 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Scroll container */}
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto pb-6 scrollbar-hide"
            >
              <div className="flex space-x-6 px-4">
                {testimonialsData.testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[350px] lg:w-[400px]"
                  >
                    <TestimonialCard {...testimonial} />
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        )}
      </div>
    </section>
  );
}

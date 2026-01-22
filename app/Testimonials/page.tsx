"use client";
import { useRef, useState, useEffect } from "react";
import SectionTag from "../components/SectionTag";
import TestimonialCard from "../components/TestimonialCard";
import { siteContent } from "../constants/siteContent";

export default function Trust() {
  const testimonialsData = siteContent.testimonials;
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scroll = (direction: string) => {
    if (scrollRef.current && !isMobile) {
      const cardWidth = 350 + 24; // width + gap
      const scrollAmount = cardWidth;
      const newScrollLeft = scrollRef.current.scrollLeft +
        (direction === 'left' ? -scrollAmount : scrollAmount);

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });

      updateButtonVisibility(newScrollLeft);
    }
  };

  const updateButtonVisibility = (scrollLeft: number) => {
    if (scrollRef.current && !isMobile) {
      const { scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftButton(scrollLeft > 10);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current && !isMobile) {
      updateButtonVisibility(scrollRef.current.scrollLeft);
    }
  };

  // If 3 or fewer testimonials, show as grid, otherwise horizontal scroll on desktop
  const showAsGrid = !isMobile && testimonialsData.testimonials.length <= 3;
  const showHorizontalScroll = !isMobile && testimonialsData.testimonials.length > 3;

  return (
    <section
      className="flex flex-col min-h-fit w-full px-mobile lg:px-main py-16 items-center justify-center relative overflow-hidden bg-color-background"
      id="testimonials"
    >
      <div className="max-w-content mx-auto w-full relative">
        {/* Section Header */}
        <div className="mb-8 lg:mb-10 space-y-4">
          <div className="flex">
            <SectionTag
              variant="accent"
              label={testimonialsData.sectionTag}
            />
          </div>

          <h2 className="text-fontsize-h1 font-fontweight-medium text-color-text-primary leading-lineheight-heading">
            {testimonialsData.heading.text}
            <span className="text-color-text-accent ml-2">
              {testimonialsData.heading.highlight}
            </span>
          </h2>

          <p className="text-fontsize-body text-color-text-muted leading-lineheight-body max-w-2xl">
            {testimonialsData.description}
          </p>
        </div>

        {/* Content Container */}
        <div className="relative">
          {/* Mobile: Vertical Scroll */}
          {isMobile && (
            <div className="space-y-6 max-h-[600px] overflow-y-auto pb-4 pr-2 scrollbar-thin scrollbar-thumb-gray-300">
              {testimonialsData.testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  name={testimonial.name}
                  university={testimonial.university}
                  country={testimonial.country}
                  rating={testimonial.rating}
                  content={testimonial.content}
                />
              ))}
            </div>
          )}

          {/* Desktop: Grid (3 or fewer cards) */}
          {showAsGrid && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonialsData.testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  name={testimonial.name}
                  university={testimonial.university}
                  country={testimonial.country}
                  rating={testimonial.rating}
                  content={testimonial.content}
                />
              ))}
            </div>
          )}

          {/* Desktop: Horizontal Scroll (more than 3 cards) */}
          {showHorizontalScroll && (
            <div className="relative">
              {/* Fade Effects */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-color-background via-color-background/80 to-transparent z-20" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-color-background via-color-background/80 to-transparent z-20" />

              {/* Navigation Buttons */}
              <button
                onClick={() => scroll('left')}
                className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-30 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 ${showLeftButton ? 'opacity-100' : 'opacity-50 cursor-not-allowed'
                  }`}
                aria-label="Scroll left"
                disabled={!showLeftButton}
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Scroll Container */}
              <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto pb-6 scroll-smooth scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent scrollbar-hide"
              >
                <div className="flex space-x-6 min-w-min px-4">
                  {testimonialsData.testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-[350px] md:w-[380px] lg:w-[400px]"
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
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
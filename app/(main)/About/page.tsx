import { Grid } from "lucide-react";
import SectionTag from "../../components/SectionTag";
import Image from "next/image";

import { siteContent } from "../../constants/siteContent";
import ScrollAnimation from "../../components/ScrollAnimation";

const images = siteContent.about.images;

const About = () => {
  return (
    <section
      className="flex flex-col min-h-fit w-full px-mobile lg:px-main  py-16 items-center justify-center relative overflow-hidden bg-color-surface-muted"
      id="about"
    >
      <div className="max-w-content mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <ScrollAnimation variant="fadeUp" className="order-2 lg:order-1 grid grid-cols-1 gap-1 overflow-hidden rounded-br-3xl rounded-tl-3xl relative">
            {/* Glassy Emerald/Teal Tag */}
            <div className="absolute top-4 lg:top-auto lg:bottom-4 left-0 z-10 inline-flex items-center gap-2 px-4 py-2 text-fontsize-caption font-semibold text-color-text-white rounded-r-full backdrop-blur-lg border border-amber-400/30 bg-gradient-to-r from-amber-500/15 to-orange-500/15 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105">
              <Grid className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="whitespace-nowrap">
                {siteContent.about.galleryLabel}
              </span>
            </div>
            {/* Top marquee */}
            <div className="relative w-full overflow-hidden">
              <div className="marquee marquee-left">
                {[...images, ...images].map((src, index) => (
                  <Image
                    key={`top-${index}`}
                    src={src}
                    width={400}
                    height={225}
                    className="h-56 w-full object-cover aspect-video"
                    alt=""
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                ))}
              </div>
            </div>

            {/* Bottom marquee */}
            <div className="relative w-full overflow-hidden">
              <div className="marquee marquee-right">
                {[...images, ...images].map((src, index) => (
                  <Image
                    key={`bottom-${index}`}
                    src={src}
                    width={300}
                    height={225}
                    className="h-56 w-auto object-cover"
                    alt=""
                    sizes="(max-width: 768px) 50vw, 300px"
                  />
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Text Content */}
          <div className="order-1 lg:order-2 flex flex-col justify-center items-center">
            <ScrollAnimation variant="fadeUp" delay={0.2} className="space-y-6 lg:space-y-8">
              <SectionTag
                variant="accent"
                label={siteContent.about.sectionTag}
              />
              <h2 className="text-fontsize-h1 font-fontweight-medium text-color-text-primary leading-lineheight-heading">
                {siteContent.about.heading.text}
                <span className="text-color-text-accent ml-2">
                  {siteContent.about.heading.highlight}
                </span>
              </h2>

              <div className="space-y-4 lg:space-y-6">
                {siteContent.about.content.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-fontsize-body text-color-text-primary leading-lineheight-body"
                  >
                    {paragraph.text}
                    {paragraph.highlight && (
                      <strong className="font-fontweight-semibold">
                        {paragraph.highlight}
                      </strong>
                    )}
                    {paragraph.suffix}
                  </p>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { Grid } from "lucide-react";
import SectionTag from "../components/SectionTag";

const images = [
  "./About/image1.png",
  "./About/image2.png",
  "./About/image3.png",
  "./About/image4.jpg",
  "./About/image5.jpg",
  "./About/image6.jpg",
  "./About/image7.jpg",
];

const About = () => {
  return (
    <section
      className="flex flex-col min-h-fit w-full px-mobile lg:px-main  py-16 items-center justify-center relative overflow-hidden bg-color-surface-muted"
      id="about"
    >
      <div className="max-w-content mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          <div className="order-2 lg:order-1 grid grid-cols-1 gap-1 overflow-hidden rounded-br-3xl rounded-tl-3xl relative">
            {/* Glassy Emerald/Teal Tag */}
            <div className="absolute top-5 lg:top-auto lg:bottom-5 left-0 z-10 inline-flex items-center gap-2 px-4 py-2 text-fontsize-caption font-semibold text-color-text-white rounded-r-full backdrop-blur-lg border border-amber-400/30 bg-gradient-to-r from-amber-500/15 to-orange-500/15 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105">
              <Grid className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="whitespace-nowrap">Gallery</span>
            </div>
            {/* Top marquee */}
            <div className="relative w-full overflow-hidden">
              <div className="marquee marquee-left">
                {[...images, ...images].map((src, index) => (
                  <img
                    key={`top-${index}`}
                    src={src}
                    className="h-56 w-full object-cover aspect-video"
                    alt=""
                  />
                ))}
              </div>
            </div>

            {/* Bottom marquee */}
            <div className="relative w-full overflow-hidden">
              <div className="marquee marquee-right">
                {[...images, ...images].map((src, index) => (
                  <img
                    key={`bottom-${index}`}
                    src={src}
                    className="h-56 w-auto object-cover"
                    alt=""
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 flex flex-col justify-center items-center">
            <div className="space-y-6 lg:space-y-8">
              <SectionTag variant="accent" label="Our Story" />
              <h2 className="text-fontsize-h1 font-fontweight-medium text-color-text-primary leading-lineheight-heading">
                Your Global Education
                <span className="text-color-text-accent ml-2">Partner</span>
              </h2>

              <div className="space-y-4 lg:space-y-6">
                <p className="text-fontsize-body text-color-text-primary leading-lineheight-body">
                  Explore over{" "}
                  <strong className="font-fontweight-semibold">
                    200 top-tier universities
                  </strong>{" "}
                  across 31 countries worldwide. The world is your campus,
                  offering limitless choices and boundless opportunities for
                  your academic journey.
                </p>

                <p className="text-fontsize-body text-color-text-primary leading-lineheight-body">
                  We at{" "}
                  <strong className="font-fontweight-semibold">AV Edu</strong>{" "}
                  AV Edu provide student services by connecting institutions to
                  students across the globe and to transform individuals by
                  inspiring and fostering excellence and enabling them to
                  utilize their full potential thus creating global leaders.
                </p>

                <p className="text-fontsize-body text-color-text-primary leading-lineheight-body">
                  We strive to be a one stop solution from Counselling to
                  Standardized Test Prep, Application to Admission, Overseas
                  Education Loan Assistance to{" "}
                  <strong className="font-fontweight-semibold">
                    Visa Processing
                  </strong>{" "}
                  Visa Processing and all other associated allied services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

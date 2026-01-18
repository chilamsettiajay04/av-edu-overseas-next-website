import SectionTag from "../components/SectionTag";

export const About = () => {
  return (
    <section className="flex flex-col min-h-fit w-full px-mobile lg:px-main  py-16 items-center justify-center relative overflow-hidden bg-color-surface-muted">
      <div className="max-w-content mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Image Grid */}
          <div className=" h-full">
            <img
              src="/About/collage.png"
              alt="collage.png"
              className="w-auto h-full"
            />
          </div>
          {/* Text Content */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <div className="space-y-6 lg:space-y-8">
              <SectionTag variant="accent" label="Our Story" />
              <h2 className="text-fontsize-h1 font-fontweight-bold text-color-text-primary leading-lineheight-heading">
                Your Global Education
                <span className="block text-color-text-accent mt-2">
                  Partner
                </span>
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
                  At{" "}
                  <strong className="font-fontweight-semibold">AV Edu</strong>,
                  we connect institutions with students globally — from
                  counselling and test preparation to admissions, education
                  loans, visa processing, and all allied services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

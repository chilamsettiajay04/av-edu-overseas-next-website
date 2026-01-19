import SectionTag from "../components/SectionTag";

const About = () => {
  return (
    <section
      className="flex flex-col min-h-fit w-full px-mobile lg:px-main  py-16 items-center justify-center relative overflow-hidden bg-color-surface-muted"
      id="about"
    >
      <div className="max-w-content mx-auto w-full">
        {/* <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch"> */}
          {/* Image Grid */}
          {/* <div className="grid grid-cols-6 gap-2 lg:gap-4">
            <img
              src="./About/img1.jpg"
              className="w-full h-full object-cover col-span-2 row-span-2 rounded-xl"
            />
            <img
              src="./About/img2.jpg"
              className="w-full h-full object-cover col-span-2 rounded-xl"
            />
            <div className="flex flex-col gap-2 lg:gap-4">
              <img
                src="./About/img3.jpg"
                className="w-full h-full object-cover rounded-xl"
              />
              <img
                src="./About/img3.jpg"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <img
              src="./About/img4.jpg"
              className="w-full h-full object-cover row-span-2 rounded-xl"
            />
            <div className="flex flex-col gap-2 lg:gap-4">
              <img
                src="./About/img5.jpg"
                className="w-full h-full object-cover rounded-xl"
              />
              <img
                src="./About/img5.jpg"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <img
              src="./About/img6.jpg"
              className="w-full h-full object-cover col-span-2 rounded-xl"
            />
          </div> */}

          {/* Text Content */}
          <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
            <div className="space-y-6 lg:space-y-8">
              <SectionTag variant="accent" label="Our Story" />
              <h2 className="text-fontsize-h1 font-fontweight-medium text-color-text-primary leading-lineheight-heading">
                Your Global Education
                <span className="text-color-text-accent ml-1">Partner</span>
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
        {/* </div> */}
      </div>
    </section>
  );
};

export default About;

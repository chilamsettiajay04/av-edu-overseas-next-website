import SectionTag from "../components/SectionTag";
import {
  MessageSquare,
  FileCheck,
  GraduationCap,
  Plane,
} from "lucide-react";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Free Consultation",
      description:
        "Schedule a personalized consultation to discuss your academic goals, preferred destinations, and program options.",
      icon: <MessageSquare className="w-6 h-6" />,
    },
    {
      number: "02",
      title: "Application Support",
      description:
        "Get expert assistance with university selection, document preparation, SOP/LOR writing, and application submission.",
      icon: <FileCheck className="w-6 h-6" />,
    },
    {
      number: "03",
      title: "Admission & Visa",
      description:
        "Receive offer letters from top universities. We handle visa documentation, interview preparation, and submission.",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      number: "04",
      title: "Pre-Departure",
      description:
        "Complete pre-departure briefing, accommodation assistance, travel arrangements, and on-ground support abroad.",
      icon: <Plane className="w-6 h-6" />,
    },
  ];

  return (
    <section className="flex flex-col min-h-fit w-full px-mobile lg:px-main py-16 items-center justify-center relative overflow-hidden bg-color-surface">
      <div className="max-w-content mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-14 space-y-4">
          <div className="flex justify-center">
            <SectionTag variant="accent" label="How It Works" />
          </div>
          <h2
            className="text-fontsize-h1 font-fontweight-bold text-color-text-primary leading-lineheight-heading"
            data-testid="process-heading"
          >
            Your Journey to
            <span className="block text-color-text-accent mt-2">
              Study Abroad Success
            </span>
          </h2>
          <p
            className="text-fontsize-body text-color-text-muted leading-lineheight-body max-w-2xl mx-auto"
            data-testid="process-description"
          >
            We guide you through every step of your international education
            journey with personalized support and expert advice.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Steps Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10"
            data-testid="process-steps"
          >
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-start"
                data-testid={`process-step-${index}`}
              >
                {/* Icon Circle */}
                <div
                  className="
                    w-16 h-16 lg:w-20 lg:h-20
                    rounded-tl-2xl rounded-br-2xl
                    bg-color-accent
                    text-color-text-white
                    flex items-center justify-center
                    mb-4
                    shadow-shadow-md
                    transition-transform duration-300
                    hover:scale-110
                  "
                  data-testid={`step-icon-${index}`}
                >
                  {step.icon}
                </div>

                {/* Step Number */}
                <div
                  className="text-fontsize-caption font-fontweight-bold text-color-text-accent mb-2"
                  data-testid={`step-number-${index}`}
                >
                  STEP {step.number}
                </div>

                {/* Step Title */}
                <h3
                  className="text-fontsize-h3 font-fontweight-bold text-color-text-primary mb-3 leading-lineheight-heading"
                  data-testid={`step-title-${index}`}
                >
                  {step.title}
                </h3>

                {/* Step Description */}
                <p
                  className="text-fontsize-small text-color-text-muted leading-lineheight-body"
                  data-testid={`step-description-${index}`}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 lg:mt-16 text-center" data-testid="process-cta">
          <p className="text-fontsize-body text-color-text-muted mb-4">
            Ready to take the first step?
          </p>
          <button
            className="
              inline-flex items-center justify-center
              px-6 py-3
              bg-color-accent text-color-text-white
              text-fontsize-body font-fontweight-medium
              rounded-tl-2xl rounded-br-2xl
              hover:bg-color-accent-hover
              transition-all duration-200
              hover:scale-105
              shadow-shadow-sm
            "
            data-testid="start-journey-btn"
          >
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
}

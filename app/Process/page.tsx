import SectionTag from "../components/SectionTag";
import ProcessStepCard from "../components/ProcessStepCard";
import { MessageSquare, FileCheck, GraduationCap, Plane } from "lucide-react";

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
        {/* Header */}
        <div className="mb-10 lg:mb-14 space-y-4">
          <div className="flex">
            <SectionTag variant="accent" label="How It Works" />
          </div>

          <h2 className="text-fontsize-h1 font-fontweight-medium text-color-text-primary leading-lineheight-heading">
            Your journey to
            <span className="text-color-text-accent ml-1">
              Study Abroad Success
            </span>
          </h2>

          <p className="text-fontsize-body text-color-text-muted leading-lineheight-body">
            We guide you through every step of your international education
            journey with personalized support and expert advice.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <ProcessStepCard
              key={index}
              index={index}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

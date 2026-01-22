// Process.tsx
import SectionTag from "../components/SectionTag";
import ProcessStepCard from "../components/ProcessStepCard";
import { MessageSquare, FileCheck, GraduationCap, Plane } from "lucide-react";
import { siteContent } from "../constants/siteContent";

export default function Process() {
  const icons = [
    MessageSquare,
    FileCheck,
    GraduationCap,
    Plane,
  ];

  const steps = siteContent.process.steps.map((step, index) => {
    const Icon = icons[index];
    return {
      ...step,
      icon: <Icon className="w-6 h-6" />,
    };
  });

  return (
    <section
      className="flex flex-col min-h-fit w-full px-mobile lg:px-main py-16 items-center justify-center relative overflow-hidden bg-color-surface-muted"
      id="process"
    >
      <div className="max-w-content mx-auto w-full">
        {/* Header */}
        <div className="mb-8 lg:mb-10 space-y-4">
          <div className="flex">
            <SectionTag variant="accent" label={siteContent.process.sectionTag} />
          </div>

          <h2 className="text-fontsize-h1 font-fontweight-medium text-color-text-primary leading-lineheight-heading">
            {siteContent.process.heading.text}
            <span className="text-color-text-accent ml-2">{siteContent.process.heading.highlight}</span>
          </h2>

          <p className="text-fontsize-body text-color-text-muted leading-lineheight-body">
            {siteContent.process.description}
          </p>
        </div>

        {/* Steps Container with Connector */}
        <div className="relative">
          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-20">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <ProcessStepCard
                  index={index}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                  totalSteps={steps.length}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
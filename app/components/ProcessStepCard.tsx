import { ReactNode } from "react";

interface ProcessStepCardProps {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
  index?: number;
}

import { siteContent } from "../constants/siteContent";

export default function ProcessStepCard({
  number,
  title,
  description,
  icon,
  index,
}: ProcessStepCardProps) {
  return (
    <div
      className="flex flex-col items-start"
      data-testid={index !== undefined ? `process-step-${index}` : undefined}
    >
      {/* Icon */}
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
        data-testid={index !== undefined ? `step-icon-${index}` : undefined}
      >
        {icon}
      </div>

      {/* Step Number */}
      <div
        className="text-fontsize-caption font-fontweight-bold text-color-text-accent mb-2"
        data-testid={index !== undefined ? `step-number-${index}` : undefined}
      >
        {siteContent.process.stepLabel} {number}
      </div>

      {/* Title */}
      <h3
        className="text-fontsize-h3 font-fontweight-bold text-color-text-primary mb-3 leading-lineheight-heading"
        data-testid={index !== undefined ? `step-title-${index}` : undefined}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-fontsize-small text-color-text-muted leading-lineheight-body"
        data-testid={
          index !== undefined ? `step-description-${index}` : undefined
        }
      >
        {description}
      </p>
    </div>
  );
}

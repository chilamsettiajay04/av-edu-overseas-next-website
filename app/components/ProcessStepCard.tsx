// ProcessStepCard.tsx - Updated with proper line handling for first and last cards
import { ReactNode } from "react";

interface ProcessStepCardProps {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
  index?: number;
  totalSteps?: number; // Add totalSteps prop to know when we're at the last card
}

import { siteContent } from "../constants/siteContent";

export default function ProcessStepCard({
  number,
  title,
  description,
  icon,
  index,
  totalSteps,
}: ProcessStepCardProps) {
  // Determine if this is the first or last card
  const isFirstCard = index === 0;
  const isLastCard = totalSteps !== undefined && index === totalSteps - 1;

  return (
    <div
      className="flex flex-col items-start relative group"
      data-testid={index !== undefined ? `process-step-${index}` : undefined}
    >
      {/* Connecting line - Different styles for first, last, and middle cards */}
      <div
        className={`
          absolute hidden lg:block top-8 h-0.5 bg-color-accent 
          group-hover:bg-color-accent transition-all duration-500
          ${isFirstCard ? '-left-0 -right-4' : ''}
          ${!isFirstCard && !isLastCard ? '-left-4 -right-4' : ''}
          ${isLastCard ? '-left-4 -right-0' : ''}
        `}
      />

      <div
        className={`
          w-16 h-16 lg:w-20 lg:h-20
          rounded-tl-2xl rounded-br-2xl
          bg-color-accent
          text-color-text-white
          flex items-center justify-center
          mb-4
          shadow-shadow-md
          relative
          z-20
          transition-all duration-500
          group-hover:scale-110
          group-hover:shadow-shadow-lg
          group-hover:rotate-3
        `}
        data-testid={index !== undefined ? `step-icon-${index}` : undefined}
      >
        {icon}
      </div>

      {/* Step Number */}
      <div
        className="text-fontsize-caption font-fontweight-bold text-color-text-accent mb-2 group-hover:translate-x-1 transition-transform duration-300"
        data-testid={index !== undefined ? `step-number-${index}` : undefined}
      >
        {siteContent.process.stepLabel} {number}
      </div>

      {/* Title */}
      <h3
        className="text-fontsize-h3 font-fontweight-bold text-color-text-primary mb-3 leading-lineheight-heading group-hover:text-color-accent transition-colors duration-300"
        data-testid={index !== undefined ? `step-title-${index}` : undefined}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-fontsize-body text-color-text-muted leading-lineheight-body group-hover:text-color-text-primary transition-colors duration-300"
        data-testid={
          index !== undefined ? `step-description-${index}` : undefined
        }
      >
        {description}
      </p>
    </div>
  );
}
"use client";

import { Target, Heart, Star, Globe } from "lucide-react";
import SectionTag from "./SectionTag";
import ScrollAnimation from "./ScrollAnimation";
import { siteContent } from "../constants/siteContent";

interface ValueItem {
  icon: string;
  label: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  target: Target,
  heart: Heart,
  star: Star,
  globe: Globe,
};

const MissionVision = () => {
  const { missionVision } = siteContent.about;

  return (
    <section
      className="flex flex-col min-h-fit w-full px-mobile lg:px-main py-16 items-center justify-center relative overflow-hidden bg-color-background"
      id="mission"
    >
      <div className="max-w-content mx-auto w-full">
        <ScrollAnimation variant="fadeUp" className="mb-8 lg:mb-10 space-y-4">
          <div className="flex">
            <SectionTag variant="accent" label={missionVision.sectionTag} />
          </div>

          <h2 className="text-fontsize-h1 font-fontweight-medium text-color-text-primary leading-lineheight-heading">
            {missionVision.mission.heading}
            <span className="text-color-text-accent ml-2">&{' '}</span>
            {missionVision.vision.heading}
          </h2>

          <p className="text-fontsize-body text-color-text-muted leading-lineheight-body">
            {missionVision.mission.content} {' '}
            {missionVision.vision.content}
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {missionVision.values.map((value: ValueItem, index: number) => {
            const Icon = iconMap[value.icon] || Star;
            return (
              <ScrollAnimation
                key={index}
                variant="fadeUp"
                delay={0.1 + index * 0.1}
              >
                <div className="rounded-tl-3xl rounded-br-3xl p-6 lg:p-8 text-center border border-color-border shadow-sm hover:shadow-md hover:border-color-accent/30 transition-all duration-300 ease-out group h-full flex flex-col">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-color-accent/10 text-color-accent mb-4 group-hover:bg-color-accent group-hover:text-white transition-all duration-300 ease-out">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-fontsize-body font-fontweight-semibold text-color-text-primary">
                    {value.label}
                  </h3>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

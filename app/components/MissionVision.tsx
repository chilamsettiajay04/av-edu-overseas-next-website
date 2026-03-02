"use client";

import { Target, Heart, Star, Globe, Check } from "lucide-react";
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
      className="flex flex-col min-h-fit w-full px-mobile lg:px-main py-16 lg:py-24 items-center justify-center relative overflow-hidden bg-color-surface-muted"
      id="mission"
    >
      <div className="max-w-content mx-auto w-full">
        <ScrollAnimation variant="fadeUp" className="text-center mb-12 lg:mb-16">
          <SectionTag variant="accent" label={missionVision.sectionTag} />
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
          <ScrollAnimation variant="fadeUp" delay={0.1}>
            <div className="bg-color-background rounded-2xl p-8 lg:p-10 border border-color-border shadow-sm">
              <h3 className="text-fontsize-h2 font-fontweight-semibold text-color-accent mb-4">
                {missionVision.mission.heading}
              </h3>
              <p className="text-fontsize-body text-color-text-muted leading-lineheight-body">
                {missionVision.mission.content}
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation variant="fadeUp" delay={0.2}>
            <div className="bg-color-background rounded-2xl p-8 lg:p-10 border border-color-border shadow-sm">
              <h3 className="text-fontsize-h2 font-fontweight-semibold text-color-accent mb-4">
                {missionVision.vision.heading}
              </h3>
              <p className="text-fontsize-body text-color-text-muted leading-lineheight-body">
                {missionVision.vision.content}
              </p>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation variant="fadeUp" delay={0.3} className="text-center mb-10">
          <h4 className="text-fontsize-subheading font-fontweight-medium text-color-text-primary">
            What Drives Us
          </h4>
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
                <div className="bg-color-background rounded-2xl p-6 lg:p-8 text-center border border-color-border shadow-sm hover:shadow-md hover:border-color-accent/30 transition-all duration-300 group">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-color-accent/10 text-color-accent mb-4 group-hover:bg-color-accent group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
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

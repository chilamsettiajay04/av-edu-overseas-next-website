"use client";
import SectionTag from "../components/SectionTag";
import StatCard from "../components/StatCard";
import ServiceCard from "../components/ServiceCard";
import {
  Globe,
  Plane,
  Building,
  Trophy,
  Clock,
  GraduationCap,
  Briefcase,
  Home,
  Compass,
} from "lucide-react";
import { siteContent } from "../constants/siteContent";

export default function Services() {
  const iconMap = [
    GraduationCap,
    Plane,
    Globe,
    Home,
    Compass,
    Briefcase,
  ];

  const services = siteContent.services.list.map((service, index) => {
    const Icon = iconMap[index];
    return {
      ...service,
      icon: <Icon className="w-5 h-5" />,
    };
  });

  return (
    <section className="flex flex-col min-h-fit w-full px-mobile lg:px-main py-16 items-center justify-center relative overflow-hidden bg-color-background" id="services">
      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8 lg:mb-10">
        {/* Text Content */}
        <div className="space-y-6 lg:space-y-8">
          <SectionTag variant="accent" label={siteContent.services.sectionTag} />
          <h2 className="text-fontsize-h1 font-fontweight-medium text-color-text-primary leading-lineheight-heading">
            {siteContent.services.heading.text}
            <span className="text-color-text-accent ml-2">{siteContent.services.heading.highlight}</span>
          </h2>

          <div className="space-y-4 lg:space-y-6">
            {siteContent.services.intro.map((paragraph, index) => (
              <p key={index} className="text-fontsize-body text-color-text-primary leading-lineheight-body">
                {paragraph.text}
                <strong className="font-fontweight-semibold">
                  {paragraph.highlight}
                </strong>
                {paragraph.suffix}
              </p>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 lg:gap-6">
          <StatCard
            value={siteContent.services.stats[0].value}
            label={siteContent.services.stats[0].label}
            icon={<Globe className="w-16 h-16 lg:w-20 lg:h-20" />}
          />
          <StatCard
            value={siteContent.services.stats[1].value}
            label={siteContent.services.stats[1].label}
            icon={<Trophy className="w-16 h-16 lg:w-20 lg:h-20" />}
          />
          <StatCard
            value={siteContent.services.stats[2].value}
            label={siteContent.services.stats[2].label}
            icon={<Building className="w-16 h-16 lg:w-20 lg:h-20" />}
          />
          <StatCard
            value={siteContent.services.stats[3].value}
            label={siteContent.services.stats[3].label}
            icon={<Clock className="w-16 h-16 lg:w-20 lg:h-20" />}
          />
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="w-full mt-8 lg:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div key={index}>
              {/* If you want to use ServiceCard component, you'll need to update it to accept the new props */}
              <ServiceCard
                title={service.title}
                description={service.strongText}
                icon={service.icon}
                highlighted
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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

export default function Services() {
  const services = [
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Student Visa",
      description: "Bachelors, Masters, MBBS, PhD",
      strongText:
        "Our overseas services assist with student visa applications, ensuring a smooth process from documentation to approval, so you can focus on your education abroad. Expert guidance every step of the way.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Plane className="w-5 h-5" />,
      title: "Air Ticket Booking",
      description: "International flight booking",
      strongText:
        "Book your international flights with us for unbeatable prices, 24/7 customer support, and seamless booking experience. Explore the world hassle-free with our reliable overseas air ticket services.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Visiting Visa",
      description: "Hassle-free travel visas",
      strongText:
        "Our overseas visiting visa service ensures a smooth and hassle-free experience for travelers. We handle all visa requirements, offering expert guidance and support for a successful application process.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: <Home className="w-5 h-5" />,
      title: "PR Services",
      description: "Permanent residence guidance",
      strongText:
        "Expand your global reach with our premium overseas services. We provide seamless international solutions, ensuring your business thrives in new markets. Trust us for efficiency, expertise, and exceptional support.",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
    {
      icon: <Compass className="w-5 h-5" />,
      title: "Travel & Tourism",
      description: "Pan India & International",
      strongText:
        "Explore India with our bespoke travel and tourism services. From majestic landscapes to vibrant cultures, we offer personalized experiences that capture the essence of this incredible country. Your adventure awaits!",
      color: "text-rose-600",
      bgColor: "bg-rose-50",
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Immigration",
      description: "Overseas relocation assistance",
      strongText:
        "Expert immigration services for overseas relocation, offering personalized assistance with visas, documentation, and legal requirements to ensure a smooth and hassle-free transition to your new country.",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
  ];

  return (
    <section className="flex flex-col min-h-fit w-full px-mobile lg:px-main py-16 items-center justify-center relative overflow-hidden bg-color-surface" id="services">
      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8 lg:mb-10">
        {/* Text Content */}
        <div className="space-y-6 lg:space-y-8">
          <SectionTag variant="accent" label="Our Services" />
          <h2 className="text-fontsize-h1 font-fontweight-medium text-color-text-primary leading-lineheight-heading">
            Your Trusted Partner for
            <span className="text-color-text-accent ml-1">Overseas</span>
          </h2>

          <div className="space-y-4 lg:space-y-6">
            <p className="text-fontsize-body text-color-text-primary leading-lineheight-body">
              We specialize in comprehensive overseas solutions with{" "}
              <strong className="font-fontweight-semibold">
                personalized guidance
              </strong>{" "}
              for every step of your international journey. From student visas
              to permanent residence.
            </p>

            <p className="text-fontsize-body text-color-text-primary leading-lineheight-body">
              With{" "}
              <strong className="font-fontweight-semibold">
                98% success rate
              </strong>
              , we've helped thousands achieve their dreams of studying,
              working, and living abroad with confidence.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 lg:gap-6">
          <StatCard
            value="6+"
            label="Services"
            icon={<Globe className="w-16 h-16 lg:w-20 lg:h-20" />}
          />
          <StatCard
            value="98%"
            label="Success Rate"
            icon={<Trophy className="w-16 h-16 lg:w-20 lg:h-20" />}
          />
          <StatCard
            value="50+"
            label="Countries"
            icon={<Building className="w-16 h-16 lg:w-20 lg:h-20" />}
          />
          <StatCard
            value="24/7"
            label="Support"
            icon={<Clock className="w-16 h-16 lg:w-20 lg:h-20" />}
          />
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="w-full">
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

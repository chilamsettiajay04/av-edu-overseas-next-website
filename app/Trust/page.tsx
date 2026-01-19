import SectionTag from "../components/SectionTag";
import TestimonialCard from "../components/TestimonialCard";

export default function Trust() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      university: "University of Toronto",
      country: "Canada",
      rating: 5,
      content:
        "The guidance and support were exceptional. My visa process was smooth and stress-free.",
    },
    {
      name: "Ananya Reddy",
      university: "University of Melbourne",
      country: "Australia",
      rating: 5,
      content:
        "They helped me choose the right university and handled everything professionally.",
    },
    {
      name: "Mohammed Faisal",
      university: "University of Leeds",
      country: "UK",
      rating: 5,
      content:
        "Highly trustworthy consultancy. Clear communication and honest advice.",
    },
  ];

  return (
    <section className="flex flex-col min-h-fit w-full px-mobile lg:px-main py-16 items-center justify-center relative overflow-hidden bg-color-background">
      <div className="max-w-content mx-auto w-full">
        {/* Section Header */}
        <div className="mb-10 lg:mb-12 space-y-4">
          <div className="flex">
            <SectionTag variant="accent" label="Success Stories" />
          </div>

          <h2 className="text-fontsize-h1 font-fontweight-medium text-color-text-primary leading-lineheight-heading">
            Trusted by Students
            <span className="text-color-text-accent ml-1">Worldwide</span>
          </h2>

          <p className="text-fontsize-body text-color-text-muted leading-lineheight-body max-w-2xl">
            Join hundreds of successful students who achieved their dreams of
            studying abroad with our guidance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              university={testimonial.university}
              country={testimonial.country}
              rating={testimonial.rating}
              content={testimonial.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import SectionTag from "../components/SectionTag";
import { Quote, Star } from "lucide-react";

export default function Trust() {
  const testimonials = [
    {
      name: "[Student Name]",
      university: "[University Name]",
      country: "[Country]",
      rating: 5,
    },
    {
      name: "[Student Name]",
      university: "[University Name]",
      country: "[Country]",
      rating: 5,
    },
    {
      name: "[Student Name]",
      university: "[University Name]",
      country: "[Country]",
      rating: 5,
    },
  ];

  return (
    <section className="flex flex-col min-h-fit w-full px-mobile lg:px-main py-16 items-center justify-center relative overflow-hidden bg-color-background">
      <div className="max-w-content mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-12 space-y-4">
          <div className="flex justify-center">
            <SectionTag variant="accent" label="Success Stories" />
          </div>
          <h2
            className="text-fontsize-h1 font-fontweight-bold text-color-text-primary leading-lineheight-heading"
            data-testid="trust-heading"
          >
            Trusted by Students
            <span className="block text-color-text-accent mt-2">Worldwide</span>
          </h2>
          <p
            className="text-fontsize-body text-color-text-muted leading-lineheight-body max-w-2xl mx-auto"
            data-testid="trust-description"
          >
            Join hundreds of successful students who achieved their dreams of
            studying abroad with our guidance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-testid="testimonials-grid"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="
                bg-color-surface-muted
                border border-color-border
                rounded-tl-3xl rounded-br-3xl
                p-6 lg:p-8
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-lg
                flex flex-col
              "
              data-testid={`testimonial-card-${index}`}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-color-accent opacity-50" />
              </div>

              {/* Testimonial Text Placeholder */}
              <p
                className="text-fontsize-body text-color-text-muted leading-lineheight-body mb-6 flex-grow"
                data-testid={`testimonial-text-${index}`}
              >
                [Testimonial content will be displayed here. Student feedback
                about their experience with the consultancy service.]
              </p>

              {/* Student Info */}
              <div className="border-t border-color-border pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className="text-fontsize-body font-fontweight-medium text-color-text-primary"
                      data-testid={`student-name-${index}`}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      className="text-fontsize-small text-color-text-muted"
                      data-testid={`student-university-${index}`}
                    >
                      {testimonial.university}
                    </p>
                    <p
                      className="text-fontsize-caption text-color-text-subtle"
                      data-testid={`student-country-${index}`}
                    >
                      {testimonial.country}
                    </p>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-1" data-testid={`rating-${index}`}>
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-color-accent text-color-accent"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Metrics */}
        <div
          className="mt-12 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
          data-testid="trust-metrics"
        >
          <div
            className="text-center p-6 bg-color-surface-muted rounded-tl-2xl rounded-br-2xl border border-color-border"
            data-testid="metric-students"
          >
            <div className="text-fontsize-h1 font-fontweight-bold text-color-text-accent">
              500+
            </div>
            <p className="text-fontsize-small text-color-text-muted mt-2">
              Students Placed
            </p>
          </div>
          <div
            className="text-center p-6 bg-color-surface-muted rounded-tl-2xl rounded-br-2xl border border-color-border"
            data-testid="metric-universities"
          >
            <div className="text-fontsize-h1 font-fontweight-bold text-color-text-accent">
              200+
            </div>
            <p className="text-fontsize-small text-color-text-muted mt-2">
              Partner Universities
            </p>
          </div>
          <div
            className="text-center p-6 bg-color-surface-muted rounded-tl-2xl rounded-br-2xl border border-color-border"
            data-testid="metric-countries"
          >
            <div className="text-fontsize-h1 font-fontweight-bold text-color-text-accent">
              31
            </div>
            <p className="text-fontsize-small text-color-text-muted mt-2">
              Countries Covered
            </p>
          </div>
          <div
            className="text-center p-6 bg-color-surface-muted rounded-tl-2xl rounded-br-2xl border border-color-border"
            data-testid="metric-success"
          >
            <div className="text-fontsize-h1 font-fontweight-bold text-color-text-accent">
              98%
            </div>
            <p className="text-fontsize-small text-color-text-muted mt-2">
              Success Rate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Quote, Star } from "lucide-react";
interface TestimonialCardProps {
  name: string;
  university: string;
  country: string;
  rating: number;
  content?: string;
}

export default function TestimonialCard({
  name,
  university,
  country,
  rating,
  content,
}: TestimonialCardProps) {
  return (
    <div
      className="
        bg-color-surface-muted
        border border-color-border
        rounded-tl-3xl rounded-br-3xl
        p-6 lg:p-8
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-lg
        flex flex-col
      "
    >
      {/* Quote Icon */}
      <div className="mb-4">
        <Quote className="w-8 h-8 text-color-accent opacity-50" />
      </div>

      {/* Testimonial Text */}
      <p className="text-fontsize-body text-color-text-muted leading-lineheight-body mb-6 flex-grow">
        {content}
      </p>

      {/* Student Info */}
      <div className="border-t border-color-border pt-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-fontsize-body font-fontweight-medium text-color-text-primary">
              {name}
            </p>
            <p className="text-fontsize-small text-color-text-muted">
              {university}
            </p>
            <p className="text-fontsize-caption text-color-text-subtle">
              {country}
            </p>
          </div>

          {/* Rating */}
          <div className="flex gap-1">
            {Array.from({ length: rating }).map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-color-accent text-color-accent"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

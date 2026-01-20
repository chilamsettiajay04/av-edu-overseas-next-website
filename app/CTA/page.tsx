import Button from "../components/Button";
import { Calendar, CheckCircle, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="flex flex-col min-h-fit w-full px-mobile lg:px-main py-16 lg:py-20 items-center justify-center relative overflow-hidden bg-color-accent">
      <div className="max-w-content mx-auto w-full">
        <div className="flex flex-col items-start lg:items-center space-y-6 lg:space-y-8">
          {/* Heading */}
          <h2
            className="text-fontsize-h1 font-fontweight-bold text-color-text-white leading-lineheight-heading lg:text-center max-w-3xl"
            data-testid="cta-heading"
          >
            Ready to Begin Your
            <span className="block mt-2">Global Education Journey?</span>
          </h2>

          {/* Subtext */}
          <p
            className="text-fontsize-body text-color-text-white leading-lineheight-body lg:text-center max-w-2xl opacity-80"
            data-testid="cta-description"
          >
            Book a free consultation with our expert advisors and discover the
            best universities and programs tailored to your goals.
          </p>

          {/* Benefits List */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 w-full max-w-3xl mt-4">
            <div
              className="flex items-center gap-3 text-color-text-white"
              data-testid="benefit-consultation"
            >
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-fontsize-small lg:text-fontsize-body">
                Free 30-min consultation
              </span>
            </div>
            <div
              className="flex items-center gap-3 text-color-text-white"
              data-testid="benefit-guidance"
            >
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-fontsize-small lg:text-fontsize-body">
                Expert guidance
              </span>
            </div>
            <div
              className="flex items-center gap-3 text-color-text-white"
              data-testid="benefit-response"
            >
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-fontsize-small lg:text-fontsize-body">
                24-hour response time
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mt-6 w-full sm:w-auto"
            data-testid="cta-buttons"
          >
            <Button
              label="Book Free Consultation"
              variant="secondary"
              size="lg"
              className="bg-white text-black w-full sm:w-auto"
              data-testid="book-consultation-btn"
            />
            <Button
              label="Call Us Now"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto text-white hover:text-black"
              data-testid="call-now-btn"
            />
          </div>

          {/* Contact Info */}
          <div
            className="flex flex-col sm:flex-row items-start gap-4 text-color-text-white text-fontsize-small mt-4 opacity-80"
            data-testid="contact-info"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 000-0000</span>
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Available Mon-Sat, 9AM-6PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

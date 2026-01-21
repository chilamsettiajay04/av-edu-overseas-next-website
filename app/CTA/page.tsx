"use client";
import Button from "../components/Button";
import { Calendar, CheckCircle, Phone } from "lucide-react";
import openWhatsApp from "../utils/whatsapp";
import makePhoneCall from "../utils/mobile";
import { siteContent } from "../constants/siteContent";

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
            {siteContent.cta.heading.text}
            <span className="block mt-2">{siteContent.cta.heading.highlight}</span>
          </h2>

          {/* Subtext */}
          <p
            className="text-fontsize-body text-color-text-white leading-lineheight-body lg:text-center max-w-2xl opacity-80"
            data-testid="cta-description"
          >
            {siteContent.cta.subtext}
          </p>

          {/* Benefits List */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 w-full max-w-3xl mt-4 items-start justify-start lg:justify-center">
            {siteContent.cta.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-color-text-white"
                data-testid={`benefit-${index}`}
              >
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span className="text-fontsize-small lg:text-fontsize-body">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mt-6 w-full sm:w-auto"
            data-testid="cta-buttons"
          >
            <Button
              label={siteContent.cta.buttons.book}
              onClick={() => openWhatsApp()}
              variant="secondary"
              size="lg"
              className="bg-white text-black w-full sm:w-auto"
              data-testid="book-consultation-btn"
            />
            <Button
              label={siteContent.cta.buttons.call}
              onClick={() => makePhoneCall()}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto text-white hover:text-black"
              data-testid="call-now-btn"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

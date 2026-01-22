"use client";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { siteContent } from "../constants/siteContent";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-color-background-inverted text-color-text-white border-t border-color-border">
      {/* Main Footer Content */}
      <div className="max-w-content mx-auto px-mobile lg:px-main py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4" data-testid="footer-company">
            <img
              src={siteContent.footer.company.logo.src}
              alt={siteContent.footer.company.logo.alt}
              className="w-auto h-10 object-contain brightness-0 invert"
            />
            <p className="text-fontsize-small text-color-text-white opacity-80 leading-lineheight-body">
              {siteContent.footer.company.description}
            </p>
            {/* Social Media */}
            <div
              className="flex items-center gap-3 pt-2"
              data-testid="social-links"
            >
              <a
                href="#"
                className="w-9 h-9 rounded-tl-lg rounded-br-lg bg-white/10 hover:bg-color-accent transition-colors duration-200 flex items-center justify-center"
                aria-label={siteContent.footer.socials.facebook.label}
                data-testid="social-facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-tl-lg rounded-br-lg bg-white/10 hover:bg-color-accent transition-colors duration-200 flex items-center justify-center"
                aria-label={siteContent.footer.socials.twitter.label}
                data-testid="social-twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-tl-lg rounded-br-lg bg-white/10 hover:bg-color-accent transition-colors duration-200 flex items-center justify-center"
                aria-label={siteContent.footer.socials.linkedin.label}
                data-testid="social-linkedin"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-tl-lg rounded-br-lg bg-white/10 hover:bg-color-accent transition-colors duration-200 flex items-center justify-center"
                aria-label={siteContent.footer.socials.instagram.label}
                data-testid="social-instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
            {/* Quick Links */}
            <div
              className="space-y-4 min-w-fit"
              data-testid="footer-quick-links"
            >
              <h3 className="text-fontsize-h3 font-fontweight-bold text-color-text-white opacity-80">
                {siteContent.footer.quickLinks.title}
              </h3>
              <ul className="space-y-2">
                {siteContent.footer.quickLinks.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-fontsize-small text-color-text-white opacity-80 hover:text-color-accent transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4" data-testid="footer-contact">
              <h3 className="text-fontsize-h3 font-fontweight-bold text-color-text-white opacity-80">
                {siteContent.footer.contact.title}
              </h3>
              <ul className="space-y-3">
                <li
                  className="flex items-start gap-3"
                  data-testid="contact-address"
                >
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-color-accent" />
                  <span className="text-fontsize-small text-color-text-white opacity-80 leading-lineheight-small">
                    {siteContent.contact.address}
                  </span>
                </li>
                <li
                  className="flex items-center gap-3"
                  data-testid="contact-phone"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 text-color-accent" />
                  <a
                    href={`tel:${siteContent.contact.mobileNumber}`}
                    className="text-fontsize-small text-color-text-white opacity-80 hover:text-color-accent transition-colors duration-200"
                  >
                    {siteContent.contact.mobileNumber}
                  </a>
                </li>
                <li
                  className="flex items-center gap-3"
                  data-testid="contact-email"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 text-color-accent" />
                  <a
                    href={`mailto:${siteContent.contact.email}`}
                    className="text-fontsize-small text-color-text-white opacity-80 hover:text-color-accent transition-colors duration-200"
                  >
                    {siteContent.contact.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 text-fontsize-caption">
        <div className="max-w-content mx-auto px-mobile lg:px-main py-6">
          <div className="flex flex-col md:flex-row items-start justify-between gap-4 text-fontsize-small text-color-text-white opacity-60">
            <p data-testid="copyright">
              {siteContent.footer.bottomBar.copyright(currentYear)}
            </p>
            <div className="flex items-center gap-4" data-testid="legal-links">
              <a
                href={siteContent.footer.bottomBar.privacyPolicy.href}
                className="hover:text-color-accent transition-colors duration-200"
                data-testid="link-privacy"
              >
                {siteContent.footer.bottomBar.privacyPolicy.label}
              </a>
              <div className="h-4 w-px bg-white/30"></div>
              <a
                href={siteContent.footer.bottomBar.termsOfService.href}
                className="hover:text-color-accent transition-colors duration-200"
                data-testid="link-terms"
              >
                {siteContent.footer.bottomBar.termsOfService.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

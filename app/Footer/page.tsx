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
import { ADDRESS, EMAIL, MOBILE_NUMBER } from "../constants/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-color-background-inverted text-color-text-white border-t border-color-border">
      {/* Main Footer Content */}
      <div className="max-w-content mx-auto px-mobile lg:px-main py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-8 lg:gap-10">
          {/* Company Info */}
          <div className="space-y-4" data-testid="footer-company">
            <img
              src="./logo.png"
              alt="Company Logo"
              className="w-auto h-10 object-contain brightness-0 invert"
            />
            <p className="text-fontsize-small text-color-text-white/80 leading-lineheight-body">
              Your trusted partner for international education. Helping students
              achieve their dreams of studying abroad since 2022.
            </p>
            {/* Social Media */}
            <div
              className="flex items-center gap-3 pt-2"
              data-testid="social-links"
            >
              <a
                href="#"
                className="w-9 h-9 rounded-tl-lg rounded-br-lg bg-white/10 hover:bg-color-accent transition-colors duration-200 flex items-center justify-center"
                aria-label="Facebook"
                data-testid="social-facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-tl-lg rounded-br-lg bg-white/10 hover:bg-color-accent transition-colors duration-200 flex items-center justify-center"
                aria-label="Twitter"
                data-testid="social-twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-tl-lg rounded-br-lg bg-white/10 hover:bg-color-accent transition-colors duration-200 flex items-center justify-center"
                aria-label="LinkedIn"
                data-testid="social-linkedin"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-tl-lg rounded-br-lg bg-white/10 hover:bg-color-accent transition-colors duration-200 flex items-center justify-center"
                aria-label="Instagram"
                data-testid="social-instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 lg:gap-10">
            {/* Quick Links */}
            <div className="space-y-4 min-w-fit" data-testid="footer-quick-links">
              <h3 className="text-fontsize-h3 font-fontweight-bold text-color-text-white">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-fontsize-small text-color-text-white/80 hover:text-color-accent transition-colors duration-200"
                    data-testid="link-home"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-fontsize-small text-color-text-white/80 hover:text-color-accent transition-colors duration-200"
                    data-testid="link-about"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-fontsize-small text-color-text-white/80 hover:text-color-accent transition-colors duration-200"
                    data-testid="link-services"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-fontsize-small text-color-text-white/80 hover:text-color-accent transition-colors duration-200"
                    data-testid="link-testimonials"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4" data-testid="footer-contact">
              <h3 className="text-fontsize-h3 font-fontweight-bold text-color-text-white">
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li
                  className="flex items-start gap-3"
                  data-testid="contact-address"
                >
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-color-accent" />
                  <span className="text-fontsize-small text-color-text-white/80 leading-lineheight-small">
                    {ADDRESS}
                  </span>
                </li>
                <li
                  className="flex items-center gap-3"
                  data-testid="contact-phone"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 text-color-accent" />
                  <a
                    href="tel:+15550000000"
                    className="text-fontsize-small text-color-text-white/80 hover:text-color-accent transition-colors duration-200"
                  >
                    {MOBILE_NUMBER}
                  </a>
                </li>
                <li
                  className="flex items-center gap-3"
                  data-testid="contact-email"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 text-color-accent" />
                  <a
                    href="mailto:info@example.com"
                    className="text-fontsize-small text-color-text-white/80 hover:text-color-accent transition-colors duration-200"
                  >
                    {EMAIL}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-content mx-auto px-mobile lg:px-main py-6">
          <div className="flex flex-col md:flex-row items-start justify-between gap-4 text-fontsize-small text-color-text-white/60">
            <p data-testid="copyright">
              © {currentYear} AV Edu. All rights reserved.
            </p>
            <div className="flex items-center gap-6" data-testid="legal-links">
              <a
                href="#"
                className="hover:text-color-accent transition-colors duration-200"
                data-testid="link-privacy"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-color-accent transition-colors duration-200"
                data-testid="link-terms"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

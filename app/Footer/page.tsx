import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-color-background-inverted text-color-text-white border-t border-color-border">
      {/* Main Footer Content */}
      <div className="max-w-content mx-auto px-mobile lg:px-main py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Company Info */}
          <div className="space-y-4" data-testid="footer-company">
            <div className="w-32 h-10">
              <img
                src="./logo.png"
                alt="Company Logo"
                className="w-full h-full object-contain brightness-0 invert"
              />
            </div>
            <p className="text-fontsize-small text-color-text-white/80 leading-lineheight-body">
              Your trusted partner for international education. Helping students
              achieve their dreams of studying abroad since [Year].
            </p>
            {/* Social Media */}
            <div className="flex items-center gap-3 pt-2" data-testid="social-links">
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

          {/* Quick Links */}
          <div className="space-y-4" data-testid="footer-quick-links">
            <h3 className="text-fontsize-h3 font-fontweight-bold text-color-text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-fontsize-small text-color-text-white/80 hover:text-color-accent transition-colors duration-200"
                  data-testid="link-home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
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
                  href="#"
                  className="text-fontsize-small text-color-text-white/80 hover:text-color-accent transition-colors duration-200"
                  data-testid="link-testimonials"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-fontsize-small text-color-text-white/80 hover:text-color-accent transition-colors duration-200"
                  data-testid="link-contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4" data-testid="footer-services">
            <h3 className="text-fontsize-h3 font-fontweight-bold text-color-text-white">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-fontsize-small text-color-text-white/80 hover:text-color-accent transition-colors duration-200"
                  data-testid="service-student-visa"
                >
                  Student Visa
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-fontsize-small text-color-text-white/80 hover:text-color-accent transition-colors duration-200"
                  data-testid="service-visiting-visa"
                >
                  Visiting Visa
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-fontsize-small text-color-text-white/80 hover:text-color-accent transition-colors duration-200"
                  data-testid="service-pr"
                >
                  PR Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-fontsize-small text-color-text-white/80 hover:text-color-accent transition-colors duration-200"
                  data-testid="service-immigration"
                >
                  Immigration
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-fontsize-small text-color-text-white/80 hover:text-color-accent transition-colors duration-200"
                  data-testid="service-travel"
                >
                  Travel & Tourism
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
              <li className="flex items-start gap-3" data-testid="contact-address">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-color-accent" />
                <span className="text-fontsize-small text-color-text-white/80 leading-lineheight-small">
                  [Office Address]
                  <br />
                  [City, State, ZIP]
                </span>
              </li>
              <li className="flex items-center gap-3" data-testid="contact-phone">
                <Phone className="w-5 h-5 flex-shrink-0 text-color-accent" />
                <a
                  href="tel:+15550000000"
                  className="text-fontsize-small text-color-text-white/80 hover:text-color-accent transition-colors duration-200"
                >
                  +1 (555) 000-0000
                </a>
              </li>
              <li className="flex items-center gap-3" data-testid="contact-email">
                <Mail className="w-5 h-5 flex-shrink-0 text-color-accent" />
                <a
                  href="mailto:info@example.com"
                  className="text-fontsize-small text-color-text-white/80 hover:text-color-accent transition-colors duration-200"
                >
                  [Email Address]
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-content mx-auto px-mobile lg:px-main py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-fontsize-small text-color-text-white/60">
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
              <a
                href="#"
                className="hover:text-color-accent transition-colors duration-200"
                data-testid="link-cookies"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#49352B] text-[#F5EBDD] pt-16 pb-10 border-t border-[#6E5446]/40 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#6E5446]/50">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C64C2C] flex items-center justify-center text-white font-serif font-bold text-lg">
                A
              </div>
              <div>
                <span className="font-serif text-lg tracking-wider font-semibold text-white block">
                  ANAGHA
                </span>
                <span className="text-[10px] tracking-[0.22em] text-[#EADBC8] uppercase block">
                  BALANCED BITES
                </span>
              </div>
            </div>
            <p className="text-sm text-[#EADBC8]/80 leading-relaxed">
              Wholesome, nutritious, and delicious meal options designed for modern everyday energy and balance.
            </p>
            <p className="text-xs font-serif italic text-[#C64C2C] bg-[#FAF6F0]/10 px-3 py-1.5 rounded-full inline-block">
              Eat Well • Live Balanced
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-[#EADBC8]/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#EADBC8]/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/offerings" className="text-[#EADBC8]/80 hover:text-white transition-colors">
                  Explore Offerings
                </Link>
              </li>
              <li>
                <Link href="/subscriptions" className="text-[#EADBC8]/80 hover:text-white transition-colors">
                  Subscription Plans
                </Link>
              </li>
              <li>
                <Link href="/nutrition" className="text-[#EADBC8]/80 hover:text-white transition-colors">
                  Nutrition & Collaboration
                </Link>
              </li>
              <li>
                <Link href="/franchise" className="text-[#EADBC8]/80 hover:text-white transition-colors">
                  Franchise Opportunities
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[#EADBC8]/80 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us & Socials */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-4 tracking-wide">
              Follow Us
            </h4>
            <div className="flex items-center gap-3 mb-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#6E5446]/60 hover:bg-[#C64C2C] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#6E5446]/60 hover:bg-[#C64C2C] text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#6E5446]/60 hover:bg-[#C64C2C] text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
            <p className="text-xs text-[#EADBC8]/70 leading-relaxed mb-3">
              Join our community for weekly wellness tips, macro breakdowns, and new menu reveals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs text-[#F5EBDD] font-medium hover:text-[#C64C2C] transition-colors"
            >
              <span>Get in touch with our team</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-4 tracking-wide">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-[#EADBC8]/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C64C2C] shrink-0 mt-0.5" />
                <span>Flat 401, Balaji Nagar, Road Number 5, KLR Venture, Medchal, Telangana, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C64C2C] shrink-0" />
                <a href="tel:+916281422353" className="hover:text-white transition-colors">
                  +91 62814 22353
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C64C2C] shrink-0" />
                <a
                  href="mailto:rishisrivastav778@gmail.com"
                  className="hover:text-white transition-colors truncate"
                >
                  rishisrivastav778@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#EADBC8]/60 gap-4">
          <p>© 2026 Anagha Balanced Bites. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link href="/locations" className="hover:text-white transition-colors">
              Locations & Map
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

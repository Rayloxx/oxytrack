"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

const footerLinks = {
  Solutions: [
    { label: "Real-Time Monitoring", href: "#solutions" },
    { label: "Ward Analytics", href: "#solutions" },
    { label: "Leak Detection", href: "#solutions" },
    { label: "Automated Alerts", href: "#solutions" },
    { label: "Predictive Insights", href: "#solutions" },
    { label: "Cloud Dashboard", href: "#solutions" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Our Journey", href: "#about" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Industries", href: "#industries" },
    { label: "Contact", href: "#contact" },
  ],
  Resources: [
    { label: "Book a Demo", href: "#contact" },
    { label: "System Overview", href: "#solutions" },
    { label: "Case Studies", href: "#testimonials" },
    { label: "FAQ", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#040E1A] text-white relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Bar */}
        <div className="py-16 border-b border-white/8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center shadow-lg">
                  <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="3" fill="white" opacity="0.9" />
                    <path d="M10 2C10 2 4 5.5 4 10C4 13.3 6.7 16 10 16C13.3 16 16 13.3 16 10C16 5.5 10 2Z" stroke="white" strokeWidth="1.5" fill="none" opacity="0.7" />
                    <path d="M10 16V18M6 14L4.5 15.5M14 14L15.5 15.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-white text-lg leading-none">OxyTrack</div>
                  <div className="text-blue-400 text-xs font-medium">Technologies</div>
                </div>
              </div>

              <p className="text-white/50 text-sm leading-relaxed mb-2 max-w-xs">
                From Tank to Ward. Every Litre Accounted For.
              </p>
              <p className="text-white/35 text-sm leading-relaxed mb-8 max-w-xs">
                Empowering Kenyan hospitals with real-time intelligence for medical gas systems — so every breath is backed by data.
              </p>

              {/* Contact info */}
              <div className="space-y-3">
                <a href="mailto:info@oxytrack.co.ke" className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                    <Mail size={14} />
                  </div>
                  info@oxytrack.co.ke
                </a>
                <a href="tel:+254700000000" className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                    <Phone size={14} />
                  </div>
                  +254 700 000 000
                </a>
                <div className="flex items-center gap-3 text-white/50 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    <MapPin size={14} />
                  </div>
                  Nairobi, Kenya
                </div>
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-white font-semibold text-sm mb-5">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-white/45 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 group"
                      >
                        <span>{link.label}</span>
                        <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white/30 text-sm">
            © {new Date().getFullYear()} OxyTrack Technologies. All rights reserved. | Nairobi, Kenya
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-xl bg-white/5 hover:bg-blue-600/30 border border-white/8 hover:border-blue-500/40 flex items-center justify-center text-white/40 hover:text-white transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
              className="w-9 h-9 rounded-xl bg-white/5 hover:bg-blue-600/30 border border-white/8 hover:border-blue-500/40 flex items-center justify-center text-white/40 hover:text-white transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a
              href="mailto:info@oxytrack.co.ke"
              aria-label="Email"
              className="w-9 h-9 rounded-xl bg-white/5 hover:bg-blue-600/30 border border-white/8 hover:border-blue-500/40 flex items-center justify-center text-white/40 hover:text-white transition-all duration-200"
            >
              <Mail size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

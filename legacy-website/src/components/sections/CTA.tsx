"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/common/ScrollReveal";
import { Mail, Phone, MapPin, Send, CheckCircle, ChevronRight } from "lucide-react";

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    hospital: "",
    role: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* CTA Banner */}
      <section id="cta" className="py-24 bg-gradient-to-br from-[#081A2B] via-[#0D2540] to-[#081A2B] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/15 border border-blue-500/25 text-blue-300 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse-slow" />
              Ready to Transform Your Facility?
            </div>

            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-tight mb-6">
              Stop Guessing.{" "}
              <span className="text-gradient-hero">Start Managing Oxygen</span>{" "}
              with Data.
            </h2>

            <p className="text-white/55 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
              See how OxyTrack can help your facility gain complete visibility, reduce waste, and improve the reliability of your medical gas system.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                id="cta-book-demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-base rounded-xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                Book a Demo
                <ChevronRight size={18} />
              </a>
              <a
                href="mailto:info@oxytrack.co.ke"
                id="cta-contact-us"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/8 text-white font-semibold text-base rounded-xl border border-white/15 hover:bg-white/14 hover:border-white/30 transition-all duration-200"
              >
                Contact Us
                <Mail size={18} />
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 grid grid-cols-3 gap-6 pt-12 border-t border-white/8 max-w-lg mx-auto">
              {[
                { label: "No commitment required" },
                { label: "30-min demo session" },
                { label: "Kenya-based support" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-2">
                  <CheckCircle size={18} className="text-teal-400" />
                  <span className="text-white/45 text-xs text-center">{item.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="section-padding bg-[#F8FAFF] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                Get in Touch
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-[#081A2B] tracking-tight leading-tight mb-6">
                Let&apos;s Talk About{" "}
                <span className="text-gradient">Your Facility</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                Book a personalised demo and see exactly how OxyTrack can work within your specific hospital environment, infrastructure, and workflow.
              </p>

              <div className="space-y-5">
                {[
                  { icon: Mail, label: "Email Us", value: "info@oxytrack.co.ke", href: "mailto:info@oxytrack.co.ke" },
                  { icon: Phone, label: "Call Us", value: "+254 700 000 000", href: "tel:+254700000000" },
                  { icon: MapPin, label: "Find Us", value: "Nairobi, Kenya", href: "#" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <a key={item.label} href={item.href} className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                        <Icon size={20} />
                      </div>
                      <div>
                        <div className="text-gray-400 text-xs font-medium">{item.label}</div>
                        <div className="text-[#081A2B] font-semibold">{item.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </ScrollReveal>

            {/* Right — Form */}
            <ScrollReveal delay={0.15}>
              <div className="bg-white rounded-3xl p-8 shadow-premium border border-gray-100">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={32} className="text-teal-500" />
                    </div>
                    <h3 className="text-[#081A2B] font-bold text-2xl mb-3">Request Received!</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Thank you for reaching out. Our team will be in touch within 24 hours to schedule your personalised demo.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Dr. Jane Wanjiku"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="jane@hospital.co.ke"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="contact-hospital" className="block text-sm font-semibold text-gray-700 mb-2">Hospital / Facility *</label>
                      <input
                        id="contact-hospital"
                        name="hospital"
                        type="text"
                        required
                        value={form.hospital}
                        onChange={handleChange}
                        placeholder="Kenyatta National Hospital"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-role" className="block text-sm font-semibold text-gray-700 mb-2">Your Role</label>
                      <select
                        id="contact-role"
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                      >
                        <option value="">Select your role</option>
                        <option>Hospital CEO / Director</option>
                        <option>Biomedical Engineer</option>
                        <option>Clinical Operations Manager</option>
                        <option>Procurement Officer</option>
                        <option>ICT / Systems Manager</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-700 mb-2">Message (Optional)</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your facility and oxygen management challenges..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      id="contact-submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-base rounded-xl shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 transition-all duration-200"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Book a Demo
                        </>
                      )}
                    </button>

                    <p className="text-center text-gray-400 text-xs">
                      No commitment required · We&apos;ll respond within 24 hours · Kenya-based team
                    </p>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

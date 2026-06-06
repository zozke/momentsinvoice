"use client";

import { Phone, Mail, MessageCircle } from "lucide-react";
import FadeIn from "./ui/FadeIn";
import SectionHeading from "./ui/SectionHeading";
import ContactForm from "./ContactForm";
import { contacts } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="kontakt" className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Kontakt"
          subtitle="Wir freuen uns auf eure Nachricht!"
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <FadeIn className="lg:col-span-3">
            <ContactForm />
          </FadeIn>

          {/* Contact Info */}
          <FadeIn className="lg:col-span-2" delay={0.15}>
            <div className="space-y-8">
              {/* Yvonne */}
              <div className="space-y-3">
                <h3 className="font-heading text-xl text-braun">
                  {contacts.yvonne.name}
                </h3>
                <p className="font-body text-sm text-rose font-medium tracking-wide uppercase">
                  {contacts.yvonne.role}
                </p>
                <div className="space-y-2">
                  <a
                    href={`https://wa.me/49${contacts.yvonne.whatsapp.slice(1)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 font-body text-sm text-text-light hover:text-braun transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-salbei" />
                    {contacts.yvonne.whatsappDisplay}
                  </a>
                  <a
                    href={`tel:+49${contacts.yvonne.phone.slice(1)}`}
                    className="flex items-center gap-3 font-body text-sm text-text-light hover:text-braun transition-colors"
                  >
                    <Phone className="w-4 h-4 text-salbei" />
                    {contacts.yvonne.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Kerstin */}
              <div className="space-y-3">
                <h3 className="font-heading text-xl text-braun">
                  {contacts.kerstin.name}
                </h3>
                <p className="font-body text-sm text-rose font-medium tracking-wide uppercase">
                  {contacts.kerstin.role}
                </p>
                <div className="space-y-2">
                  <a
                    href={`https://wa.me/49${contacts.kerstin.whatsapp.slice(1)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 font-body text-sm text-text-light hover:text-braun transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-salbei" />
                    {contacts.kerstin.whatsappDisplay}
                  </a>
                  <a
                    href={`tel:+49${contacts.kerstin.phone.slice(1)}`}
                    className="flex items-center gap-3 font-body text-sm text-text-light hover:text-braun transition-colors"
                  >
                    <Phone className="w-4 h-4 text-salbei" />
                    {contacts.kerstin.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="pt-4 border-t border-braun/10">
                <a
                  href={`mailto:${contacts.email}`}
                  className="flex items-center gap-3 font-body text-base text-braun hover:text-rose transition-colors"
                >
                  <Mail className="w-5 h-5 text-salbei" />
                  {contacts.email}
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

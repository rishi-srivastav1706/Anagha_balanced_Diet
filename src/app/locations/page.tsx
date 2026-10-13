import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { MapPin, Navigation, Clock, Phone, Mail, MessageCircle, ExternalLink } from "lucide-react";
import { initialSettings } from "@/lib/data/store";

export default function LocationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF6F0]">
      <Navbar />

      <main className="flex-1 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#C64C2C] font-semibold">
              OUR PRESENCE
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[#49352B]">
              Kitchen & Delivery Hub
            </h1>
            <p className="text-sm sm:text-base text-[#6E5446] leading-relaxed">
              Serving balanced wellness meals, freshly prepared bowls, and subscription deliveries across Hyderabad.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Location Details Card */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-[#E8DAC8] shadow-sm space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#C64C2C] font-semibold bg-[#C64C2C]/10 px-3 py-1 rounded-full">
                  Primary Kitchen & Hub
                </span>
                <h2 className="font-serif text-2xl font-medium text-[#49352B] mt-3">
                  Medchal Kitchen & Hub
                </h2>
                <p className="text-xs text-[#8D7466] mt-1">
                  Central culinary kitchen & subscription dispatch
                </p>
              </div>

              <div className="space-y-4 text-xs text-[#6E5446]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C64C2C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#49352B] block mb-0.5">Physical Address:</strong>
                    <span>{initialSettings.address}, {initialSettings.city}, {initialSettings.state}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#C64C2C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#49352B] block mb-0.5">Operational Hours:</strong>
                    <span>{initialSettings.hours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#C64C2C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#49352B] block mb-0.5">Phone Enquiries:</strong>
                    <a href={`tel:${initialSettings.phone}`} className="hover:text-[#C64C2C]">
                      {initialSettings.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#C64C2C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#49352B] block mb-0.5">Email Support:</strong>
                    <a href={`mailto:${initialSettings.email}`} className="hover:text-[#C64C2C]">
                      {initialSettings.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://maps.google.com/?q=Balaji+Nagar+Road+5+KLR+Venture+Medchal"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#C64C2C] hover:bg-[#AF3E20] text-white text-xs font-semibold transition-all shadow-sm"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`https://wa.me/916281422353?text=Hi%20Anagha%20Balanced%20Bites,%20I'm%20asking%20about%20your%20Medchal%20location`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-semibold transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="p-4 bg-[#FAF6F0] rounded-2xl border border-[#E8DAC8] text-[11px] text-[#8D7466] leading-relaxed">
                <strong>Delivery Radius: </strong>We deliver scheduled balanced meal subscriptions across Medchal, Kompally, Suchitra, Bowenpally, Secunderabad, and wider Hyderabad city hubs.
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-[#E8DAC8] shadow-sm h-[480px]">
              <iframe
                title="Anagha Balanced Bites Location"
                src={initialSettings.google_maps_embed_url}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

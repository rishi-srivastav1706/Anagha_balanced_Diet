import React from "react";
import Link from "next/link";
import { ShoppingBag, ArrowRight, Info } from "lucide-react";

export default function CustomerOrdersPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="pb-6 border-b border-[#E8DAC8]">
        <h1 className="font-serif text-3xl font-medium text-[#49352B]">
          Order History
        </h1>
        <p className="text-xs text-[#8D7466] mt-1">
          Review your past on-demand meal deliveries and receipts.
        </p>
      </div>

      <div className="bg-[#FAF4EC] p-4 rounded-2xl border border-[#E8DAC8] flex items-start gap-3 max-w-2xl">
        <Info className="w-5 h-5 text-[#C64C2C] shrink-0 mt-0.5" />
        <p className="text-xs text-[#6E5446] leading-relaxed">
          <strong className="text-[#49352B]">Direct Ordering Activation: </strong>
          Online on-demand payment checkout is currently configured for direct concierge delivery and scheduled subscriptions. To place custom one-off orders, please use our Offerings page enquiry form or WhatsApp concierge.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-12 border border-[#E8DAC8] text-center space-y-4 max-w-xl mx-auto shadow-xs">
        <div className="w-16 h-16 rounded-full bg-[#FAF6F0] text-[#8D7466] flex items-center justify-center mx-auto">
          <ShoppingBag className="w-8 h-8 text-[#C64C2C]" />
        </div>
        <h3 className="font-serif text-xl font-medium text-[#49352B]">
          No past orders found
        </h3>
        <p className="text-xs text-[#8D7466] leading-relaxed max-w-sm mx-auto">
          You don&apos;t have any completed on-demand orders yet. Check out our delicious fresh menu or explore recurring subscriptions.
        </p>
        <div className="pt-2">
          <Link
            href="/offerings"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#C64C2C] hover:bg-[#AF3E20] text-white text-xs font-semibold shadow-sm"
          >
            <span>Explore Offerings</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

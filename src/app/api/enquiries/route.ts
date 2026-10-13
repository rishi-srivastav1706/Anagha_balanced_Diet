import { NextRequest, NextResponse } from "next/server";
import { store } from "@/lib/data/store";

export async function GET() {
  return NextResponse.json({ enquiries: store.getEnquiries() });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, type, message } = body;

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Name, phone, and message are required." },
        { status: 400 }
      );
    }

    const newEnquiry = store.addEnquiry({
      name,
      email: email || "customer@example.com",
      phone,
      type: type || "General Enquiry",
      message,
    });

    return NextResponse.json({ success: true, enquiry: newEnquiry }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Failed to process enquiry." }, { status: 500 });
  }
}

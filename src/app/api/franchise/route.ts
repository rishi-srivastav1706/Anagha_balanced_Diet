import { NextRequest, NextResponse } from "next/server";
import { store } from "@/lib/data/store";

export async function GET() {
  return NextResponse.json({ applications: store.getFranchiseApplications() });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, city, state, investment_budget, experience, message } = body;

    if (!name || !email || !phone || !city) {
      return NextResponse.json(
        { error: "Name, email, phone, and city are required." },
        { status: 400 }
      );
    }

    const newApp = store.addFranchiseApplication({
      name,
      email,
      phone,
      city,
      state,
      investment_budget: investment_budget || "₹15 Lakhs - ₹25 Lakhs",
      experience,
      message: message || "Interested in franchise expansion",
    });

    return NextResponse.json({ success: true, application: newApp }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Failed to process application." }, { status: 500 });
  }
}

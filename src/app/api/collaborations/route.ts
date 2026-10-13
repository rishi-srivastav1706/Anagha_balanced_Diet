import { NextRequest, NextResponse } from "next/server";
import { store } from "@/lib/data/store";

export async function GET() {
  return NextResponse.json({ collaborations: store.getCollaborations() });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, profession, social_or_website, proposal } = body;

    if (!name || !email || !phone || !proposal) {
      return NextResponse.json(
        { error: "Name, email, phone, and proposal are required." },
        { status: 400 }
      );
    }

    const newCollab = store.addCollaboration({
      name,
      email,
      phone,
      profession: profession || "Nutritionist",
      social_or_website,
      proposal,
    });

    return NextResponse.json({ success: true, collaboration: newCollab }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Failed to process collaboration request." }, { status: 500 });
  }
}

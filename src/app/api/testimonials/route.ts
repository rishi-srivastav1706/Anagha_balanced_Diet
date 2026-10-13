import { NextRequest, NextResponse } from "next/server";
import { store } from "@/lib/data/store";

export async function GET() {
  // Publicly return only approved
  return NextResponse.json({
    testimonials: store.getTestimonials().filter((t) => t.is_approved),
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, role, review, rating } = body;

    if (!name || !review) {
      return NextResponse.json(
        { error: "Name and review are required." },
        { status: 400 }
      );
    }

    const newTestimonial = store.addTestimonial({
      name,
      role: role || "Customer",
      review,
      rating: Number(rating) || 5,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Submitted for moderation.",
        testimonial: newTestimonial,
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ error: "Failed to submit testimonial." }, { status: 500 });
  }
}

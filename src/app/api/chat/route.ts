import { NextRequest, NextResponse } from "next/server";
import { initialOfferings, initialSubscriptionPlans, initialFAQs, initialSettings } from "@/lib/data/store";

// Rate limiting in-memory map
const requestCounts = new Map<string, { count: number; expiresAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limitData = requestCounts.get(ip);

  if (!limitData || now > limitData.expiresAt) {
    requestCounts.set(ip, { count: 1, expiresAt: now + 60 * 1000 }); // 1 min window
    return true;
  }

  if (limitData.count >= 15) {
    return false;
  }

  limitData.count += 1;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "anonymous-client";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          reply:
            "You have sent several messages in a short time. Please wait a moment or connect with our support team directly via WhatsApp or email.",
        },
        { status: 429 }
      );
    }

    const { message } = await req.json();

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json({ error: "A message is required." }, { status: 400 });
    }

    const cleanMsg = message.trim().toLowerCase();

    // Medical advice guardrail per requirements
    const medicalKeywords = [
      "cure",
      "disease",
      "diagnose",
      "medicine",
      "cancer",
      "prescription",
      "blood pressure cure",
      "medical treatment",
    ];
    if (medicalKeywords.some((kw) => cleanMsg.includes(kw))) {
      return NextResponse.json({
        reply:
          "Anagha Balanced Bites offers wholesome, nutritious wellness meals, but we do not provide medical diagnoses or prescribe medical treatment diets. Please consult a qualified physician or registered medical doctor for medical concerns. For general meal plan questions, we're glad to help!",
      });
    }

    // Check if an external LLM key is configured (Gemini API)
    const geminiApiKey = process.env.GEMINI_API_KEY;

    if (geminiApiKey) {
      try {
        const systemPrompt = `You are the helpful, warm, and professional AI Assistant for "Anagha Balanced Bites" (a premium wellness food brand in Hyderabad, India).
Rules you must strictly follow:
1. Brand values: Clean, balanced, wholesome food, natural ingredients.
2. Tone: Warm, wellness-oriented, polite, concise.
3. You MUST NEVER invent prices, medical diagnoses, unverified addresses, or fake policies. Prices are configurable starting points. Always invite them to enquire or contact the team.
4. Business info:
- Brand Name: ${initialSettings.brand_name}
- Tagline: ${initialSettings.tagline}
- Phone: ${initialSettings.phone}
- Email: ${initialSettings.email}
- Address: ${initialSettings.address}, ${initialSettings.city}, ${initialSettings.state}
- Offerings available: ${initialOfferings.map((o) => `${o.title} (${o.category}) - ${o.description}`).join("; ")}
- Subscription plans: ${initialSubscriptionPlans.map((p) => `${p.title} (${p.price}) - features: ${p.features.join(", ")}`).join("; ")}
- Franchise: We welcome franchise inquiries for our kitchen outlets. Applications can be submitted directly on the Franchise page.
- WhatsApp: ${initialSettings.whatsapp_number}
Keep answers concise (under 120 words).`;

        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [
                {
                  role: "user",
                  parts: [{ text: `${systemPrompt}\n\nCustomer question: ${message}` }],
                },
              ],
              generationConfig: {
                maxOutputTokens: 250,
                temperature: 0.5,
              },
            }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          const generatedText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (generatedText) {
            return NextResponse.json({ reply: generatedText.trim() });
          }
        }
      } catch (err) {
        console.warn("External AI call fallback to internal knowledge base:", err);
      }
    }

    // High quality deterministic rule & knowledge base matcher (Zero external dependency fallback)
    let reply = "";

    if (
      cleanMsg.includes("offering") ||
      cleanMsg.includes("menu") ||
      cleanMsg.includes("food") ||
      cleanMsg.includes("meal") ||
      cleanMsg.includes("dishes")
    ) {
      const items = initialOfferings.map((o) => `• ${o.title} (${o.category}): ${o.description}`).join("\n");
      reply = `Here are our signature offerings:\n\n${items}\n\nYou can explore all items and request details on our Offerings page!`;
    } else if (
      cleanMsg.includes("subscription") ||
      cleanMsg.includes("plan") ||
      cleanMsg.includes("monthly") ||
      cleanMsg.includes("starter") ||
      cleanMsg.includes("wellness")
    ) {
      reply =
        "We offer flexible Subscription Plans:\n\n" +
        "1. Starter Plan (from ₹2,999/mo) — Select meal options & weekly delivery\n" +
        "2. Wellness Plan (from ₹4,999/mo) — Wide meal variety, flexible delivery & personalized guidance (Most Popular)\n" +
        "3. Premium Plan (from ₹7,499/mo) — Full menu access, custom delivery & dedicated wellness support.\n\n" +
        "You can configure or submit a subscription enquiry on our Subscriptions page!";
    } else if (
      cleanMsg.includes("franchise") ||
      cleanMsg.includes("partner") ||
      cleanMsg.includes("business opportunity") ||
      cleanMsg.includes("invest")
    ) {
      reply =
        "We are expanding our healthy food network and welcome franchise partners! You can submit your city preference, investment range, and background directly through our Franchise page. Our expansion team reviews applications within 48 hours.";
    } else if (
      cleanMsg.includes("nutrition") ||
      cleanMsg.includes("diet") ||
      cleanMsg.includes("collab") ||
      cleanMsg.includes("dietician")
    ) {
      reply =
        "We actively collaborate with certified nutritionists, dieticians, and fitness professionals! You can submit a collaboration proposal on our Nutrition & Collaboration page so we can explore working together.";
    } else if (
      cleanMsg.includes("contact") ||
      cleanMsg.includes("phone") ||
      cleanMsg.includes("email") ||
      cleanMsg.includes("whatsapp") ||
      cleanMsg.includes("address") ||
      cleanMsg.includes("location")
    ) {
      reply = `You can reach our team at:\n📞 Phone: ${initialSettings.phone}\n💬 WhatsApp: ${initialSettings.whatsapp_number}\n✉️ Email: ${initialSettings.email}\n📍 Address: ${initialSettings.address}, ${initialSettings.city}.\n\nWe look forward to serving you!`;
    } else if (
      cleanMsg.includes("price") ||
      cleanMsg.includes("cost") ||
      cleanMsg.includes("how much")
    ) {
      reply =
        "Our meal bowls and subscription plans are customized based on your delivery frequency and dietary preferences. Our plans start from ₹2,999/mo. Please contact us or submit an enquiry on our Subscriptions page for exact options tailored to you.";
    } else if (
      cleanMsg.includes("hi") ||
      cleanMsg.includes("hello") ||
      cleanMsg.includes("hey") ||
      cleanMsg.includes("namaste")
    ) {
      reply =
        "Namaste! Welcome to Anagha Balanced Bites. I'm here to help you explore our nutritious meal options, subscription plans, franchise opportunities, or connect you with our team. How can I assist you today?";
    } else {
      reply =
        "Thank you for asking! Anagha Balanced Bites brings you wholesome, balanced food tailored to your lifestyle. Feel free to ask about our menu offerings, subscription plans, franchise model, or tap below to reach our team on WhatsApp or Email.";
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { reply: "Sorry, I encountered a temporary issue. Please reach us directly via WhatsApp or our Contact page." },
      { status: 500 }
    );
  }
}

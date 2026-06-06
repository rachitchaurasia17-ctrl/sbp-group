import { PROJECTS } from '../data/projects';

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';
const MODEL = 'llama-3.3-70b-versatile';

// Compact, model-readable knowledge base built from real M PRO data.
const PROJECT_CONTEXT = PROJECTS.map((p) => {
  const price = p.priceFrom ? `, from ${p.priceFrom}` : '';
  return `• ${p.name} (${p.category}) — ${p.type}${price}; ${p.location}, ${p.city}; status: ${p.status}. ${p.tagline}`;
}).join('\n');

const SYSTEM_PROMPT = `You are "Rachit AI", a warm, sharp and trustworthy real estate advisor for M PRO Developers — a premium real estate consulting and development firm in Punjab (Tricity: Chandigarh, Mohali, Zirakpur, Derabassi, Ludhiana, Banur, Rajpura).

About M PRO Developers: founded in 2021 by a globally-experienced leadership team — with luxury real estate expertise across Miami, Kuala Lumpur and Frankfurt — M PRO pairs research-led advisory with RERA-compliant residential, commercial and industrial developments. Known for professionalism, integrity, zero-compromise principles and a client-first approach (Passion. Perfection. Prosperity.).

Live M PRO projects you can recommend:
${PROJECT_CONTEXT}

Your job:
1. Act as a knowledgeable general property dealer AND builder advisor — answer questions on buying, investing, home loans, carpet vs built-up area, RERA, vastu, rental yields, construction quality, materials, possession timelines, NRI buying, registration/stamp duty (general guidance, not legal advice).
2. When relevant, recommend specific M PRO projects that fit the user's budget, city, configuration (1–4 BHK) or use-case (live-in, investment, commercial, industrial).
3. Help compare options and suggest next steps.
4. Always guide serious buyers to book a free site visit or contact M PRO: phone +91 93160 04242, email info@mprodevelopers.com, or the "Book a Site Visit" form on this site.

Style: concise, friendly, confident. Use short paragraphs and bullet points. Prices are indicative — tell users to confirm current pricing on a site visit. Never invent projects or prices beyond the list above. If asked something unrelated to property/real estate/M PRO, gently steer back. Keep replies under ~180 words unless asked for detail.`;

export const GREETING =
  "Namaste 🙏 I'm Rachit AI — your M PRO property & builder advisor. Tell me your budget, preferred city (Mohali, Zirakpur, Ludhiana…) and whether it's to live in or invest, and I'll suggest the right M PRO homes. Ask me anything about buying, loans, RERA or our projects.";

export function hasApiKey(): boolean {
  return Boolean(import.meta.env.VITE_GROQ_API_KEY);
}

/**
 * Sends the conversation to Groq and returns the assistant reply.
 * History should be the visible chat (user/assistant turns) without system.
 */
export async function askRachit(history: ChatMessage[]): Promise<string> {
  const apiKey = import.meta.env.VITE_GROQ_API_KEY as string | undefined;
  if (!apiKey) {
    return "I'm not configured yet — the site owner needs to add a Groq API key. Meanwhile, call M PRO at +91 93160 04242.";
  }

  const messages: ChatMessage[] = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...history.slice(-12), // keep context light
  ];

  const res = await fetch(GROQ_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: MODEL,
      messages,
      temperature: 0.6,
      max_tokens: 700,
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Groq ${res.status}: ${text.slice(0, 200)}`);
  }

  const data = await res.json();
  return (
    data?.choices?.[0]?.message?.content?.trim() ||
    "Sorry, I couldn't generate a reply just now. Please try again, or call +91 93160 04242."
  );
}

import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic();

const prompts: Record<string, string> = {
  simple:  'Explain the following in plain, simple English. No jargon. Use short sentences. Maximum 150 words.',
  bullet:  'Extract the 5 most important action points from this text. Use bullet points. Start each with a bold key word.',
  example: 'Create one clear, concrete worked example for a German or British non-resident owning a holiday home in Mallorca worth €400,000. Walk through step by step.',
};

export async function POST(request: NextRequest) {
  try {
    const { articleContent, mode } = await request.json();

    if (!articleContent || !mode || !prompts[mode]) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    const message = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      system:
        'You are a friendly expert guide on Spanish property law and taxes. Make complex topics clear without dumbing them down. Be warm, reassuring, and practical.',
      messages: [
        {
          role: 'user',
          content: `${prompts[mode]}\n\nArticle:\n${articleContent}`,
        },
      ],
    });

    const text = message.content[0].type === 'text' ? message.content[0].text : '';
    return NextResponse.json({ text });
  } catch (err) {
    console.error('Simplify API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

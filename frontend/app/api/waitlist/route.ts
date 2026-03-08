import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // 1. Basic Validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // 2. Schema Setup (Ensure table exists)
    // We run this carefully on every request or handle it externally, 
    // but here we'll do it safely to ensure the table is there.
    try {
      await sql`
        CREATE TABLE IF NOT EXISTS waitlist (
          id SERIAL PRIMARY KEY,
          email TEXT UNIQUE NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
      `;
    } catch (tableError) {
      console.error('Error ensuring waitlist table exists:', tableError);
      // We continue as the table might already exist but we simply failed to check/create it
    }

    // 3. Duplicate Check
    const existing = await sql`
      SELECT id FROM waitlist WHERE email = ${email} LIMIT 1
    `;

    if (existing && existing.length > 0) {
      return NextResponse.json(
        { error: 'You are already on the waitlist!' },
        { status: 409 }
      );
    }

    // 4. Insertion
    await sql`
      INSERT INTO waitlist (email) VALUES (${email})
    `;

    return NextResponse.json(
      { message: 'Success! You have been added to the waitlist.' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Waitlist API Error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}

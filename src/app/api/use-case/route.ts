import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

const RATE_LIMIT_WINDOW = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const requestLog = new Map<string, number[]>();

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    const userRequests = requestLog.get(ip) || [];
    const recentRequests = userRequests.filter(time => time > now - RATE_LIMIT_WINDOW);
    
    if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }
    requestLog.set(ip, [...recentRequests, now]);

    const { taskDescription, painPoints, expectedOutcome, email, role, orgType } = await request.json();

    if (!taskDescription || !painPoints || !expectedOutcome || !email) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const { error: supabaseError } = await supabaseAdmin
      .from('use_cases')
      .insert([{
        email,
        task_description: taskDescription,
        pain_points: painPoints,
        expected_outcome: expectedOutcome,
        role,
        org_type: orgType
      }])
      .select();

    if (supabaseError) {
      console.error('Supabase error:', supabaseError);
      return NextResponse.json({ error: 'Failed to store' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}

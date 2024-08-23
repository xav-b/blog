import { NextResponse } from 'next/server'
import { getPosts } from '../../get-posts'

export const dynamic = 'force-dynamic'

export async function GET() {
  // retrieve post and merge them with their views
  return NextResponse.json(await getPosts())
}

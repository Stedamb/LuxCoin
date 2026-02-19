import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

async function performRevalidation(type: string, slug?: string) {
  console.log(`Revalidating ${type}${slug ? ` (${slug})` : ''}...`)

  // Revalidate high-level pages that might change
  revalidatePath('/')
  
  // Revalidate based on document type
  if (type === 'coin' || type === 'antiquity') {
    revalidatePath('/collezione')
    revalidatePath('/collezione/monete')
    revalidatePath('/collezione/antichita')
    
    if (slug) {
      revalidatePath(`/collezione/${slug}`)
    }
  } else if (type === 'siteSettings') {
    // Revalidate everything since settings are global (logo, email, etc.)
    revalidatePath('/', 'layout')
  } else if (type === 'auction') {
    revalidatePath('/aste')
  } else if (type === 'faq') {
     revalidatePath('/faq')
  } else if (type === 'shipping') {
     revalidatePath('/spedizioni')
  }

  return { revalidated: true, now: Date.now(), type, slug }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const secret = searchParams.get('secret')
    const type = searchParams.get('type') || 'siteSettings'
    const slug = searchParams.get('slug') || undefined
    const token = process.env.SANITY_REVALIDATE_SECRET

    if (!secret || secret !== token) {
      return new NextResponse('Invalid signature', { status: 401 })
    }

    const result = await performRevalidation(type, slug)
    return NextResponse.json(result)
  } catch (err: any) {
    console.error(err)
    return new NextResponse(err.message, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const secret = searchParams.get('secret')
    const token = process.env.SANITY_REVALIDATE_SECRET

    let body: any
    let isValidSignature = false

    // Allow manual revalidation via ?secret=TOKEN in POST body
    if (secret && secret === token) {
      isValidSignature = true
      body = await req.json()
    } else {
      // Otherwise use Sanity's signature validation for webhooks
      const result = await parseBody<{
        _type: string
        slug?: string | { current: string }
      }>(req, token)
      body = result.body
      isValidSignature = !!result.isValidSignature
    }

    if (!isValidSignature) {
      return new NextResponse('Invalid signature', { status: 401 })
    }

    if (!body?._type) {
      return new NextResponse('Bad Request', { status: 400 })
    }

    const slug = typeof body.slug === 'string' ? body.slug : body.slug?.current
    const result = await performRevalidation(body._type, slug)
    
    return NextResponse.json(result)
  } catch (err: any) {
    console.error(err)
    return new NextResponse(err.message, { status: 500 })
  }
}

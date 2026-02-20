import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { posts, getPost, formatDate } from '@/content/blog'
import { Badge } from '@/components/ui/Badge'
import { ProseRenderer } from '@/components/ui/ProseRenderer'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return { title: post.title, description: post.excerpt }
}

const categoryVariant = {
  Product:      'neutral',
  Design:       'violet',
  'Case Study': 'success',
  Engineering:  'orange',
} as const

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const badgeVariant =
    categoryVariant[post.category as keyof typeof categoryVariant] ?? 'neutral'

  return (
    <div className="bg-braun-50 min-h-screen pt-14">

      {/* Article header — white panel, matches landing page section headers */}
      <header className="border-b border-braun-200 bg-white">
        <div className="max-w-3xl mx-auto px-6 py-14">

          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[9px] font-mono uppercase tracking-widest text-braun-500 hover:text-braun-900 transition-colors mb-10"
          >
            <ArrowLeft size={10} /> Journal
          </Link>

          {/* Category badge — using Badge component */}
          <div className="mb-5">
            <Badge variant={badgeVariant}>{post.category}</Badge>
          </div>

          {/* Title — same font-light rule as every h1 in the project */}
          <h1 className="text-3xl lg:text-4xl font-light tracking-tight text-braun-900 leading-tight mb-5">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-base text-braun-600 font-light leading-relaxed max-w-xl mb-10">
            {post.excerpt}
          </p>

          {/* Author + meta — DS separator pattern */}
          <div className="flex items-center justify-between pt-6 border-t border-braun-100">
            <div className="flex items-center gap-3">
              {/* Initial avatar — DS avatar pattern */}
              <div className="w-8 h-8 bg-braun-900 text-white flex items-center justify-center text-xs font-mono font-bold shrink-0">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <div className="text-xs font-semibold text-braun-800">{post.author.name}</div>
                <div className="text-[9px] font-mono uppercase tracking-widest text-braun-400">
                  {post.author.role}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-braun-500">{formatDate(post.date)}</div>
              <div className="text-[9px] font-mono uppercase tracking-widest text-braun-500">
                {post.readTime} min read
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Article body — white card, controlled reading width */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-white border border-braun-200 px-8 md:px-14 py-12">
          {/* ProseRenderer — same component as docs. One shared content renderer. */}
          <ProseRenderer blocks={post.content} />
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-braun-200 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[9px] font-mono uppercase tracking-widest text-braun-500 hover:text-braun-900 transition-colors"
          >
            <ArrowLeft size={10} /> All posts
          </Link>
          <span className="text-[9px] font-mono text-braun-400 uppercase tracking-widest">
            Meridian Journal
          </span>
        </div>
      </div>
    </div>
  )
}

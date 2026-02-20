import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { posts, getPost, formatDate, type ContentBlock } from '@/content/blog'

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
  return {
    title: post.title,
    description: post.excerpt,
  }
}

function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case 'h2':
      return <h2 key={i}>{block.text}</h2>
    case 'h3':
      return <h3 key={i}>{block.text}</h3>
    case 'p':
      return <p key={i}>{block.text}</p>
    case 'list':
      return (
        <ul key={i}>
          {block.items?.map((item, j) => <li key={j}>{item}</li>)}
        </ul>
      )
    case 'code':
      return (
        <pre key={i}>
          <code>{block.text}</code>
        </pre>
      )
    case 'note':
      return (
        <div key={i} className="note">
          {block.text}
        </div>
      )
    default:
      return null
  }
}

const categoryColors: Record<string, string> = {
  Product:      'text-braun-900 border-braun-900',
  Design:       'text-violet-700 border-violet-700',
  'Case Study': 'text-data-positive border-data-positive',
  Engineering:  'text-braun-orange border-braun-orange',
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const color = categoryColors[post.category] ?? 'text-braun-500 border-braun-300'

  return (
    <div className="bg-braun-50 min-h-screen pt-14">
      {/* Header */}
      <div className="border-b border-braun-200 bg-white">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-braun-400 hover:text-braun-900 transition-colors mb-8"
          >
            <ArrowLeft size={11} />
            Blog
          </Link>

          <div className={`inline-block text-[9px] font-mono uppercase tracking-widest border px-2 py-0.5 mb-4 ${color}`}>
            {post.category}
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-braun-900 leading-tight mb-4">
            {post.title}
          </h1>

          <p className="text-sm text-braun-500 leading-relaxed mb-8">{post.excerpt}</p>

          <div className="flex items-center justify-between border-t border-braun-100 pt-5">
            <div>
              <div className="text-xs font-semibold text-braun-800">{post.author.name}</div>
              <div className="text-[10px] font-mono text-braun-400 uppercase tracking-widest">
                {post.author.role}
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-braun-500">{formatDate(post.date)}</div>
              <div className="text-[10px] font-mono text-braun-400 uppercase tracking-widest">
                {post.readTime} min read
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose bg-white border border-braun-200 p-8 md:p-12">
          {post.content.map((block, i) => renderBlock(block, i))}
        </article>

        {/* Footer nav */}
        <div className="mt-8 pt-6 border-t border-braun-200">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-braun-400 hover:text-braun-900 transition-colors"
          >
            <ArrowLeft size={11} />
            Back to all posts
          </Link>
        </div>
      </div>
    </div>
  )
}

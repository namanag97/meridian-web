import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import {
  getDocPage,
  getAllDocSlugs,
  navigation,
  type ContentBlock,
} from '@/content/docs'

interface Props {
  params: Promise<{ slug: string[] }>
}

export async function generateStaticParams() {
  return getAllDocSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = getDocPage(slug)
  if (!page) return {}
  return {
    title: page.title,
    description: page.description,
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
    case 'warning':
      return (
        <div
          key={i}
          className="note"
          style={{ borderColor: '#e11d48', backgroundColor: '#fff1f2' }}
        >
          ⚠ {block.text}
        </div>
      )
    default:
      return null
  }
}

// Find prev/next pages for navigation
function getPrevNext(slugParts: string[]) {
  const flat = navigation.flatMap(s => s.pages)
  const idx = flat.findIndex(
    p => p.slug.length === slugParts.length && p.slug.every((s, i) => s === slugParts[i])
  )
  return {
    prev: idx > 0 ? flat[idx - 1] : null,
    next: idx < flat.length - 1 ? flat[idx + 1] : null,
  }
}

export default async function DocPage({ params }: Props) {
  const { slug } = await params
  const page = getDocPage(slug)
  if (!page) notFound()

  const { prev, next } = getPrevNext(slug)

  // Breadcrumb section label
  const section = navigation.find(s =>
    s.pages.some(p => p.slug.length === slug.length && p.slug.every((s2, i) => s2 === slug[i]))
  )

  return (
    <div className="px-10 py-10 max-w-3xl">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-braun-400 mb-8">
        <span>Docs</span>
        <ChevronRight size={10} />
        {section && <span>{section.title}</span>}
        <ChevronRight size={10} />
        <span className="text-braun-600">{page.title}</span>
      </div>

      {/* Page header */}
      <h1 className="text-2xl font-bold text-braun-900 mb-2">{page.title}</h1>
      <p className="text-sm text-braun-500 leading-relaxed mb-8 pb-8 border-b border-braun-200">
        {page.description}
      </p>

      {/* Content */}
      <article className="prose">
        {page.content.map((block, i) => renderBlock(block, i))}
      </article>

      {/* Prev / Next */}
      <div className="mt-12 pt-6 border-t border-braun-200 grid grid-cols-2 gap-4">
        {prev ? (
          <Link
            href={`/docs/${prev.slug.join('/')}`}
            className="group flex flex-col gap-1 p-4 border border-braun-200 hover:border-braun-900 transition-colors"
          >
            <span className="text-[9px] font-mono uppercase tracking-widest text-braun-400">
              ← Previous
            </span>
            <span className="text-xs font-semibold text-braun-800 group-hover:text-braun-900">
              {prev.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/docs/${next.slug.join('/')}`}
            className="group flex flex-col gap-1 p-4 border border-braun-200 hover:border-braun-900 transition-colors text-right ml-auto w-full"
          >
            <span className="text-[9px] font-mono uppercase tracking-widest text-braun-400">
              Next →
            </span>
            <span className="text-xs font-semibold text-braun-800 group-hover:text-braun-900">
              {next.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}

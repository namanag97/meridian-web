import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { type BlogPost, formatDate } from '@/content/blog'

const categoryStyle: Record<string, string> = {
  Product:      'text-braun-900 border-braun-200 bg-braun-100',
  Design:       'text-data-violet border-data-violet/30 bg-data-violet/10',
  'Case Study': 'text-data-positive border-data-positive/30 bg-data-positive/10',
  Engineering:  'text-braun-orange border-braun-orange/30 bg-braun-orange/10',
}

interface Props {
  post: BlogPost
  featured?: boolean
}

export default function PostCard({ post, featured = false }: Props) {
  const catCls = categoryStyle[post.category] ?? 'text-braun-500 border-braun-200 bg-braun-50'

  if (featured) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group block bg-white border border-braun-200 hover:border-braun-900 transition-colors duration-300 hover-lift"
      >
        <div className="grid md:grid-cols-[1fr_320px] gap-0 divide-y md:divide-y-0 md:divide-x divide-braun-200">
          {/* Main content */}
          <div className="p-8 md:p-10">
            <div className={`inline-block text-[9px] font-mono uppercase tracking-widest border px-2 py-0.5 mb-5 ${catCls}`}>
              {post.category}
            </div>
            <h2 className="text-xl lg:text-2xl font-light tracking-tight text-braun-900 leading-snug mb-4 group-hover:text-braun-orange transition-colors duration-300">
              {post.title}
            </h2>
            <p className="text-sm text-braun-500 leading-relaxed">{post.excerpt}</p>
          </div>

          {/* Meta */}
          <div className="p-8 md:p-10 flex flex-col justify-between bg-braun-50">
            <div className="text-[10px] font-mono uppercase tracking-widest text-braun-400">
              {formatDate(post.date)}
            </div>
            <div className="mt-6 space-y-4">
              <div>
                <div className="text-xs font-semibold text-braun-800">{post.author.name}</div>
                <div className="text-[10px] font-mono text-braun-400 uppercase tracking-widest mt-0.5">
                  {post.author.role}
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-braun-200">
                <div className="text-[10px] font-mono text-braun-400 uppercase tracking-widest">
                  {post.readTime} min read
                </div>
                <ArrowRight
                  size={13}
                  className="text-braun-300 group-hover:text-braun-900 group-hover:translate-x-1 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col bg-white border border-braun-200 hover:border-braun-900 transition-colors duration-300"
    >
      <div className="p-6 flex flex-col flex-1">
        <div className={`inline-block text-[9px] font-mono uppercase tracking-widest border px-2 py-0.5 mb-4 self-start ${catCls}`}>
          {post.category}
        </div>
        <h3 className="text-sm font-semibold tracking-tight text-braun-900 leading-snug mb-3 flex-1 group-hover:text-braun-orange transition-colors duration-300">
          {post.title}
        </h3>
        <p className="text-xs text-braun-500 leading-relaxed line-clamp-3">{post.excerpt}</p>
      </div>
      <div className="border-t border-braun-100 px-6 py-3 flex items-center justify-between">
        <span className="text-[9px] font-mono text-braun-400 uppercase tracking-widest">
          {formatDate(post.date)}
        </span>
        <span className="text-[9px] font-mono text-braun-500 uppercase tracking-widest">
          {post.readTime} min
        </span>
      </div>
    </Link>
  )
}

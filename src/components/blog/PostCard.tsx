import Link from 'next/link'
import { type BlogPost, formatDate } from '@/content/blog'

const categoryColors: Record<string, string> = {
  Product:     'text-braun-900 border-braun-900',
  Design:      'text-data-violet border-data-violet',
  'Case Study': 'text-data-positive border-data-positive',
  Engineering: 'text-braun-orange border-braun-orange',
}

interface Props {
  post: BlogPost
  featured?: boolean
}

export default function PostCard({ post, featured = false }: Props) {
  const color = categoryColors[post.category] ?? 'text-braun-500 border-braun-300'

  if (featured) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group block bg-white border border-braun-200 hover:border-braun-900 transition-colors"
      >
        <div className="p-8 md:p-10 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <div className={`inline-block text-[9px] font-mono uppercase tracking-widest border px-2 py-0.5 mb-4 ${color}`}>
              {post.category}
            </div>
            <h2 className="text-xl font-bold text-braun-900 leading-snug mb-3 group-hover:text-braun-orange transition-colors">
              {post.title}
            </h2>
            <p className="text-sm text-braun-500 leading-relaxed">{post.excerpt}</p>
          </div>
          <div className="flex flex-col justify-between h-full">
            <div className="text-xs font-mono text-braun-400 uppercase tracking-widest">
              {formatDate(post.date)}
            </div>
            <div className="flex items-center justify-between mt-6">
              <div>
                <div className="text-xs font-semibold text-braun-800">{post.author.name}</div>
                <div className="text-[10px] font-mono text-braun-400 uppercase tracking-widest">
                  {post.author.role}
                </div>
              </div>
              <div className="text-[10px] font-mono text-braun-400 uppercase tracking-widest">
                {post.readTime} min read
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
      className="group flex flex-col bg-white border border-braun-200 hover:border-braun-900 transition-colors"
    >
      <div className="p-6 flex flex-col flex-1">
        <div className={`inline-block text-[9px] font-mono uppercase tracking-widest border px-2 py-0.5 mb-4 self-start ${color}`}>
          {post.category}
        </div>
        <h3 className="text-sm font-bold text-braun-900 leading-snug mb-2 group-hover:text-braun-orange transition-colors flex-1">
          {post.title}
        </h3>
        <p className="text-xs text-braun-500 leading-relaxed mt-2">{post.excerpt}</p>
      </div>
      <div className="border-t border-braun-100 px-6 py-3 flex items-center justify-between">
        <span className="text-[10px] font-mono text-braun-400 uppercase tracking-widest">
          {formatDate(post.date)}
        </span>
        <span className="text-[10px] font-mono text-braun-400 uppercase tracking-widest">
          {post.readTime} min
        </span>
      </div>
    </Link>
  )
}

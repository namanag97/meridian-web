import type { Metadata } from 'next'
import { posts } from '@/content/blog'
import PostCard from '@/components/blog/PostCard'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Product updates, design thinking, engineering deep-dives, and customer stories from the Meridian team.',
}

export default function BlogPage() {
  const featured = posts.find(p => p.featured)
  const rest = posts.filter(p => !p.featured)

  return (
    <div className="bg-braun-50 min-h-screen pt-14">
      {/* Page header */}
      <div className="border-b border-braun-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-[10px] font-mono uppercase tracking-widest text-braun-400 mb-3">
            Journal
          </div>
          <h1 className="text-2xl font-bold text-braun-900 mb-2">
            Product, design &amp; engineering.
          </h1>
          <p className="text-sm text-braun-500 max-w-sm leading-relaxed">
            Updates, thinking, and stories from the team building Meridian.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Featured post */}
        {featured && (
          <div className="mb-8">
            <div className="text-[9px] font-mono uppercase tracking-widest text-braun-400 mb-3">
              Featured
            </div>
            <PostCard post={featured} featured />
          </div>
        )}

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-braun-200" />
          <span className="text-[9px] font-mono uppercase tracking-widest text-braun-400">
            All posts
          </span>
          <div className="flex-1 h-px bg-braun-200" />
        </div>

        {/* Post grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map(post => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

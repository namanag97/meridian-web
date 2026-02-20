import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="pt-14 min-h-screen bg-braun-50 flex items-center justify-center">
      <div className="text-center px-6">
        <div className="text-[10px] font-mono uppercase tracking-widest text-braun-400 mb-6">
          Error 404
        </div>
        <h1 className="text-6xl lg:text-8xl font-mono font-light text-braun-900 mb-4">
          404
        </h1>
        <p className="text-sm text-braun-500 font-light mb-10 max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="px-6 py-2.5 text-[11px] font-mono font-bold uppercase tracking-widest bg-braun-900 text-white border border-braun-900 hover:bg-braun-800 transition-colors"
          >
            Back to home
          </Link>
          <Link
            href="/docs/introduction"
            className="px-6 py-2.5 text-[11px] font-mono font-bold uppercase tracking-widest bg-transparent text-braun-800 border border-braun-200 hover:border-braun-900 transition-colors"
          >
            Read the docs
          </Link>
        </div>
      </div>
    </div>
  )
}

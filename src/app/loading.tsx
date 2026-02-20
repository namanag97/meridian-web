export default function Loading() {
  return (
    <div className="pt-14 min-h-screen bg-braun-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-5 h-5 border border-braun-900 relative">
          <div className="absolute inset-0 bg-braun-900 origin-bottom animate-pulse" />
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-braun-500">
          Loading
        </span>
      </div>
    </div>
  )
}

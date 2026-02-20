export default function Loading() {
  return (
    <div className="pt-14 min-h-screen bg-braun-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-6 h-6 border-2 border-braun-200 border-t-braun-900 animate-spin" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-braun-400">
          Loading
        </span>
      </div>
    </div>
  )
}

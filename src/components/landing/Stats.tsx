const stats = [
  { value: '500+',  label: 'Teams worldwide',    sub: 'in 40+ countries' },
  { value: '40M+',  label: 'Events per day',     sub: 'at peak load' },
  { value: '94.7%', label: 'Avg conformance',    sub: 'across all customers' },
  { value: '<50ms', label: 'Ingest latency',     sub: 'p99, all regions' },
]

export default function Stats() {
  return (
    <section className="border-b border-braun-200 bg-braun-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-braun-800">
          {stats.map(s => (
            <div key={s.label} className="px-8 py-12 first:pl-0 last:pr-0">
              <div className="text-3xl font-mono font-bold text-white mb-1">{s.value}</div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-braun-400 mb-0.5">
                {s.label}
              </div>
              <div className="text-[10px] font-mono text-braun-600">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

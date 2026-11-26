/**
 * Small inline SVG diagrams for project cards. Decorative — each card also has
 * text description, so diagrams are aria-hidden.
 */
function LanDiagram() {
  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="pd-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#2563eb" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill="url(#pd-g)" />
      <g stroke="#38bdf8" strokeOpacity="0.1">
        {Array.from({ length: 9 }, (_, i) => <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="220" />)}
        {Array.from({ length: 5 }, (_, i) => <line key={`h${i}`} x1="0" y1={i * 55} x2="400" y2={i * 55} />)}
      </g>
      <g stroke="#38bdf8" strokeOpacity="0.7" strokeWidth="1.5" fill="none">
        <path d="M200 52 L200 92 M200 92 L90 132 M200 92 L200 132 M200 92 L310 132" />
        <path d="M90 132 L60 175 M90 132 L120 175 M310 132 L280 175 M310 132 L340 175" strokeOpacity="0.45" />
      </g>
      <g fill="#0d1b30" stroke="#22d3ee" strokeWidth="1.2">
        <circle cx="200" cy="45" r="18" />
        <rect x="168" y="92" width="64" height="28" rx="6" stroke="#3b82f6" />
      </g>
      {[{ x: 90, y: 132, l: 'VLAN10' }, { x: 200, y: 132, l: 'VLAN20' }, { x: 310, y: 132, l: 'VLAN30' }].map((n) => (
        <g key={n.l}>
          <rect x={n.x - 30} y={n.y - 14} width="60" height="28" rx="6" fill="#0d1b30" stroke="#3b82f6" strokeWidth="1.2" />
          <text x={n.x} y={n.y + 4} textAnchor="middle" fill="#93c5fd" fontSize="9" fontFamily="JetBrains Mono, monospace">{n.l}</text>
        </g>
      ))}
      <text x="200" y="49" textAnchor="middle" fill="#22d3ee" fontSize="9" fontFamily="JetBrains Mono, monospace">L3</text>
      <text x="200" y="110" textAnchor="middle" fill="#93c5fd" fontSize="8" fontFamily="JetBrains Mono, monospace">CORE SW</text>
    </svg>
  )
}

function WanDiagram() {
  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="220" fill="#07111f" />
      <g stroke="#38bdf8" strokeOpacity="0.1">
        {Array.from({ length: 9 }, (_, i) => <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="220" />)}
        {Array.from({ length: 5 }, (_, i) => <line key={`h${i}`} x1="0" y1={i * 55} x2="400" y2={i * 55} />)}
      </g>
      <g stroke="#38bdf8" strokeWidth="1.5" fill="none" strokeOpacity="0.65">
        <path d="M200 70 L95 150 M200 70 L305 150 M95 150 L305 150" />
        <path d="M200 70 L200 150" strokeDasharray="5 5" strokeOpacity="0.35" />
      </g>
      {[{ x: 200, y: 60, l: 'HQ' }, { x: 95, y: 155, l: 'BR-A' }, { x: 305, y: 155, l: 'BR-B' }].map((n) => (
        <g key={n.l}>
          <circle cx={n.x} cy={n.y} r="24" fill="#0d1b30" stroke="#22d3ee" strokeWidth="1.2" />
          <text x={n.x} y={n.y + 4} textAnchor="middle" fill="#67e8f9" fontSize="10" fontFamily="JetBrains Mono, monospace">{n.l}</text>
        </g>
      ))}
      <text x="200" y="115" textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="JetBrains Mono, monospace">OSPF / REDUNDANT PATH</text>
    </svg>
  )
}

function SecurityDiagram() {
  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="220" fill="#07111f" />
      <g stroke="#38bdf8" strokeOpacity="0.1">
        {Array.from({ length: 9 }, (_, i) => <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="220" />)}
        {Array.from({ length: 5 }, (_, i) => <line key={`h${i}`} x1="0" y1={i * 55} x2="400" y2={i * 55} />)}
      </g>
      <rect x="35" y="45" width="130" height="130" rx="10" fill="#ef4444" fillOpacity="0.04" stroke="#ef4444" strokeOpacity="0.25" />
      <rect x="235" y="45" width="130" height="130" rx="10" fill="#22d3ee" fillOpacity="0.04" stroke="#22d3ee" strokeOpacity="0.25" />
      <path d="M165 110 L235 110" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5 4" />
      <path d="M200 78 L218 86 V104 C218 118 210 126 200 131 C190 126 182 118 182 104 V86 Z" fill="#0d1b30" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="100" y="68" textAnchor="middle" fill="#f87171" fontSize="9" fontFamily="JetBrains Mono, monospace">USER ZONE</text>
      <text x="300" y="68" textAnchor="middle" fill="#67e8f9" fontSize="9" fontFamily="JetBrains Mono, monospace">SERVER ZONE</text>
      {['PC', 'PC'].map((l, i) => (
        <g key={i}><rect x={60 + i * 45} y={110} width="34" height="24" rx="4" fill="#0d1b30" stroke="#94a3b8" strokeOpacity="0.5" /><text x={77 + i * 45} y={126} textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="JetBrains Mono, monospace">{l}</text></g>
      ))}
      {['SRV', 'SRV'].map((l, i) => (
        <g key={i}><rect x={260 + i * 45} y={110} width="34" height="24" rx="4" fill="#0d1b30" stroke="#67e8f9" strokeOpacity="0.5" /><text x={277 + i * 45} y={126} textAnchor="middle" fill="#67e8f9" fontSize="8" fontFamily="JetBrains Mono, monospace">{l}</text></g>
      ))}
      <text x="200" y="155" textAnchor="middle" fill="#f59e0b" fontSize="8" fontFamily="JetBrains Mono, monospace">ACL / FIREWALL</text>
    </svg>
  )
}

function MonitorDiagram() {
  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="220" fill="#07111f" />
      <g stroke="#38bdf8" strokeOpacity="0.1">
        {Array.from({ length: 9 }, (_, i) => <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="220" />)}
        {Array.from({ length: 5 }, (_, i) => <line key={`h${i}`} x1="0" y1={i * 55} x2="400" y2={i * 55} />)}
      </g>
      <polyline points="30,150 70,130 110,138 150,95 190,110 230,70 270,85 310,60 350,75 370,55" fill="none" stroke="#22d3ee" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="30,170 70,165 110,160 150,150 190,155 230,140 270,145 310,130 350,138 370,125" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.55" strokeLinecap="round" />
      {[[150, 95], [230, 70], [310, 60]].map(([x, y], i) => (
        <g key={i}><circle cx={x} cy={y} r="4" fill="#0d1b30" stroke="#22d3ee" strokeWidth="1.5" /><circle cx={x} cy={y} r="10" fill="none" stroke="#22d3ee" strokeOpacity="0.2" /></g>
      ))}
      <text x="30" y="40" fill="#67e8f9" fontSize="9" fontFamily="JetBrains Mono, monospace">TRAFFIC ANALYSIS</text>
      <text x="280" y="190" fill="#3b82f6" fontSize="8" fontFamily="JetBrains Mono, monospace">baseline</text>
      <text x="280" y="178" fill="#22d3ee" fontSize="8" fontFamily="JetBrains Mono, monospace">captured</text>
    </svg>
  )
}

const diagrams = {
  lan: LanDiagram,
  wan: WanDiagram,
  security: SecurityDiagram,
  monitor: MonitorDiagram,
}

export default function ProjectDiagram({ type }) {
  const Diagram = diagrams[type] || LanDiagram
  return <Diagram />
}

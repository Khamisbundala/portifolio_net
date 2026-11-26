/**
 * Decorative network topology illustration used in the hero.
 * Pure SVG — no external image dependency.
 */
export default function NetworkIllustration({ className = '' }) {
  return (
    <svg
      viewBox="0 0 560 420"
      role="img"
      aria-label="Illustration of a connected network topology with routers, switches, servers and endpoints"
      className={className}
    >
      <defs>
        <linearGradient id="ni-line" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#2563eb" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id="ni-node" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a3357" />
          <stop offset="100%" stopColor="#0b1628" />
        </linearGradient>
        <filter id="ni-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* grid */}
      <g stroke="#38bdf8" strokeOpacity="0.07" strokeWidth="1">
        {Array.from({ length: 13 }, (_, i) => (
          <line key={`v${i}`} x1={i * 48} y1="0" x2={i * 48} y2="420" />
        ))}
        {Array.from({ length: 10 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 48} x2="560" y2={i * 48} />
        ))}
      </g>

      {/* scan */}
      <rect className="scan-line" x="0" y="0" width="560" height="30" fill="url(#ni-line)" opacity="0.06" />

      {/* links */}
      <g stroke="url(#ni-line)" strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M280 88 L280 158" className="flow-line" />
        <path d="M280 158 L142 232" className="flow-line" />
        <path d="M280 158 L418 232" className="flow-line" />
        <path d="M142 232 L82 318" />
        <path d="M142 232 L202 318" />
        <path d="M418 232 L358 318" />
        <path d="M418 232 L478 318" />
        <path d="M142 232 L418 232" strokeDasharray="4 8" strokeOpacity="0.35" />
      </g>

      {/* traffic dots */}
      {[
        { cx: 280, cy: 123, r: 3, delay: '0s' },
        { cx: 211, cy: 195, r: 2.5, delay: '0.4s' },
        { cx: 349, cy: 195, r: 2.5, delay: '0.8s' },
        { cx: 112, cy: 275, r: 2, delay: '0.2s' },
        { cx: 448, cy: 275, r: 2, delay: '1s' },
      ].map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill="#22d3ee" filter="url(#ni-glow)">
          <animate attributeName="opacity" values="0.2;1;0.2" dur="2.4s" begin={d.delay} repeatCount="indefinite" />
        </circle>
      ))}

      {/* cloud / internet */}
      <g transform="translate(280,58)">
        <ellipse cx="0" cy="0" rx="62" ry="30" fill="url(#ni-node)" stroke="#38bdf8" strokeOpacity="0.5" />
        <ellipse cx="-22" cy="4" rx="24" ry="16" fill="#0d1b30" stroke="#38bdf8" strokeOpacity="0.25" />
        <ellipse cx="24" cy="4" rx="22" ry="15" fill="#0d1b30" stroke="#38bdf8" strokeOpacity="0.25" />
        <text x="0" y="5" textAnchor="middle" fill="#67e8f9" fontSize="11" fontFamily="JetBrains Mono, monospace" letterSpacing="1.5">
          INTERNET
        </text>
      </g>

      {/* core router */}
      <g transform="translate(280,158)">
        <circle cx="0" cy="0" r="34" fill="none" stroke="#22d3ee" strokeOpacity="0.18" className="pulse-halo" />
        <circle cx="0" cy="0" r="30" fill="url(#ni-node)" stroke="#22d3ee" strokeWidth="1.5" />
        <path d="M-10 -6 L0 -14 L10 -6 M-10 6 L0 14 L10 6 M-14 0 L14 0" stroke="#22d3ee" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <text x="0" y="48" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="JetBrains Mono, monospace">
          CORE ROUTER
        </text>
      </g>

      {/* switches */}
      {[
        { x: 142, y: 232, label: 'DIST-SW-01' },
        { x: 418, y: 232, label: 'DIST-SW-02' },
      ].map((s) => (
        <g key={s.label} transform={`translate(${s.x},${s.y})`}>
          <rect x="-38" y="-22" width="76" height="44" rx="10" fill="url(#ni-node)" stroke="#3b82f6" strokeOpacity="0.7" />
          <g fill="#60a5fa">
            {[-18, -6, 6, 18].map((px) => (
              <rect key={px} x={px - 3} y="-4" width="6" height="8" rx="1.5" opacity="0.9" />
            ))}
          </g>
          <text x="0" y="38" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="JetBrains Mono, monospace">
            {s.label}
          </text>
        </g>
      ))}

      {/* endpoints */}
      {[
        { x: 82, y: 318, label: 'SERVER', icon: 'server' },
        { x: 202, y: 318, label: 'CLIENTS', icon: 'client' },
        { x: 358, y: 318, label: 'WAP', icon: 'wifi' },
        { x: 478, y: 318, label: 'FIREWALL', icon: 'shield' },
      ].map((n) => (
        <g key={n.label} transform={`translate(${n.x},${n.y})`}>
          <rect x="-34" y="-24" width="68" height="48" rx="10" fill="url(#ni-node)" stroke="#38bdf8" strokeOpacity="0.45" />
          {n.icon === 'server' && (
            <g stroke="#67e8f9" strokeWidth="1.5" fill="none">
              <rect x="-12" y="-10" width="24" height="7" rx="1.5" />
              <rect x="-12" y="1" width="24" height="7" rx="1.5" />
              <circle cx="7" cy="-6.5" r="1" fill="#67e8f9" stroke="none" />
              <circle cx="7" cy="4.5" r="1" fill="#67e8f9" stroke="none" />
            </g>
          )}
          {n.icon === 'client' && (
            <g stroke="#67e8f9" strokeWidth="1.5" fill="none">
              <rect x="-13" y="-10" width="26" height="16" rx="2" />
              <path d="M-5 10 L5 10 M0 6 L0 10" />
            </g>
          )}
          {n.icon === 'wifi' && (
            <g stroke="#67e8f9" strokeWidth="1.5" fill="none" strokeLinecap="round">
              <path d="M-12 -2 A17 17 0 0 1 12 -2" />
              <path d="M-7 3 A10 10 0 0 1 7 3" />
              <path d="M-2 8 A3 3 0 0 1 2 8" />
              <circle cx="0" cy="11" r="1" fill="#67e8f9" stroke="none" />
            </g>
          )}
          {n.icon === 'shield' && (
            <path
              d="M0 -11 L11 -6 V2 C11 8 5 12 0 15 C-5 12 -11 8 -11 2 V-6 Z"
              stroke="#67e8f9"
              strokeWidth="1.5"
              fill="none"
            />
          )}
          <text x="0" y="40" textAnchor="middle" fill="#94a3b8" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  )
}

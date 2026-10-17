// Schematic of the quarter-car model, drawn as inline SVG.
export default function QuarterCarDiagram() {
  const spring = (x: number, y1: number, y2: number) => {
    const n = 7, step = (y2 - y1 - 16) / n;
    let d = `M${x} ${y1} L${x} ${y1 + 8}`;
    for (let i = 0; i < n; i++) d += ` L${x + (i % 2 ? -12 : 12)} ${y1 + 8 + step * (i + 0.5)}`;
    return d + ` L${x} ${y2 - 8} L${x} ${y2}`;
  };
  return (
    <svg viewBox="0 0 360 300" role="img" aria-label="Quarter-car model: sprung mass on a spring and damper, over an unsprung mass on a tire spring, over the road" className="h-full w-full">
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="100" y="30" width="160" height="50" className="fill-blueprint/10" />
        <rect x="120" y="170" width="120" height="34" className="fill-blueprint/10" />
        <path d={spring(150, 80, 170)} />
        <line x1="210" y1="80" x2="210" y2="118" />
        <line x1="196" y1="118" x2="224" y2="118" />
        <line x1="196" y1="140" x2="224" y2="140" />
        <line x1="210" y1="130" x2="210" y2="170" />
        <path d={spring(180, 204, 262)} />
        <path d="M30 262 C70 262 90 250 130 262 S210 276 250 262 S320 250 340 262" />
      </g>
      <g fill="currentColor" fontSize="13" fontFamily="ui-monospace, Menlo, monospace">
        <text x="180" y="60" textAnchor="middle">sprung mass</text>
        <text x="180" y="192" textAnchor="middle">unsprung mass</text>
        <text x="132" y="126" textAnchor="end">Ks</text>
        <text x="232" y="132">Cs</text>
        <text x="198" y="236">Kt / Ct</text>
        <text x="30" y="288">road input</text>
      </g>
    </svg>
  );
}

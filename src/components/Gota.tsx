// Hand-drawn style SVG illustrations

export function SketchVaso({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 100" fill="none" className={className} aria-hidden="true">
      {/* Vaso dibujado con trazo irregular */}
      <path
        d="M18 15 C17 14, 16 13, 16 12 L64 12 C64 13, 63 14, 62 15 L58 82 C57 87, 54 90, 48 91 L32 91 C26 90, 23 87, 22 82 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        style={{ filter: "url(#sketchy)" }}
      />
      {/* Línea del agua */}
      <path
        d="M20 35 C28 32, 36 38, 44 34 C52 30, 56 36, 60 35"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Gotas cayendo */}
      <circle cx="35" cy="5" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="42" cy="2" r="1.5" fill="currentColor" opacity="0.4" />
      {/* Salpicadura pequeña */}
      <path
        d="M30 33 C29 30, 31 28, 33 30"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />
      <defs>
        <filter id="sketchy">
          <feTurbulence type="turbulence" baseFrequency="0.03" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
        </filter>
      </defs>
    </svg>
  );
}

export function SketchGota({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 28" fill="none" className={className} aria-hidden="true">
      <path
        d="M10 2 C10 2, 8 6, 6 10 C3 15, 2 18, 2 20 C2 24, 5.5 26, 10 26 C14.5 26, 18 24, 18 20 C18 18, 17 15, 14 10 C12 6, 10 2, 10 2 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Brillo dibujado */}
      <path
        d="M8 16 C7 14, 8 13, 9 14"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}

export function SketchStar({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path
        d="M8 1 L8 15 M1 8 L15 8 M3 3 L13 13 M13 3 L3 13"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.3"
      />
    </svg>
  );
}

export function SketchArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 12" fill="none" className={className} aria-hidden="true">
      <path
        d="M2 6 C4 6, 8 5, 12 6 C16 7, 18 6, 20 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M16 3 C18 5, 19 5.5, 21 6 C19 6.5, 18 7, 16 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function SketchLine({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 6" fill="none" className={className} aria-hidden="true" preserveAspectRatio="none">
      <path
        d="M0 3 C20 1, 40 5, 60 3 C80 1, 100 4, 120 2 C140 5, 160 1, 180 3 C190 4, 195 3, 200 3"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.25"
      />
    </svg>
  );
}

export function SketchCircle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M10 2 C14 1.5, 18 5, 18 10 C18.5 14, 15 18, 10 18 C6 18.5, 2 15, 2 10 C1.5 6, 5 2, 10 2 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function SketchUnderline({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 8" fill="none" className={className} aria-hidden="true" preserveAspectRatio="none">
      <path
        d="M2 5 C15 2, 30 6, 50 3 C70 1, 90 5, 118 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Keep old name as alias for backward compat during transition
export const Gota = SketchGota;

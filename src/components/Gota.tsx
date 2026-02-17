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

// --- Category illustrations ---

export function SketchReflexiones({ className = "" }: { className?: string }) {
  // Cuaderno abierto con bolígrafo
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      {/* Cuaderno abierto */}
      <path
        d="M5 8 C5 7, 6 6, 7 6 L19 6 C19.5 6, 20 6.5, 20 7 L20 34 C20 34, 19 33, 17 33 L7 33 C6 33, 5 32, 5 31 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35 8 C35 7, 34 6, 33 6 L21 6 C20.5 6, 20 6.5, 20 7 L20 34 C20 34, 21 33, 23 33 L33 33 C34 33, 35 32, 35 31 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Líneas de texto */}
      <path d="M8 12 L17 12" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <path d="M8 16 L15 16" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <path d="M8 20 L16 20" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <path d="M23 12 L32 12" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <path d="M23 16 L30 16" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      {/* Bolígrafo */}
      <path
        d="M28 20 L33 35 L34 35 L30 21"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SketchIA({ className = "" }: { className?: string }) {
  // Cerebro con chispa/circuito
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      {/* Cerebro - lado izquierdo */}
      <path
        d="M20 10 C17 7, 12 7, 10 10 C7 10, 6 13, 7 16 C5 18, 6 22, 8 23 C7 26, 9 29, 12 29 C13 32, 17 33, 20 30"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Cerebro - lado derecho */}
      <path
        d="M20 10 C23 7, 28 7, 30 10 C33 10, 34 13, 33 16 C35 18, 34 22, 32 23 C33 26, 31 29, 28 29 C27 32, 23 33, 20 30"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Línea central */}
      <path d="M20 10 L20 30" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      {/* Chispas */}
      <path d="M10 5 L11 3 L12 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <path d="M30 4 L31 2 L32 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      {/* Puntitos de circuito */}
      <circle cx="14" cy="17" r="1" fill="currentColor" opacity="0.3" />
      <circle cx="26" cy="17" r="1" fill="currentColor" opacity="0.3" />
      <circle cx="20" cy="20" r="1" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

export function SketchMarketing({ className = "" }: { className?: string }) {
  // Megáfono con ondas
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      {/* Megáfono */}
      <path
        d="M6 18 L6 24 C6 25, 7 25, 8 25 L12 25 L22 32 L22 10 L12 17 L8 17 C7 17, 6 17, 6 18 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Asa pequeña abajo */}
      <path
        d="M10 25 L10 29 C10 30, 11 31, 12 31 L14 31 C15 31, 15 30, 15 29 L15 25"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Ondas de sonido */}
      <path d="M26 17 C28 19, 28 23, 26 25" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <path d="M30 14 C33 18, 33 24, 30 28" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
      <path d="M34 11 C38 17, 38 25, 34 31" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
    </svg>
  );
}

export function SketchGuia({ className = "" }: { className?: string }) {
  // Brújula dibujada
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      {/* Círculo exterior */}
      <path
        d="M20 3 C28 2.5, 37 11, 37 20 C37.5 28, 29 37, 20 37 C12 37.5, 3 29, 3 20 C2.5 12, 11 3, 20 3 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Marcas cardinales */}
      <path d="M20 6 L20 9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <path d="M20 31 L20 34" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <path d="M6 20 L9 20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <path d="M31 20 L34 20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      {/* Aguja - rombo */}
      <path
        d="M20 10 L24 20 L20 30 L16 20 Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Mitad superior rellena */}
      <path
        d="M20 10 L24 20 L16 20 Z"
        fill="currentColor"
        opacity="0.15"
      />
      {/* Centro */}
      <circle cx="20" cy="20" r="2" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  );
}

// Map category to illustration component
export function CategoryIllustration({ category, className = "" }: { category: string; className?: string }) {
  switch (category) {
    case "reflexiones":
      return <SketchReflexiones className={className} />;
    case "ia":
      return <SketchIA className={className} />;
    case "marketing":
      return <SketchMarketing className={className} />;
    default:
      return <SketchGuia className={className} />;
  }
}

// Keep old name as alias
export const Gota = SketchGota;

import Link from "next/link";
import { SketchGota } from "./Gota";

export function Header() {
  return (
    <header className="flex items-center justify-between py-8">
      <Link href="/" className="group flex items-center gap-2.5">
        <SketchGota className="w-4 h-5 text-foreground opacity-60 transition-all group-hover:opacity-100 group-hover:-translate-y-0.5" />
        <span className="text-base tracking-tight font-medium">
          las gotas de mi vaso
        </span>
      </Link>
      <nav
        className="flex gap-5 text-sm"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        <Link
          href="/gotas-al-aire"
          className="text-muted hover:text-foreground transition-colors"
        >
          al aire
        </Link>
        <Link
          href="/gotas-a-tierra"
          className="text-muted hover:text-foreground transition-colors"
        >
          a tierra
        </Link>
        <Link
          href="/sobre-mi"
          className="text-muted hover:text-foreground transition-colors"
        >
          sobre m&iacute;
        </Link>
      </nav>
    </header>
  );
}

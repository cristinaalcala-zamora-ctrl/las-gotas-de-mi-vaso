import Link from "next/link";
import { getPostsBySection } from "@/lib/posts";
import { PostCard } from "@/components/PostCard";
import { SketchVaso, SketchLine, SketchArrow } from "@/components/Gota";

export default function Home() {
  const alAire = getPostsBySection("al-aire").slice(0, 3);
  const aTierra = getPostsBySection("a-tierra").slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="pb-20">
        <div className="flex flex-col sm:flex-row items-start gap-8 sm:gap-12">
          <SketchVaso className="w-20 h-24 text-foreground opacity-70 flex-shrink-0" />
          <div>
            <h1 className="text-3xl sm:text-4xl font-medium tracking-tight leading-snug mb-2">
              Las gotas de mi vaso
            </h1>
            <p className="text-sm text-muted mb-6" style={{ fontFamily: "var(--font-inter)" }}>
              por Cristina Alcal&aacute;-Zamora
            </p>
            <div className="text-base leading-relaxed text-muted space-y-3" style={{ fontFamily: "var(--font-inter)" }}>
              <p>
                Siempre hablamos de la gota que colm&oacute; el vaso como algo
                negativo. Pero un vaso tambi&eacute;n se llena de cosas buenas,
                gota a gota. Cada experiencia, cada idea, cada reflexi&oacute;n
                &mdash; todo mueve el nivel del agua.
              </p>
              <p>
                Esto es mi vaso. Y si alguna de mis gotas mueve un poco el
                nivel del tuyo, te la dejo. Es tuya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gotas al aire */}
      {alAire.length > 0 && (
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <h2
              className="text-xs uppercase tracking-[0.2em] text-muted"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              gotas al aire
            </h2>
            <SketchLine className="flex-1 h-2 text-foreground" />
          </div>
          <p
            className="text-xs text-muted mb-6"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            reflexiones, ideas sueltas, lo que flota
          </p>
          <div>
            {alAire.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="mt-6 flex items-center gap-2">
            <Link
              href="/gotas-al-aire"
              className="text-sm text-muted hover:text-foreground transition-colors"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              todas las gotas al aire
            </Link>
            <SketchArrow className="w-6 h-3 text-muted" />
          </div>
        </section>
      )}

      {/* Gotas a tierra */}
      {aTierra.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-2">
            <h2
              className="text-xs uppercase tracking-[0.2em] text-muted"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              gotas a tierra
            </h2>
            <SketchLine className="flex-1 h-2 text-foreground" />
          </div>
          <p
            className="text-xs text-muted mb-6"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            gu&iacute;as, recursos, lo pr&aacute;ctico
          </p>
          <div>
            {aTierra.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="mt-6 flex items-center gap-2">
            <Link
              href="/gotas-a-tierra"
              className="text-sm text-muted hover:text-foreground transition-colors"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              todas las gotas a tierra
            </Link>
            <SketchArrow className="w-6 h-3 text-muted" />
          </div>
        </section>
      )}
    </div>
  );
}

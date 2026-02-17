import { getPostsBySection } from "@/lib/posts";
import { PostCard } from "@/components/PostCard";
import { SketchLine } from "@/components/Gota";

export const metadata = {
  title: "Gotas a tierra | Las gotas de mi vaso",
  description: "Gu\u00edas, recursos, herramientas y todo lo pr\u00e1ctico que puedes aplicar ya.",
};

export default function GotasATierra() {
  const posts = getPostsBySection("a-tierra");

  return (
    <div>
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-2xl font-medium tracking-tight">
            Gotas a tierra
          </h1>
          <SketchLine className="flex-1 h-2 text-foreground" />
        </div>
        <p
          className="text-sm text-muted leading-relaxed max-w-md"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Lo que aterriza. Gu&iacute;as, herramientas, recursos y todo lo
          pr&aacute;ctico que puedes llevarte y aplicar.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-muted" style={{ fontFamily: "var(--font-inter)" }}>
          Todav&iacute;a no hay gotas a tierra... pero pronto.
        </p>
      ) : (
        <div>
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

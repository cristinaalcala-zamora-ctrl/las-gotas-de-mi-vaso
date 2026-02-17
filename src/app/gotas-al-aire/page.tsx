import { getPostsBySection } from "@/lib/posts";
import { PostCard } from "@/components/PostCard";
import { SketchLine } from "@/components/Gota";

export const metadata = {
  title: "Gotas al aire | Las gotas de mi vaso",
  description: "Reflexiones, ideas sueltas y todo lo que flota antes de aterrizar.",
};

export default function GotasAlAire() {
  const posts = getPostsBySection("al-aire");

  return (
    <div>
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-2xl font-medium tracking-tight">
            Gotas al aire
          </h1>
          <SketchLine className="flex-1 h-2 text-foreground" />
        </div>
        <p
          className="text-sm text-muted leading-relaxed max-w-md"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Lo que flota. Reflexiones, ideas sueltas, lo que pienso un martes
          cualquiera. Las gotas que a&uacute;n no han ca&iacute;do del todo.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-muted" style={{ fontFamily: "var(--font-inter)" }}>
          Todav&iacute;a no hay gotas al aire... pero pronto.
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

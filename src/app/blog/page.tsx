import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/PostCard";
import { SketchLine } from "@/components/Gota";

export const metadata = {
  title: "Todas las gotas | Las gotas de mi vaso",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <div className="flex items-center gap-3 mb-10">
        <h1 className="text-2xl font-medium tracking-tight">
          Todas las gotas
        </h1>
        <SketchLine className="flex-1 h-2 text-foreground" />
      </div>

      {posts.length === 0 ? (
        <p className="text-muted" style={{ fontFamily: "var(--font-inter)" }}>
          Todav&iacute;a no hay gotas... pero pronto caer&aacute; la primera.
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

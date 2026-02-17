import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import { MDXContent } from "@/components/MDXContent";
import { SketchLine, SketchArrow } from "@/components/Gota";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return {
      title: `${post.title} | Las gotas de mi vaso`,
      description: post.excerpt,
    };
  } catch {
    return { title: "Gota no encontrada" };
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <article>
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-10 group"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        <SketchArrow className="w-5 h-3 rotate-180 text-muted group-hover:text-foreground transition-colors" />
        todas las gotas
      </Link>

      <header className="mb-12">
        <div
          className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-muted mb-4"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <span>{post.category}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight leading-snug mb-5">
          {post.title}
        </h1>
        <div
          className="flex items-center gap-3 text-sm text-muted"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <time>{formatDate(post.date)}</time>
          <span className="opacity-30">/</span>
          <span>{post.readingTime}</span>
        </div>
        <SketchLine className="w-full h-2 text-foreground mt-8" />
      </header>

      <div className="prose">
        <MDXContent content={post.content} />
      </div>

      <footer className="mt-16 pt-6">
        <SketchLine className="w-full h-2 text-foreground mb-6" />
        <p
          className="text-sm text-muted italic"
        >
          Otra gota m&aacute;s en el vaso. Gracias por leer.
        </p>
      </footer>
    </article>
  );
}

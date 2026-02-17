import Link from "next/link";
import type { Post } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import { CategoryIllustration } from "./Gota";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex items-start gap-4 py-5 border-b border-border/60 hover:border-foreground/20 transition-colors"
    >
      {/* Category illustration */}
      <div className="mt-1 flex-shrink-0">
        <CategoryIllustration
          category={post.category}
          className="w-7 h-7 text-foreground opacity-20 group-hover:opacity-50 transition-opacity"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-medium leading-snug group-hover:opacity-70 transition-opacity">
          {post.title}
        </h3>
        {post.excerpt && (
          <p
            className="mt-1 text-muted text-sm line-clamp-2"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {post.excerpt}
          </p>
        )}
        <div
          className="mt-2 flex items-center gap-2 text-xs text-muted"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <span>{formatDate(post.date)}</span>
          <span className="opacity-30">/</span>
          <span>{post.readingTime}</span>
          <span className="opacity-30">/</span>
          <span>{post.category}</span>
        </div>
      </div>
    </Link>
  );
}

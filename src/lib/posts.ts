import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "content/posts");

export type Section = "al-aire" | "a-tierra";

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  section: Section;
  content: string;
  readingTime: string;
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    return getPostBySlug(slug);
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostsBySection(section: Section): Post[] {
  return getAllPosts().filter((p) => p.section === section);
}

export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt || "",
    category: data.category || "reflexiones",
    section: data.section || "al-aire",
    content,
    readingTime: `${Math.ceil(stats.minutes)} min`,
  };
}

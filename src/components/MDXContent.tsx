"use client";

import { useEffect, useState } from "react";

export function MDXContent({ content }: { content: string }) {
  const [html, setHtml] = useState("");

  useEffect(() => {
    // Simple markdown to HTML conversion for basic content
    let result = content;

    // Headers
    result = result.replace(/^### (.*$)/gm, "<h3>$1</h3>");
    result = result.replace(/^## (.*$)/gm, "<h2>$1</h2>");

    // Bold and italic
    result = result.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    result = result.replace(/\*(.*?)\*/g, "<em>$1</em>");

    // Links
    result = result.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
    );

    // Blockquotes
    result = result.replace(/^> (.*$)/gm, "<blockquote>$1</blockquote>");

    // Unordered lists
    result = result.replace(/^- (.*$)/gm, "<li>$1</li>");
    result = result.replace(
      /(<li>.*<\/li>\n?)+/g,
      (match) => `<ul>${match}</ul>`
    );

    // Horizontal rules
    result = result.replace(/^---$/gm, "<hr />");

    // Paragraphs - wrap lines that aren't already wrapped in HTML tags
    result = result
      .split("\n\n")
      .map((block) => {
        const trimmed = block.trim();
        if (!trimmed) return "";
        if (trimmed.startsWith("<")) return trimmed;
        return `<p>${trimmed.replace(/\n/g, "<br />")}</p>`;
      })
      .join("\n");

    setHtml(result);
  }, [content]);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

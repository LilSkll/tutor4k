"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/** Heavy markdown renderer — loaded via next/dynamic from Markdown. */
export function MarkdownRenderer({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        a: ({ ...props }) => (
          <a target="_blank" rel="noopener noreferrer" {...props} />
        ),
      }}
    >
      {content.replace(/<!--[\s\S]*?-->/g, "")}
    </ReactMarkdown>
  );
}

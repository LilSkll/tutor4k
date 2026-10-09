"use client";

import * as React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { WordHintText } from "@/components/shared/word-hint-text";

function hintifyChildren(
  children: React.ReactNode,
  courseId?: string,
): React.ReactNode {
  return React.Children.map(children, (child, index) => {
    if (typeof child === "string") {
      if (!child.trim()) return child;
      return (
        <WordHintText
          key={`hint-${index}`}
          text={child}
          courseId={courseId}
        />
      );
    }
    if (React.isValidElement<{ children?: React.ReactNode }>(child)) {
      if (child.props.children == null) return child;
      return React.cloneElement(child, {
        ...child.props,
        children: hintifyChildren(child.props.children, courseId),
      });
    }
    return child;
  });
}

/** Heavy markdown renderer — loaded via next/dynamic from Markdown. */
export function MarkdownRenderer({
  content,
  enableWordHints = false,
  courseId,
}: {
  content: string;
  enableWordHints?: boolean;
  courseId?: string;
}) {
  const wrap = (children: React.ReactNode) =>
    enableWordHints ? hintifyChildren(children, courseId) : children;

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        a: ({ ...props }) => (
          <a target="_blank" rel="noopener noreferrer" {...props} />
        ),
        p: ({ children }) => <p>{wrap(children)}</p>,
        li: ({ children }) => <li>{wrap(children)}</li>,
        td: ({ children }) => <td>{wrap(children)}</td>,
        th: ({ children }) => <th>{wrap(children)}</th>,
        blockquote: ({ children }) => <blockquote>{wrap(children)}</blockquote>,
      }}
    >
      {content.replace(/<!--[\s\S]*?-->/g, "")}
    </ReactMarkdown>
  );
}

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeRaw from "rehype-raw";
import { Components } from "react-markdown";

interface MarkdownRendererProps {
  content: string;
}

const components: Components = {
  h1: ({ children, ...props }) => (
    <h1 {...props} className="text-3xl font-bold mt-8 mb-4 text-foreground scroll-mt-20">
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 {...props} className="text-2xl font-semibold mt-8 mb-3 text-foreground scroll-mt-20 pb-2 border-b border-border">
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 {...props} className="text-xl font-semibold mt-6 mb-2 text-foreground scroll-mt-20">
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 {...props} className="text-lg font-medium mt-4 mb-2 text-foreground scroll-mt-20">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="my-4 text-foreground/90 leading-7">{children}</p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  em: ({ children }) => <em className="italic">{children}</em>,
  ul: ({ children }) => (
    <ul className="my-4 ml-6 list-disc space-y-2">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="my-4 ml-6 list-decimal space-y-2">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="text-foreground/90 leading-7">{children}</li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-6 pl-4 border-l-4 border-primary/50 italic text-muted-foreground bg-muted/30 py-2 pr-4 rounded-r-lg">
      {children}
    </blockquote>
  ),
  code: ({ className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || "");
    const isInline = !match && !className;

    if (isInline) {
      return (
        <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-accent">
          {children}
        </code>
      );
    }

    return (
      <code className="text-sm font-mono text-sidebar-foreground leading-relaxed" {...props}>
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="my-6 p-4 bg-sidebar-bg rounded-lg overflow-x-auto border border-sidebar-border">
      {children}
    </pre>
  ),
  hr: () => <hr className="my-8 border-border" />,
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border border-border bg-muted px-4 py-2 text-left font-semibold">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-border px-4 py-2">{children}</td>
  ),
};

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose-course animate-fade-in">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug, rehypeRaw]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}


import React from "react";

interface BlogMainContentProps {
  post: {
    content: React.ReactElement[];
    [key: string]: any;
  };
  headings: {
    id: string;
    text: string;
    level: number;
  }[];
  TableOfContents: React.ComponentType<{
    headings: {
      id: string;
      text: string;
      level: number;
    }[];
  }>;
}

const BlogMainContent: React.FC<BlogMainContentProps> = ({ post, headings, TableOfContents }) => (
  <div className="container mx-auto max-w-6xl px-4 grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-12 mb-20">
    <article
      id="article-content"
      className="prose prose-lg max-w-none
        prose-h1:mb-4 prose-h2:mb-4 prose-h3:mb-4 prose-h4:mb-4 prose-h5:mb-4 prose-h6:mb-4 prose-p:mb-4 prose-ul:mb-4 prose-ol:mb-4 prose-blockquote:mb-4
        prose-h2:text-2xl prose-h2:font-bold prose-h2:text-deewan-dark prose-h2:mt-10
        prose-h3:text-xl prose-h3:font-semibold prose-h3:text-deewan-dark/90 prose-h3:mt-8
        prose-p:text-deewan-dark/90 prose-p:leading-relaxed
        prose-ul:my-5 prose-li:my-2 prose-li:text-deewan-dark/80
        prose-a:text-deewan-primary prose-a:no-underline hover:prose-a:underline 
        prose-blockquote:border-deewan-primary prose-blockquote:bg-gray-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg
        prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8"
    >
      {/* Rendered content expects that all h2/h3 headings have an id in form heading-{index} */}
      {React.Children.map(post.content, (child, idx) => {
        if (
          React.isValidElement(child) &&
          (child.type === 'h2' || child.type === 'h3')
        ) {
          // Ensure IDs are deterministic and match TOC
          const id = `heading-${headings.findIndex(h => h.text === (child.props as any).children)}`;
          return React.cloneElement(child, { id: id });
        }
        return child;
      })}
    </article>
    <aside className="hidden lg:block">
      <TableOfContents headings={headings} />
    </aside>
  </div>
);

export default BlogMainContent;

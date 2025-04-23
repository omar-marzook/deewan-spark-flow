
import React from "react";
import PostAuthor from "./PostAuthor";

// This expects these props: post, headings, TableOfContents
const BlogMainContent = ({ post, headings, TableOfContents }) => (
  <div className="container mx-auto max-w-6xl px-4 grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-12 mb-20">
    <article
      id="article-content"
      className="prose prose-lg max-w-none prose-h2:text-2xl prose-h2:font-bold prose-h2:text-deewan-dark prose-h2:mt-10 prose-h2:mb-4 
                 prose-h3:text-xl prose-h3:font-semibold prose-h3:text-deewan-dark/90 prose-h3:mt-8 prose-h3:mb-3
                 prose-p:text-deewan-dark/90 prose-p:leading-relaxed prose-p:mb-5
                 prose-ul:my-5 prose-li:my-2 prose-li:text-deewan-dark/80
                 prose-a:text-deewan-primary prose-a:no-underline hover:prose-a:underline 
                 prose-blockquote:border-deewan-primary prose-blockquote:bg-gray-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg
                 prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8"
    >
      {post.content}
    </article>
    <aside className="hidden lg:block">
      <TableOfContents headings={headings} />
      <div className="sticky top-[calc(32px+300px)] mt-8">
        <PostAuthor author={post.author} />
      </div>
    </aside>
  </div>
);

export default BlogMainContent;

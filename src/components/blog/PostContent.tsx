import React from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import ShareSection from "./ShareSection";

export function useHeadingData(content: any[] | string) {
  const headings: {
    id: string;
    text: string;
    level: number;
  }[] = [];
  
  // Handle string-based content (markdown)
  if (typeof content === 'string') {
    // Extract headings from markdown content
    const headingRegex = /^(#{2,3})\s+(.+)$/gm;
    let match;
    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2];
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
      
      headings.push({
        id,
        text,
        level
      });
    }
    
    return {
      headings
    };
  }
  
  // Handle array-based content (existing format)
  let hydratedContent: React.ReactNode[] = [];
  if (Array.isArray(content)) {
    hydratedContent = content.map((item, idx) => {
      if (item.type === "heading" || item.type === "subheading" || item.type === "h2" || item.type === "h3") {
        const level = item.type === "heading" ? 2 : item.type === "h3" || item.type === "subheading" ? 3 : 2;
        const id = (item.text || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") + "-" + idx;
        headings.push({
          id,
          text: item.text,
          level
        });
        // Return heading element with ID
        if (level === 2) {
          return <h2 key={idx} id={id}>
              {item.text}
            </h2>;
        } else {
          return <h3 key={idx} id={id}>
              {item.text}
            </h3>;
        }
      }
      // Other content types
      switch (item.type) {
        case "paragraph":
          return <p key={idx}>{item.text}</p>;
        case "quote":
          return <blockquote key={idx}>
              "{item.text}"
              <footer className="mt-2 text-deewan-primary font-medium">
                {item.author}
              </footer>
            </blockquote>;
        case "image":
          return <figure key={idx}>
              <img src={item.src} alt={item.caption || ""} />
              {item.caption && <figcaption className="text-center text-sm text-deewan-gray mt-2">
                  {item.caption}
                </figcaption>}
            </figure>;
        default:
          return null;
      }
    });
  }
  
  return {
    hydratedContent,
    headings
  };
}


const PostContent = ({
  content,
  markdownContent,
  children
}: {
  content?: any[];
  markdownContent?: string;
  children?: React.ReactNode;
}) => {
  // If children provided, use that
  if (children) {
    return (
      <div className="space-y-4">
        {children}
        
      {/* Share section */}
      <ShareSection 
        blogUrl={typeof window !== 'undefined' ? window.location.href : ''} 
        title="Share this article" 
      />
      </div>
    );
  }

  // If markdown content is provided, render it
  if (markdownContent) {
    return (
      <div className="space-y-4">
        <ReactMarkdown
          components={{
            h2: ({ node, ...props }) => {
              const id = props.children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "";
              return <h2 id={id} className="font-bold text-2xl mt-10 mb-3">{props.children}</h2>;
            },
            h3: ({ node, ...props }) => {
              const id = props.children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "";
              return <h3 id={id} className="font-bold text-xl mt-8 mb-3">{props.children}</h3>;
            },
            blockquote: ({ node, ...props }) => (
              <blockquote className="rounded-xl px-6 py-5 mb-6 font-medium bg-deewan-primary/5 border-l-4 border-deewan-primary">{props.children}</blockquote>
            ),
            // Fix for DOM nesting error
            p: ({ node, children }) => {
              // Check if the paragraph contains only an image
              const childArray = React.Children.toArray(children);
              const hasOnlyImage = childArray.length === 1 && 
                React.isValidElement(childArray[0]) && 
                childArray[0].type === 'img';
              
              if (hasOnlyImage) {
                // Extract the image element
                const imgElement = childArray[0] as React.ReactElement;
                
                if (imgElement) {
                  const { src, alt } = imgElement.props;
                  
                  // Return a figure instead of a paragraph
                  return (
                    <figure className="w-full flex flex-col items-center my-6">
                      <img src={src} alt={alt || ""} className="rounded-3xl shadow border border-white/40" />
                      {alt && <figcaption className="text-center text-sm text-deewan-gray mt-2">{alt}</figcaption>}
                    </figure>
                  );
                }
              }
              
              // Regular paragraph
              return <p>{children}</p>;
            },
          }}
        >
          {markdownContent}
        </ReactMarkdown>
        
      {/* Share section */}
      <ShareSection 
        blogUrl={typeof window !== 'undefined' ? window.location.href : ''} 
        title="Share this article" 
      />
      </div>
    );
  }

  // Handle object-based content (non-JSX)
  return (
    <div className="space-y-4">
      {Array.isArray(content) && content.map((item, idx) => {
        if (React.isValidElement(item)) {
          // If it's already a React element, just return it
          return React.cloneElement(item, { key: idx });
        }
        
        // Otherwise handle based on type
        switch (item.type) {
          case "paragraph":
            return <p key={idx}>{item.text}</p>;
          case "heading":
          case "h2":
            return <h2 key={idx} id={`heading-${idx}`} className="font-bold text-2xl mt-10 mb-3">{item.text}</h2>;
          case "subheading":
          case "h3":
            return <h3 key={idx} id={`heading-sub-${idx}`} className="font-bold text-xl mt-8 mb-3">{item.text}</h3>;
          case "quote":
            return <blockquote key={idx} className="rounded-xl px-6 py-5 mb-6 font-medium bg-deewan-primary/5 border-l-4 border-deewan-primary">
              "{item.text}"
              <footer className="mt-2 text-deewan-primary font-medium">
                {item.author}
              </footer>
            </blockquote>;
          case "image":
            return <figure key={idx} className="w-full flex flex-col items-center">
              <img src={item.src} alt={item.caption || ""} className="rounded-3xl my-6 shadow border border-white/40" />
              {item.caption && <figcaption className="text-center text-sm text-deewan-gray mt-2">
                {item.caption}
              </figcaption>}
            </figure>;
          default:
            // For any unhandled type or if it's already a JSX element
            return item;
        }
      })}
      
      {/* Share section */}
      <ShareSection blogUrl={window.location.href} title="Share this article" />
    </div>
  );
};

export default PostContent;

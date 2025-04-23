import React from "react";
import { Twitter, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

// Returns: headings (for ToC) and rendered content
export function useHeadingData(content: any[]) {
  const headings: { id: string; text: string; level: number }[] = [];
  const hydratedContent = content.map((item, idx) => {
    if (item.type === "heading" || item.type === "subheading" || item.type === "h2" || item.type === "h3") {
      const level = item.type === "heading" ? 2 : item.type === "h3" || item.type === "subheading" ? 3 : 2;
      const id =
        (item.text || "")
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "") +
        "-" +
        idx;
      headings.push({ id, text: item.text, level });
      // Return heading element with ID
      if (level === 2) {
        return (
          <h2 key={idx} id={id}>
            {item.text}
          </h2>
        );
      } else {
        return (
          <h3 key={idx} id={id}>
            {item.text}
          </h3>
        );
      }
    }
    // Other content types
    switch (item.type) {
      case "paragraph":
        return <p key={idx}>{item.text}</p>;
      case "quote":
        return (
          <blockquote key={idx}>
            “{item.text}”
            <footer className="mt-2 text-deewan-primary font-medium">
              {item.author}
            </footer>
          </blockquote>
        );
      case "image":
        return (
          <figure key={idx}>
            <img src={item.src} alt={item.caption || ""} />
            {item.caption && (
              <figcaption className="text-center text-sm text-deewan-gray mt-2">
                {item.caption}
              </figcaption>
            )}
          </figure>
        );
      default:
        return null;
    }
    return null; // fallback, will be handled below in the actual main component
  });
  return { hydratedContent, headings };
}

// Updated PostContent to accept already-hydrated children for style improvements in BlogPostPage
const PostContent = ({ content, children }: { content: any[]; children?: React.ReactNode }) => {
  // For compatibility: fallback for existing usage
  if (children) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-p:text-deewan-dark prose-blockquote:rounded-xl prose-blockquote:bg-deewan-secondary/10 prose-blockquote:p-6 prose-blockquote:font-medium prose-blockquote:text-deewan-secondary/90 prose-img:rounded-lg prose-img:my-6"
        style={{
          fontFamily:
            "'Gilroy', 'Poppins', ui-sans-serif, system-ui, sans-serif"
        }}
      >
        {children}
      </motion.article>
    );
  }
  // Existing rendering as fallback
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-p:text-deewan-dark prose-blockquote:rounded-xl prose-blockquote:bg-deewan-secondary/10 prose-blockquote:p-6 prose-blockquote:font-medium prose-blockquote:text-deewan-secondary/90 prose-img:rounded-lg prose-img:my-6"
      style={{
        fontFamily:
          "'Gilroy', 'Poppins', ui-sans-serif, system-ui, sans-serif"
      }}
    >
      {content.map((item, idx) => {
        switch (item.type) {
          case "paragraph":
            return <p key={idx}>{item.text}</p>;
          case "heading":
            return <h2 key={idx}>{item.text}</h2>;
          case "quote":
            return (
              <blockquote key={idx}>
                “{item.text}”
                <footer className="mt-2 text-deewan-primary font-medium">
                  {item.author}
                </footer>
              </blockquote>
            );
          case "image":
            return (
              <figure key={idx}>
                <img src={item.src} alt={item.caption || ""} />
                {item.caption && (
                  <figcaption className="text-center text-sm text-deewan-gray mt-2">
                    {item.caption}
                  </figcaption>
                )}
              </figure>
            );
          default:
            return null;
        }
      })}
      {/* Social share icons */}
      <div className="glass flex gap-4 items-center mt-12 p-5 rounded-xl justify-center w-full shadow border border-white/20">
        <span className="font-medium text-deewan-dark">Share:</span>
        <a href="#" className="p-2 rounded-full bg-deewan-primary/10 text-deewan-primary hover:bg-deewan-primary/20 transition-colors">
          <Twitter className="w-5 h-5" />
        </a>
        <a href="#" className="p-2 rounded-full bg-deewan-secondary/10 text-deewan-secondary hover:bg-deewan-secondary/20 transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="#" className="p-2 rounded-full bg-deewan-accent/10 text-deewan-accent hover:bg-deewan-accent/20 transition-colors">
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </motion.article>
  );
};

export default PostContent;

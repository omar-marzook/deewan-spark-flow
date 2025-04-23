import React from "react";
import { Twitter, Linkedin, Mail, Facebook, Share2 } from "lucide-react";
import { motion } from "framer-motion";

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

const SOCIALS = [
  {
    label: "Twitter",
    icon: Twitter,
    url: "#"
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    url: "#"
  },
  {
    label: "Facebook",
    icon: Facebook,
    url: "#"
  },
  {
    label: "Email",
    icon: Mail,
    url: "#"
  }
];

const PostContent = ({ content, children }: { content: any[]; children?: React.ReactNode }) => {
  // If children provided, use that
  if (children) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-p:text-deewan-dark prose-blockquote:rounded-xl prose-blockquote:bg-deewan-secondary/10 prose-blockquote:p-6 prose-blockquote:font-medium prose-blockquote:text-deewan-secondary/90 prose-img:my-6"
        style={{
          fontFamily:
            "'Gilroy', 'Poppins', ui-sans-serif, system-ui, sans-serif"
        }}
      >
        {/* Make headings, paragraphs and spacing mimic the screenshot: bolder headings, a bit more line height */}
        <div className="space-y-7">
          {children}
        </div>
        {/* Share section */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 mt-12 mb-6 glass border border-white/30 rounded-xl py-4 px-6 shadow">
          <div className="flex items-center gap-2 text-deewan-dark font-semibold">
            <Share2 className="w-5 h-5 text-deewan-primary" />
            <span>Share:</span>
          </div>
          <div className="flex gap-2 ml-2">
            {SOCIALS.map(({ label, icon: Icon, url }) => (
              <a key={label} href={url} className={`p-2 rounded-full hover:bg-deewan-primary/20 bg-gray-100 transition-colors text-deewan-primary`} aria-label={label}>
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
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
      className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mb-4 prose-h3:text-xl prose-h3:mb-3 prose-p:text-deewan-dark prose-p:mb-5 prose-blockquote:rounded-xl prose-blockquote:bg-deewan-secondary/10 prose-blockquote:p-6 prose-blockquote:font-medium prose-blockquote:text-deewan-secondary/90 prose-img:rounded-lg prose-img:my-6"
      style={{
        fontFamily:
          "'Gilroy', 'Poppins', ui-sans-serif, system-ui, sans-serif"
      }}
    >
      <div className="space-y-7">
        {content.map((item, idx) => {
          switch (item.type) {
            case "paragraph":
              return <p key={idx}>{item.text}</p>;
            case "heading":
              return <h2 key={idx} className="font-bold text-2xl mt-10 mb-3">{item.text}</h2>;
            case "quote":
              return (
                <blockquote key={idx} className="rounded-xl px-6 py-5 mb-6 font-medium bg-deewan-secondary/10 border-l-4 border-deewan-primary">
                  "{item.text}"
                  <footer className="mt-2 text-deewan-primary font-medium">
                    {item.author}
                  </footer>
                </blockquote>
              );
            case "image":
              return (
                <figure key={idx} className="w-full flex flex-col items-center">
                  <img src={item.src} alt={item.caption || ""} className="rounded-3xl my-6 shadow border border-white/40" />
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
      </div>
      {/* Share section */}
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 mt-12 mb-6 glass border border-white/30 rounded-xl py-4 px-6 shadow">
        <div className="flex items-center gap-2 text-deewan-dark font-semibold">
          <Share2 className="w-5 h-5 text-deewan-primary" />
          <span>Share:</span>
        </div>
        <div className="flex gap-2 ml-2">
          {SOCIALS.map(({ label, icon: Icon, url }) => (
            <a key={label} href={url} className={`p-2 rounded-full hover:bg-deewan-primary/20 bg-gray-100 transition-colors text-deewan-primary`} aria-label={label}>
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default PostContent;

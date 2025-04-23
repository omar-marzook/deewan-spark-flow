
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { List } from "lucide-react";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

type TocSection = { id: string; text: string; level: number };

interface TableOfContentsStickyProps {
  headings: TocSection[];
}

const TableOfContentsSticky: React.FC<TableOfContentsStickyProps> = ({
  headings,
}) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = "";
      for (const heading of headings) {
        const el = document.getElementById(heading.id);
        if (el && el.getBoundingClientRect().top + window.scrollY - 120 <= scrollY) {
          current = heading.id;
        }
      }
      setActiveId(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  const onClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.scrollBy({ top: -80, behavior: "smooth" });
    }
  };

  if (headings.length === 0) return null;

  return (
    <nav
      className="sticky top-28 z-30 w-72 max-h-[70vh] overflow-auto rounded-2xl shadow-xl p-6 xl:block hidden glass"
      aria-label="Table of contents"
      style={{
        fontFamily: "'Gilroy', 'Poppins', sans-serif",
        backdropFilter: "blur(18px)",
        background: "rgba(255,255,255,0.56)",
        border: "1.5px solid rgba(255,255,255,0.28)"
      }}
    >
      <motion.div
        className="flex items-center gap-3 mb-4"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <List className="text-deewan-primary w-5 h-5" />
        <span className="font-bold text-lg text-deewan-dark">
          Table of Contents
        </span>
      </motion.div>
      <ul className="space-y-1">
        {headings.map((h) => (
          <li key={h.id} className="w-full">
            <button
              onClick={() => onClick(h.id)}
              className={`block w-full text-left px-2 py-1 rounded text-deewan-gray hover:bg-deewan-primary/10 hover:text-deewan-primary transition-colors font-medium outline-none focus:ring-2 focus:ring-deewan-primary
                ${activeId === h.id ? "bg-deewan-primary/10 text-deewan-primary" : ""}
                ${h.level === 3 ? "ml-4 text-sm" : ""}
              `}
              style={{ fontFamily: "inherit" }}
              tabIndex={0}
            >
              {h.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContentsSticky;

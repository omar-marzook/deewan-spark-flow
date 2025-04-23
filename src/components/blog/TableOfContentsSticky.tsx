
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { List } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

type TocSection = { id: string; text: string; level: number };

interface TableOfContentsStickyProps {
  headings: TocSection[];
}

const TableOfContentsSticky: React.FC<TableOfContentsStickyProps> = ({
  headings,
}) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (headings.length === 0) return;

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Find the first visible heading
      const visibleHeadings = entries.filter(entry => entry.isIntersecting);
      
      if (visibleHeadings.length === 0) return;
      
      // Get the first visible heading that passes the threshold
      const firstVisibleHeading = visibleHeadings.reduce((prev, current) => {
        return (current.intersectionRatio > prev.intersectionRatio) ? current : prev;
      }, visibleHeadings[0]);
      
      if (firstVisibleHeading.target.id) {
        setActiveId(firstVisibleHeading.target.id);
      }
    };

    // Create intersection observer
    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-100px 0px -66%",
      threshold: [0.1, 0.5, 0.9]
    });

    // Target all heading elements
    headings.forEach(heading => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    // Initial check for visible headings when page loads
    const checkInitialVisibility = () => {
      const scrollPosition = window.scrollY + 150;
      for (let i = 0; i < headings.length; i++) {
        const element = document.getElementById(headings[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(headings[i].id);
          break;
        }
      }
    };
    
    checkInitialVisibility();

    // Cleanup function
    return () => {
      headings.forEach(heading => {
        const element = document.getElementById(heading.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [headings]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: "smooth"
      });
      setActiveId(id);
    }
  };

  if (headings.length === 0) return null;

  return (
    <div
      className="sticky top-28 w-full rounded-2xl shadow-lg p-6 glass"
      style={{
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

      <ScrollArea className="max-h-[calc(100vh-260px)]">
        <ul className="space-y-1 pr-4">
          {headings.map((heading) => (
            <li key={heading.id} className="w-full">
              <button
                onClick={() => handleClick(heading.id)}
                className={`relative block w-full text-left px-2 py-1.5 rounded text-deewan-gray hover:bg-deewan-primary/10 hover:text-deewan-primary transition-colors font-medium
                  ${activeId === heading.id ? 
                    "bg-deewan-primary/10 text-deewan-primary pl-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-[70%] before:w-[3px] before:bg-deewan-primary before:rounded-full" : 
                    ""}
                  ${heading.level === 3 ? "ml-4 text-sm" : ""}
                `}
              >
                {heading.text}
              </button>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default TableOfContentsSticky;

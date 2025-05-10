  
import React, { useEffect, useState } from "react";
import { Bookmark } from "lucide-react";

const TableOfContentsInline = ({ headings }) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observerOptions = {
      rootMargin: "-100px 0px -60% 0px",
      threshold: 0
    };

    const observer = new window.IntersectionObserver(observerCallback, observerOptions);

    headings.forEach(heading => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (!headings.length) return null;

  return (
    <div className="sticky top-32 max-h-[calc(100vh-200px)] overflow-auto pr-2">
      <div className="rounded-xl glass p-5 border-l-4 border-deewan-primary">
        <h2 className="font-bold text-lg text-deewan-dark/90 mb-3 flex items-center">
          <Bookmark className="w-4 h-4 mr-2 text-deewan-primary" aria-hidden="true" />
          Table of contents
        </h2>
        <nav aria-label="Table of contents">
          <ul className="space-y-1 text-sm">
            {headings.map((heading) => (
              <li key={heading.id} className={`${heading.level === 3 ? 'ml-3' : ''}`}>
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(heading.id);
                    if (element) {
                      element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      });
                      // Set focus to the heading for better accessibility
                      element.setAttribute('tabindex', '-1');
                      element.focus({ preventScroll: true });
                    }
                  }}
                  className={`
                    block py-1 px-2 rounded hover:bg-deewan-primary/10 transition-colors
                    ${activeId === heading.id ? 
                      'text-deewan-primary font-medium bg-deewan-primary/5' : 
                      'text-deewan-dark/70'
                    }
                  `}
                  aria-current={activeId === heading.id ? "true" : "false"}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TableOfContentsInline;

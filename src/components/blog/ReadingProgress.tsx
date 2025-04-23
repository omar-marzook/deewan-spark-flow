
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface ReadingProgressProps {
  targetSelector?: string;
}

const ReadingProgress: React.FC<ReadingProgressProps> = ({
  targetSelector = "#blog-content",
}) => {
  const [progress, setProgress] = useState(0);
  const [scrolledPercent, setScrolledPercent] = useState(0);

  useEffect(() => {
    const calcProgress = () => {
      const target = document.querySelector(targetSelector);
      if (!target) return setProgress(0);
      const rect = target.getBoundingClientRect();
      const windowH = window.innerHeight;
      const total = rect.height - windowH + 40;
      const scrolled = Math.min(Math.max(window.scrollY - (rect.top + window.scrollY - 120), 0), total);
      setProgress(total > 0 ? scrolled / total : 0);
      setScrolledPercent(Math.min(100, Math.round((scrolled / (total || 1)) * 100)));
    };
    window.addEventListener("scroll", calcProgress, { passive: true });
    calcProgress();
    return () => window.removeEventListener("scroll", calcProgress);
  }, [targetSelector]);

  return (
    <div className="hidden xl:flex flex-col items-center sticky top-32 z-30 h-[320px] w-12 select-none">
      <motion.div
        className="glass relative h-full w-3 rounded-full bg-deewan-primary/10 border border-white/20 shadow-inner my-4"
        style={{ fontFamily: "'Gilroy', 'Poppins', sans-serif" }}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="absolute bottom-0 left-0 w-full rounded-full bg-deewan-primary"
          style={{
            height: `${Math.round(progress * 100)}%`,
            transition: "height 0.3s",
          }}
        />
        {/* Optional percent indicator */}
        <span className="absolute -right-10 top-1/2 -translate-y-1/2 text-sm font-bold text-deewan-primary bg-white/70 px-2 py-1 rounded-lg shadow border border-white/40">
          {scrolledPercent}%
        </span>
      </motion.div>
    </div>
  );
};

export default ReadingProgress;

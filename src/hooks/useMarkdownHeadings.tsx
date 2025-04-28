
import { useState, useEffect } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export const useMarkdownHeadings = (content: string | undefined): Heading[] => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    if (!content) {
      setHeadings([]);
      return;
    }

    const extractedHeadings: Heading[] = [];
    const headingRegex = /^(#{1,3})\s+(.+)$/gm;
    
    let match;
    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      
      extractedHeadings.push({
        id,
        text,
        level
      });
    }
    
    setHeadings(extractedHeadings);
  }, [content]);

  return headings;
};

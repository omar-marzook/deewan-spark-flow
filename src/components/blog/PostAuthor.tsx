
import React from "react";
import { Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const PostAuthor = ({ author }: { author: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass flex items-center gap-6 p-6 md:p-8 rounded-2xl border border-white/30 shadow-xl"
    >
      {/* Avatar */}
      <div className="flex-shrink-0">
        <img
          src={author.avatar}
          alt={author.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-deewan-primary"
        />
      </div>
      {/* Info */}
      <div>
        <div className="font-bold text-lg text-deewan-dark">{author.name}</div>
        <div className="text-deewan-primary mb-1">{author.bio}</div>
        {/* Social */}
        <div className="flex space-x-2 mt-1">
          {author.socials?.linkedin && (
            <a
              href={author.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-deewan-primary/10 text-deewan-primary hover:bg-deewan-primary/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {author.socials?.twitter && (
            <a
              href={author.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-deewan-secondary/10 text-deewan-secondary hover:bg-deewan-secondary/20 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PostAuthor;

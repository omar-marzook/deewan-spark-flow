
import React from "react";
import { Linkedin, Twitter, User } from "lucide-react";
import { motion } from "framer-motion";

const PostAuthor = ({ author }: { author: any }) => {
  if (!author) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass flex flex-col gap-4 p-5 rounded-xl border border-white/30 shadow-lg"
    >
      <h4 className="font-bold text-lg text-deewan-dark/90 flex items-center">
        <User className="w-4 h-4 mr-2 text-deewan-primary" />
        About the Author
      </h4>
      
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <img
            src={author.avatar}
            alt={author.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-deewan-primary"
          />
        </div>
        {/* Name and role */}
        <div>
          <div className="font-bold text-base text-deewan-dark">{author.name}</div>
          <div className="text-xs text-deewan-primary">{author.role || ''}</div>
        </div>
      </div>
      
      {/* Bio */}
      {author.bio && (
        <div className="text-sm text-deewan-dark/80">{author.bio}</div>
      )}
      
      {/* Social */}
      <div className="flex space-x-2 mt-1">
        {author.linkedin && (
          <a
            href={author.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        )}
        {author.twitter && (
          <a
            href={author.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-deewan-secondary/10 text-deewan-secondary hover:bg-deewan-secondary/20 transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default PostAuthor;

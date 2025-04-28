
import { useEffect, useState } from 'react';

export interface PostMetadata {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  category: string;
  readTime: string;
  author?: {
    name: string;
    role: string;
    avatar: string;
  };
}

export interface Post {
  metadata: PostMetadata;
  content: string;
}

// Simple frontmatter parser for browser environment
const parseFrontMatter = (markdown: string): { frontmatter: any; content: string } => {
  const frontMatterRegex = /^---\s*([\s\S]*?)\s*---/;
  const match = frontMatterRegex.exec(markdown);
  
  if (!match) {
    return { frontmatter: {}, content: markdown };
  }
  
  const frontMatterBlock = match[1];
  const content = markdown.replace(frontMatterRegex, '').trim();
  const frontMatter = {};
  
  // Parse the frontmatter into an object
  frontMatterBlock.split('\n').forEach(line => {
    const [key, ...valueArr] = line.split(':');
    if (key && valueArr.length) {
      let value = valueArr.join(':').trim();
      // Handle nested objects like author
      if (key.includes('.')) {
        const [parent, child] = key.split('.');
        frontMatter[parent] = frontMatter[parent] || {};
        frontMatter[parent][child] = value;
      } else {
        // Remove quotes if present
        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.slice(1, -1);
        }
        frontMatter[key.trim()] = value;
      }
    }
  });
  
  return { frontmatter: frontMatter, content };
};

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  try {
    // Try to fetch the markdown file with the .md extension
    let response = await fetch(`/posts/${slug}.md`);
    
    // If not found, try without extension
    if (!response.ok) {
      response = await fetch(`/posts/${slug}`);
    }
    
    // If still not found, check specific files we know about
    if (!response.ok) {
      // Try known filenames based on the blog slugs mentioned in the code
      if (slug === 'introducing-deewan-omni-channel-chat') {
        response = await fetch('/posts/omni-channel-launch.md');
      } else if (slug === 'customer-support-best-practices-2025') {
        response = await fetch('/posts/customer-support-best-practices.md');
      } else if (slug === 'ensuring-security-in-business-communications') {
        response = await fetch('/posts/security-in-communications.md');
      }
      
      if (!response.ok) {
        console.error(`Failed to fetch post with slug: ${slug}`);
        return null;
      }
    }
    
    const markdownWithMeta = await response.text();
    const { frontmatter, content } = parseFrontMatter(markdownWithMeta);
    
    // Create a correctly structured post metadata object
    const metadata: PostMetadata = {
      title: frontmatter.title || 'Untitled Post',
      date: frontmatter.date || new Date().toISOString().split('T')[0],
      slug: slug,
      excerpt: frontmatter.excerpt || '',
      coverImage: frontmatter.coverImage || '/placeholder.svg',
      category: frontmatter.category || 'Uncategorized',
      readTime: frontmatter.readTime || '3 min',
      author: frontmatter.author || {
        name: frontmatter['author.name'] || 'Anonymous',
        role: frontmatter['author.role'] || 'Author',
        avatar: frontmatter['author.avatar'] || '/placeholder.svg'
      }
    };
    
    return {
      metadata,
      content
    };
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error);
    return null;
  }
};

export const getAllPosts = async (): Promise<PostMetadata[]> => {
  // Map of slugs used in the URL to the actual file names in the public/posts folder
  const slugFileMap = {
    'introducing-deewan-omni-channel-chat': 'omni-channel-launch.md',
    'customer-support-best-practices-2025': 'customer-support-best-practices.md',
    'ensuring-security-in-business-communications': 'security-in-communications.md'
  };
  
  const slugs = Object.keys(slugFileMap);
  
  const postsPromises = slugs.map(async (slug) => {
    const post = await getPostBySlug(slug);
    return post ? { ...post.metadata, slug } : null;
  });
  
  const posts = (await Promise.all(postsPromises)).filter(Boolean) as PostMetadata[];
  
  // Sort posts by date (newest first)
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};

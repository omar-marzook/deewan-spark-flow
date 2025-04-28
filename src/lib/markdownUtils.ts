
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
  subtitle?: string;
}

export interface Post {
  metadata: PostMetadata;
  content: string;
}

// Simple frontmatter parser for browser environment
const parseFrontMatter = (markdown: string): { frontmatter: any; content: string } => {
  if (!markdown) {
    console.error("Empty markdown content received");
    return { frontmatter: {}, content: "" };
  }

  const frontMatterRegex = /^---\s*([\s\S]*?)\s*---/;
  const match = frontMatterRegex.exec(markdown);
  
  if (!match) {
    console.warn("No frontmatter found in markdown");
    return { frontmatter: {}, content: markdown };
  }
  
  const frontMatterBlock = match[1];
  const content = markdown.replace(frontMatterRegex, '').trim();
  const frontMatter: Record<string, any> = {};
  
  // Parse the frontmatter into an object
  frontMatterBlock.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      
      // Remove quotes if present
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      
      // Handle nested objects like author
      if (key.includes('.')) {
        const [parent, child] = key.split('.');
        frontMatter[parent] = frontMatter[parent] || {};
        frontMatter[parent][child] = value;
      } else {
        frontMatter[key] = value;
      }
    }
  });
  
  // Special handling for author object
  if (frontMatter.author && typeof frontMatter.author === 'string') {
    // If author is a string but we also have author.* properties
    const authorName = frontMatter.author;
    frontMatter.author = {
      name: authorName,
      role: frontMatter['author.role'] || 'Author',
      avatar: frontMatter['author.avatar'] || '/placeholder.svg'
    };
  } else if (typeof frontMatter.author === 'object') {
    // Make sure all required fields exist
    frontMatter.author.name = frontMatter.author.name || 'Anonymous';
    frontMatter.author.role = frontMatter.author.role || 'Author';
    frontMatter.author.avatar = frontMatter.author.avatar || '/placeholder.svg';
  } else if (frontMatter['author.name']) {
    // Handle case where we have author.* properties but no author object
    frontMatter.author = {
      name: frontMatter['author.name'],
      role: frontMatter['author.role'] || 'Author',
      avatar: frontMatter['author.avatar'] || '/placeholder.svg'
    };
    
    // Clean up the separate properties
    delete frontMatter['author.name'];
    delete frontMatter['author.role'];
    delete frontMatter['author.avatar'];
  }
  
  return { frontmatter: frontMatter, content };
};

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  try {
    console.log(`Fetching post with slug: ${slug}`);
    
    // Try to fetch the markdown file with the .md extension
    let response = await fetch(`/posts/${slug}.md`);
    console.log(`First attempt status: ${response.status}`);
    
    // If not found, try without extension
    if (!response.ok) {
      response = await fetch(`/posts/${slug}`);
      console.log(`Second attempt status: ${response.status}`);
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
      
      console.log(`Fallback attempt status: ${response.status}`);
      
      if (!response.ok) {
        console.error(`Failed to fetch post with slug: ${slug}`);
        return null;
      }
    }
    
    const markdownWithMeta = await response.text();
    console.log(`Got markdown content, length: ${markdownWithMeta.length}`);
    
    const { frontmatter, content } = parseFrontMatter(markdownWithMeta);
    console.log(`Parsed frontmatter:`, frontmatter);
    
    // Create a correctly structured post metadata object
    const metadata: PostMetadata = {
      title: frontmatter.title || 'Untitled Post',
      date: frontmatter.date || new Date().toISOString().split('T')[0],
      slug: slug,
      excerpt: frontmatter.excerpt || '',
      coverImage: frontmatter.coverImage || '/placeholder.svg',
      category: frontmatter.category || 'Uncategorized',
      readTime: frontmatter.readTime || '3 min',
      subtitle: frontmatter.subtitle || '',
      author: frontmatter.author || {
        name: 'Anonymous',
        role: 'Author',
        avatar: '/placeholder.svg'
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


import matter from 'gray-matter';

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

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  try {
    const response = await fetch(`/posts/${slug}.md`);
    
    if (!response.ok) {
      console.error(`Failed to fetch post with slug: ${slug}`);
      return null;
    }
    
    const markdownWithMeta = await response.text();
    const { data, content } = matter(markdownWithMeta);
    
    return {
      metadata: data as PostMetadata,
      content
    };
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error);
    return null;
  }
};

export const getAllPosts = async (): Promise<PostMetadata[]> => {
  // This is a simplified approach - in a real app, you might want to have an index
  // file or API endpoint that lists all available posts
  const slugs = [
    'introducing-deewan-omni-channel-chat',
    'customer-support-best-practices-2025',
    'ensuring-security-in-business-communications'
  ];
  
  const postsPromises = slugs.map(async (slug) => {
    const post = await getPostBySlug(slug);
    return post ? post.metadata : null;
  });
  
  const posts = (await Promise.all(postsPromises)).filter(Boolean) as PostMetadata[];
  
  // Sort posts by date (newest first)
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};

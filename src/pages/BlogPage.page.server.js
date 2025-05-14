// Server-side logic for the Blog page
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

// This function runs before rendering the page on the server
export async function onBeforeRender(pageContext) {
  // Fetch blog posts data
  const blogPosts = await getBlogPosts();
  
  const pageProps = {
    blogPosts
  };
  
  return {
      pageContext: {
          pageProps,
          // Add SEO metadata
          title: 'Blog - Deewan',
          description:
              'Explore the latest insights, trends, and updates in communication solutions from Deewan.',
          keywords:
              'Deewan blog, communication solutions, customer experience, omnichannel, chatbots, WhatsApp Business',
          ogType: 'blog',
          ogImage: '/media/deewan-og.png',
      },
  };
}

// Helper function to get blog posts
async function getBlogPosts() {
  try {
    const postsDirectory = path.join(process.cwd(), 'src/blog-posts');
    const filenames = await fs.readdir(postsDirectory);
    
    const posts = await Promise.all(
      filenames.map(async (filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = await fs.readFile(filePath, 'utf8');
        
        // Use gray-matter to parse the post metadata section
        const { data, content } = matter(fileContents);
        const slug = filename.replace(/\.md$/, '');
        
        return {
          slug,
          title: data.title,
          date: data.date,
          excerpt: data.excerpt,
          coverImage: data.coverImage,
          author: data.author,
          content
        };
      })
    );
    
    // Sort posts by date
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

// Control which data is passed to the client
export function passToClient(pageContext) {
  return {
    pageProps: pageContext.pageProps,
    title: pageContext.title,
    description: pageContext.description,
    keywords: pageContext.keywords,
    ogType: pageContext.ogType,
    ogImage: pageContext.ogImage
  };
}
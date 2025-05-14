// Server-side logic for the BlogPostPage
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// This function runs before rendering the page on the server
export async function onBeforeRender(pageContext) {
  const { slug } = pageContext.routeParams;
  
  try {
    // Read the blog post content from the markdown file
    const blogPostPath = path.join(process.cwd(), 'src/blog-posts', `${slug}.md`);
    const fileContents = fs.readFileSync(blogPostPath, 'utf8');
    
    // Parse the markdown content with frontmatter
    const { data, content } = matter(fileContents);
    
    // Prepare the page props
    const pageProps = {
      post: {
        slug,
        title: data.title,
        date: data.date,
        author: data.author,
        excerpt: data.excerpt,
        content
      }
    };
    
    return {
      pageContext: {
        pageProps,
        // Add SEO metadata using the blog post data
        title: data.title ? `${data.title} - Deewan Blog` : 'Blog Post - Deewan',
        description: data.excerpt || 'Read our latest blog post on Deewan'
      }
    };
  } catch (error) {
    console.error(`Error loading blog post ${slug}:`, error);
    
    // Return a 404 status
    return {
      pageContext: {
        is404: true,
        pageProps: {
          error: `Blog post "${slug}" not found`
        }
      }
    };
  }
}

// Control which data is passed to the client
export function passToClient(pageContext) {
  return {
    pageProps: pageContext.pageProps,
    title: pageContext.title,
    description: pageContext.description,
    routeParams: pageContext.routeParams,
    is404: pageContext.is404
  };
}
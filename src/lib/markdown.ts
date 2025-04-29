import matter from 'gray-matter';

// Use Vite's import.meta.glob to dynamically import all markdown files
const blogPostFiles = import.meta.glob('../blog-posts/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
});

// Create a mapping of slugs to content
const blogPostsContent: Record<string, string> = {};

// Process each blog post file
Object.entries(blogPostFiles).forEach(([path, content]) => {
  // Extract the slug from the path (filename without extension)
  const slug = path.split('/').pop()?.replace(/\.md$/, '');
  if (slug) {
    blogPostsContent[slug] = content;
  }
});

// Available blog posts are dynamically loaded from the blog-posts directory

export function getPostSlugs() {
  try {
    // Return the keys from our mapping
    return Object.keys(blogPostsContent);
  } catch (error) {
    console.error('Error getting blog post slugs:', error);
    return [];
  }
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  
  try {
    // Get the content from our mapping
    const fileContents = blogPostsContent[realSlug];
    
    if (!fileContents) {
      console.error(`Blog post not found: ${slug}`);
      return null;
    }
    
    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents);
    
    // Convert the content to the format expected by the existing PostContent component
    const formattedContent = formatMarkdownToContentArray(content);
    
    return {
      slug: realSlug,
      frontmatter: data,
      content: formattedContent,
      rawContent: content
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

export function getAllPosts() {
  try {
    // Get all post slugs
    const slugs = getPostSlugs();
    
    // Map each slug to its post data
    const posts = slugs
      .map(slug => getPostBySlug(slug))
      .filter(Boolean) // Remove null values
      .sort((post1, post2) => {
        const date1 = new Date(post1?.frontmatter.date || 0);
        const date2 = new Date(post2?.frontmatter.date || 0);
        return date2.getTime() - date1.getTime(); // Sort by date descending
      });
    
    return posts;
  } catch (error) {
    console.error('Error getting all posts:', error);
    return [];
  }
}

// Helper function to convert markdown content to the format expected by PostContent
function formatMarkdownToContentArray(markdown: string) {
  const lines = markdown.split('\n');
  const contentArray = [];
  let currentBlock: { type: string; text: string; author?: string } = { type: 'paragraph', text: '' };
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Handle headings
    if (line.startsWith('## ')) {
      if (currentBlock.text) contentArray.push(currentBlock);
      currentBlock = { type: 'heading', text: line.replace('## ', '') };
      contentArray.push(currentBlock);
      currentBlock = { type: 'paragraph', text: '' };
      continue;
    }
    
    // Handle subheadings
    if (line.startsWith('### ')) {
      if (currentBlock.text) contentArray.push(currentBlock);
      currentBlock = { type: 'subheading', text: line.replace('### ', '') };
      contentArray.push(currentBlock);
      currentBlock = { type: 'paragraph', text: '' };
      continue;
    }
    
    // Handle images
    if (line.startsWith('![') && line.includes('](') && line.endsWith(')')) {
      if (currentBlock.text) contentArray.push(currentBlock);
      
      const altTextMatch = line.match(/!\[(.*?)\]/);
      const srcMatch = line.match(/\((.*?)\)/);
      
      const altText = altTextMatch ? altTextMatch[1] : '';
      const src = srcMatch ? srcMatch[1] : '';
      
      contentArray.push({
        type: 'image',
        src,
        caption: altText
      });
      
      currentBlock = { type: 'paragraph', text: '' };
      continue;
    }
    
    // Handle blockquotes
    if (line.startsWith('> ')) {
      if (currentBlock.type !== 'quote') {
        if (currentBlock.text) contentArray.push(currentBlock);
        currentBlock = { type: 'quote', text: line.replace('> ', ''), author: '' };
      } else {
        // Check if this is an attribution line
        if (line.startsWith('> —') || line.startsWith('> -')) {
          currentBlock.author = line.replace(/^> [—-]\s*/, '');
        } else {
          currentBlock.text += ' ' + line.replace('> ', '');
        }
      }
      
      // If next line is not a blockquote, push current and reset
      if (!lines[i + 1]?.trim().startsWith('> ')) {
        contentArray.push(currentBlock);
        currentBlock = { type: 'paragraph', text: '' };
      }
      continue;
    }
    
    // Handle empty lines - they separate paragraphs
    if (line === '') {
      if (currentBlock.text) {
        contentArray.push(currentBlock);
        currentBlock = { type: 'paragraph', text: '' };
      }
      continue;
    }
    
    // Regular paragraph text
    if (currentBlock.type === 'paragraph') {
      currentBlock.text += (currentBlock.text ? ' ' : '') + line;
    } else {
      if (currentBlock.text) contentArray.push(currentBlock);
      currentBlock = { type: 'paragraph', text: line };
    }
  }
  
  // Add the last block if it has content
  if (currentBlock.text) {
    contentArray.push(currentBlock);
  }
  
  return contentArray;
}
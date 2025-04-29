import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'public/blog-posts');

export function getPostSlugs() {
  try {
    return fs.readdirSync(postsDirectory)
      .filter(file => file.endsWith('.md'));
  } catch (error) {
    console.error('Error reading blog posts directory:', error);
    return [];
  }
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
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
  const slugs = getPostSlugs();
  const posts = slugs
    .map(slug => getPostBySlug(slug))
    .filter(Boolean) // Remove null values
    .sort((post1, post2) => {
      const date1 = new Date(post1?.frontmatter.date || 0);
      const date2 = new Date(post2?.frontmatter.date || 0);
      return date2.getTime() - date1.getTime(); // Sort by date descending
    });
  
  return posts;
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
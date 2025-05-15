import React from 'react'
import BlogPostPage from '../BlogPostPage'
import { getPostBySlug } from '@/lib/markdown'

export const Page = BlogPostPage

export async function onBeforeRender(pageContext) {
  const { slug } = pageContext.routeParams
  
  // Fetch the blog post data based on the slug
  let post = null
  let title = 'Deewan Blog Post'
  let description = 'Read our latest insights on communication solutions.'
  
  try {
    const markdownPost = getPostBySlug(slug)
    
    if (markdownPost) {
      const { frontmatter, content, rawContent } = markdownPost
      
      // Process the post data to match the expected format in BlogPostPage
      post = {
        title: frontmatter.title,
        subtitle: frontmatter.subtitle || frontmatter.excerpt,
        category: frontmatter.category,
        coverImage: frontmatter.coverImage,
        publishDate: frontmatter.date,
        readTime: frontmatter.readTime || '5 min',
        author: frontmatter.author,
        content: content,
        rawContent: rawContent,
        // Extract headings from the raw content
        headings: extractHeadings(rawContent)
      }
      
      title = `${frontmatter.title} | Deewan Blog`
      description = frontmatter.excerpt || description
    }
  } catch (error) {
    console.error(`Error fetching blog post for slug ${slug}:`, error)
  }
  
  return {
    pageContext: {
      // Pass the slug and post data as props to the page component
      pageProps: { 
        slug,
        post
      },
      // Set the document title and description based on the blog post
      documentProps: {
        title,
        description
      }
    }
  }
}

// Helper function to extract headings from markdown content
function extractHeadings(content) {
  if (!content || typeof content !== 'string') return []
  
  const headings = []
  const headingRegex = /^(#{2,3})\s+(.+)$/gm
  let match
  
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length
    const text = match[2]
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
    
    headings.push({
      id,
      text,
      level
    })
  }
  
  return headings
}
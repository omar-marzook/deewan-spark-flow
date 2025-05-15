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
    post = getPostBySlug(slug)
    
    if (post) {
      title = `${post.title} | Deewan Blog`
      description = post.excerpt || description
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
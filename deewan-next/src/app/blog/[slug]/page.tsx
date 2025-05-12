import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/markdown";
import Image from "next/image";

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found | Deewan Blog",
      description: "The requested blog post could not be found.",
    };
  }
  
  return {
    title: `${post.title} | Deewan Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-deewan-primary hover:underline mb-8"
        >
          ← Back to all posts
        </Link>
        
        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center text-gray-600 mb-6">
              <time dateTime={post.date}>{post.date}</time>
              <span className="mx-2">•</span>
              <span>{post.author}</span>
            </div>
            
            {post.coverImage && (
              <div className="aspect-video relative overflow-hidden rounded-lg mb-8">
                <img 
                  src={post.coverImage} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </header>
          
          <div className="prose prose-lg max-w-none">
            {post.content.map((block, index) => {
              switch (block.type) {
                case 'heading':
                  return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{block.text}</h2>;
                case 'subheading':
                  return <h3 key={index} className="text-xl font-semibold mt-6 mb-3">{block.text}</h3>;
                case 'paragraph':
                  return <p key={index} className="mb-4">{block.text}</p>;
                case 'quote':
                  return (
                    <blockquote key={index} className="border-l-4 border-deewan-primary pl-4 italic my-6">
                      <p>{block.text}</p>
                      {block.author && <cite className="block text-right mt-2">— {block.author}</cite>}
                    </blockquote>
                  );
                case 'image':
                  return (
                    <figure key={index} className="my-8">
                      <img 
                        src={block.src} 
                        alt={block.caption || ''} 
                        className="w-full rounded-lg"
                      />
                      {block.caption && (
                        <figcaption className="text-center text-gray-600 mt-2">{block.caption}</figcaption>
                      )}
                    </figure>
                  );
                default:
                  return null;
              }
            })}
          </div>
        </article>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold mb-4">Share this article</h3>
          <div className="flex space-x-4">
            <a 
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://deewan.sa/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-deewan-primary hover:underline"
            >
              Twitter
            </a>
            <a 
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://deewan.sa/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-deewan-primary hover:underline"
            >
              LinkedIn
            </a>
            <a 
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://deewan.sa/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-deewan-primary hover:underline"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
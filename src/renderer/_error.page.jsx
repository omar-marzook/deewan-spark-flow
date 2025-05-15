import React from 'react'

export const Page = ({ is404, errorInfo }) => {
  if (is404) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-8">The page you're looking for doesn't exist.</p>
        <a href="/" className="px-4 py-2 bg-deewan-primary text-white rounded hover:bg-deewan-primary/90">
          Go Home
        </a>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
      <p className="text-lg mb-8">We're sorry, but there was an error processing your request.</p>
      {errorInfo && (
        <div className="bg-gray-100 p-4 rounded mb-8 max-w-2xl overflow-auto">
          <pre>{JSON.stringify(errorInfo, null, 2)}</pre>
        </div>
      )}
      <a href="/" className="px-4 py-2 bg-deewan-primary text-white rounded hover:bg-deewan-primary/90">
        Go Home
      </a>
    </div>
  )
}
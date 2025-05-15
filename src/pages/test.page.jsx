import React from 'react'

export const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-4">Test Page</h1>
      <p className="text-lg mb-8">This is a test page to verify Vike routing.</p>
      <a href="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Go Home
      </a>
    </div>
  )
}

export const documentProps = {
  title: 'Test Page',
  description: 'A test page for Vike routing'
}
import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { PageShell } from './PageShell'
import '../index.css'
import { Buffer } from 'buffer'

// Make Buffer available globally
window.Buffer = Buffer

export async function render(pageContext) {
  const { Page, pageProps } = pageContext
  
  hydrateRoot(
    document.getElementById('root'),
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )
}

// This is optional but recommended for better SEO
export const clientRouting = true
export const hydrationCanBeAborted = true
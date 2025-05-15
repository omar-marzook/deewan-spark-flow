import { hydrateRoot } from 'react-dom/client'
import React from 'react'

export { render }

async function render(pageContext) {
  const { Page } = pageContext
  hydrateRoot(
    document.getElementById('root'),
    <Page />
  )
}
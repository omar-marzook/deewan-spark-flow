import React from 'react'
import { usePageContext } from '../renderer/usePageContext'

export function Link({ href, children, ...props }) {
  const pageContext = usePageContext()
  const isActive = pageContext.urlPathname === href
  
  return (
    <a
      href={href}
      {...props}
      className={`${props.className || ''} ${isActive ? 'active' : ''}`}
    >
      {children}
    </a>
  )
}
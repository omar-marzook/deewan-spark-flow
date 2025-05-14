import { createRoot, hydrateRoot } from 'react-dom/client';
import { PageContextProvider } from './renderer/usePageContext';
import App from './App';
import './index.css';
import { Buffer } from 'buffer';
import { BrowserRouter } from 'react-router-dom';

// Make Buffer available globally
window.Buffer = Buffer;

export async function render(pageContext: any) {
  const { Page, pageProps } = pageContext;
  
  const page = (
    <PageContextProvider pageContext={pageContext}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PageContextProvider>
  );

  const container = document.getElementById('root');
  
  if (!container) {
    throw new Error('Could not find root element');
  }
  
  if (pageContext.isHydration) {
    hydrateRoot(container, page);
  } else {
    createRoot(container).render(page);
  }
}
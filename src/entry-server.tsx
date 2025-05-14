import ReactDOMServer from 'react-dom/server';
import { PageContextProvider } from './renderer/usePageContext';
import App from './App';
import { StaticRouter } from 'react-router-dom/server';
import './index.css';

export async function render(pageContext: any) {
  const { urlOriginal } = pageContext;
  
  const pageHtml = ReactDOMServer.renderToString(
    <PageContextProvider pageContext={pageContext}>
      <StaticRouter location={urlOriginal}>
        <App />
      </StaticRouter>
    </PageContextProvider>
  );
  
  return { pageHtml };
}
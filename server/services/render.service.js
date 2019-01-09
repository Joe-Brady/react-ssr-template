import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Loadable from "react-loadable";
import { getBundles } from "react-loadable/webpack";
import { ServerStyleSheet } from "styled-components";
import App from "../../client/App";
import createFullPageHtml from "../../client/document";
import stats from "../../dist/react-loadable.json";

const renderPageOnServer = url => {
  const appStylesheet = new ServerStyleSheet();
  const context = {};
  const modules = [];

  const appHtml = ReactDOMServer.renderToString(
    appStylesheet.collectStyles(
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <StaticRouter location={url} context={context}>
          <App />
        </StaticRouter>
      </Loadable.Capture>
    )
  );
  const appBundles = getBundles(stats, modules);
  const appStyles = appStylesheet.getStyleTags();

  const fullPageHtml = createFullPageHtml(appHtml, appBundles, appStyles);

  return fullPageHtml;
};

export { renderPageOnServer };

const createFullPageHtml = (appHtml, appBundles, appStyles) =>
  `<html>
    <head>
      <link rel="icon" href="static/favicon.ico">
      <title>React SSR and code-splitting template</title>
      ${appStyles}
      <meta
        name="viewport"
        content="minimum-scale=1,initial-scale=1, width=device-width, shrink-to-fit=no"
      >
    </head>
    <body>
      <div id="root">${appHtml}</div>
      ${appBundles
        .map(bundle => {
          return `<script src="${bundle.file}"></script>`;
        })
        .join("\n")}
      <script src="client.bundle.js"></script>
    </body>
  </html>`;

export default createFullPageHtml;

const createFullPageHtml = (appHtml, appBundles, appStyles) =>
  `<html>
    <head>
      <meta charset="utf-8">
      <meta
        name="viewport"
        content="minimum-scale=1,initial-scale=1, width=device-width, shrink-to-fit=no"
      >
      <link rel="icon" href="static/favicon.ico">
      <title>React SSR and code-splitting template</title>
      ${appStyles}
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

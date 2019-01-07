const createFullPageHtml = (appHtml, bundles, styles) =>
  `<html>
    <head>
      <link rel="icon" href="static/favicon.ico">
      <title>React SSR and code-splitting template</title>
      ${styles}
      <meta
        name="viewport"
        content="minimum-scale=1,initial-scale=1, width=device-width, shrink-to-fit=no"
      >
    </head>
    <body>
      <div id="root">${appHtml}</div>
      ${bundles
        .map(bundle => {
          return `<script src="${bundle.file}"></script>`;
        })
        .join("\n")}
      <script src="client.bundle.js"></script>
    </body>
  </html>`;

export default createFullPageHtml;

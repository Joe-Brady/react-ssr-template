const createFullPageHtml = (appHtml, bundles, styles) =>
  `<html>
    <head>
      <link rel="icon" href="static/favicon.ico">
      <title>React SSR and code-splitting template</title>
      ${styles}
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

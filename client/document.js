const createFullPageHtml = (appHtml, bundles) =>
  `<html>
    <head>
      <link rel="icon" href="assets/favicon.ico">
      <title>React SSR and code-splitting template</title>
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

const createFullPageHtml = (appHtml, bundles) =>
  `<html>
    <head>
      <title>React Hot Loader Minimal Boilerplate</title>
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

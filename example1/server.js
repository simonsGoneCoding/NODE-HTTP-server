const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write(`
    <div>
      <h1>Little green man</h1>
      <script src='./code.js'></script>
    `);
    res.end(`try</div>`);
  })
  .listen(3000, "127.0.0.1");

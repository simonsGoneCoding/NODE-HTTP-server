const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>anything</h2>");
    res.end();
  })
  .listen(5000, "127.0.0.1");

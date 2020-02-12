const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 3000;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
    switch (req.url) {
      case "/":
        res.end(`<h1>Main page</h1>`);
        break;
      case "/users":
        res.end("<h1>Users page</h1>");
        break;
      case "/api/users":
        res.end("<h1>API</h1>");
        break;
      default:
        res.end("<h1>Dead End</h1>");
    }
    res.end("Page");
  })
  .listen(3000, "127.0.0.1", () => {
    console.log(`server is running on port ${port}`);
  });

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  if (req.url === "/") {
    res.end(`
      <h1>Home 🏠</h1>
      <p>Selamat datang di halaman Home.</p>
    `);
  } else if (req.url === "/about") {
    res.end(`
      <h1>About 👨‍💻</h1>
      <p>Ini adalah halaman About dari server Node.js.</p>
    `);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(`
      <h1>404 ❌</h1>
      <p>Halaman tidak ditemukan.</p>
    `);
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});

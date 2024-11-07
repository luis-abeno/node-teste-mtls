const fs = require("fs");
const https = require("https");
const express = require("express");

const app = express();

const options = {
  key: fs.readFileSync(`./server-key.dev.pem`), // Path to your server private key
  cert: fs.readFileSync(`./server-cert.dev.pem`), // Path to your server certificate
  ca: [fs.readFileSync(`./ca-cert.pem`)], // Path to your client certificate
  requestCert: true, // Request client certificate
  rejectUnauthorized: true, // Reject connections without valid client certificate
};

const server = https.createServer(options, app);
server.listen(3000, () => {
  console.log(`Server is listening on port ${3000}`);
});

app.post("/teste", (req, res) => {
  res.send("Hello from the server!");
});

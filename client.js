const https = require("https");
const fs = require("fs");
const axios = require("axios");

const clientCert = fs.readFileSync(`./client-cert.dev.pem`);
const clientKey = fs.readFileSync(`./client-key.dev.pem`);

const agent = new https.Agent({
  cert: clientCert,
  key: clientKey,
  ca: [fs.readFileSync(`./ca-cert.pem`)],
});

async function runClient() {
  try {
    const myConfig = {
      url: `/teste`,
      method: "post",
      baseURL: `https://localhost:3000`,
      headers: {
        "Content-Type": "application/json",
      },
      httpsAgent: agent,
      responseType: "text",
    };

    const response = await axios(myConfig);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

// Run the async function
runClient();

const express = require('express');
const cors = require('cors');
const PORT = 5500;
const app = express();
const http = require('http');

app.use(express.json());
app.use(cors());
var my_chunks;
function httpGet(url) {
  return new Promise((resolve, reject) => {
    const http = require('http'),
      https = require('https');
    
    let client = http;

    if (url.toString().indexOf("https") === 0) {
      client = https;
    }
    
    client.get(url, (resp) => {
      let chunks = [];
      
      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        chunks.push(chunk);
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        resolve(Buffer.concat(chunks));
      });

    }).on("error", (err) => {
      reject(err);
    });
  });
}

app.get('/', async (req, res) => {
  var bu = await httpGet('https://httpbin.org/headers');
  console.log(buf.toString('utf-8'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
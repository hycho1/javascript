import express from 'express';
import cors from 'cors';
import path from 'path';
import * as url from 'url';

const app = express();

let corsOptions = {
  origin: true
}

// Set filePath
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

/* middleware */
//app.use('요청 경로', express.static('실제 경로'));
app.use('/', express.static(path.join(__dirname, '/public')));
// Set corsOptions
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

/* route */
app.get('/', (req, res) => {
  res.sendFile(path.join(path.join(__dirname, '/public/index.html')));
});

app.post('/post', (req, res) => {
  const msg = req.body;
  console.log("req.body.message", msg);
  res.send({'return' : msg});
});



export default app;

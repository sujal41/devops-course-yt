const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => res.send('hello world !'));

app.listen(8080, () => {
  console.log('server is live on http://localhost:8080');
});

const new_name = "server 1";
console.log(new_name);
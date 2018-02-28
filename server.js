const express = require('express');

const app = express();

app.get('*', (req, res) => (
  res.sendFile(__dirname)
));

app.use(express.static(__dirname));

app.listen(3030);

console.log('Listening on port 3030');

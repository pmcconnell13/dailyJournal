const express = require('express');
const port = 3000;
const app = express();


app.use(express.static(__dirname + '/../client/dist'));

app.use(express.json());

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
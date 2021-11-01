const express = require('express');
const app = express();

// http methods are = get, post, put, delete

app.get('/', function (req, res) {
res.send('Hello World')

});

app.listen(3000)
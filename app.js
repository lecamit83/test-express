const express = require('express');
const app = express();

app.get('/', function(req, res){  
  console.log(req.headers['user-agent']);
  
  res.type('text/plain')
    .send(req.headers['user-agent']);
});

module.exports = app;

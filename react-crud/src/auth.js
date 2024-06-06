const express = require('express');
const app = express();
const port = 3000;
const pool = require('./db');
const jsonParser = express.json();

let users = [];

app.get("/login", function(request, response){
  response.sendFile(__dirname + "/pages/Auth.jsx"); 
});
app.post('/login', jsonParser, (req, res) => {
  let userEmail = req.body.email;
  let userPassword = req.body.password;

  let user = users.find(user => user.email === userEmail && user.password === userPassword);

  if (user) {
    res.send({ success: 'Успешный вход!' });
  } else {
    res.status(400).send({ error: 'Некорректно введен email или пароль.' });
    return;
  }
});

app.listen(3000, () => console.log('The server is running on http://localhost:3000'));

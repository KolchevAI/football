import "./styles/main.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import MatchComponent from "./components/Matches"
import TournamentTable from "./components/Table"
import Team from "./components/Teams"

const express = require('express');
const bodyParser = require('body-parser'); 
const db = require('./db');
const app = express();
const jsonParser = express.json();

app.use(express.static(__dirname + "/public/img"));app.use(express.static(__dirname + "/public"));
app.use("/main", function (_, response) {
response.redirect("/");});

app.get("/", function(request, response){
response.sendFile(__dirname + "/public/index.html");});

app.get("/login", function(request, response){
response.sendFile(__dirname + "/public/lk.html");});

app.post('/login', jsonParser, async (req, res) => {
const { email, password } = req.body;
try {const result = await db.query('SELECT * FROM users WHERE user_email = $1 AND user_password = $2', [email, password]);
if (result.rows.length > 0) {res.send({ success: 'Успешный вход!' });
} else {res.status(400).send({ error: 'Некорректно введен email или пароль.' });
}} catch (err) {
console.error(err);res.status(500).send({ error: 'Ошибка сервера. Попробуйте еще раз позже.' });
}});

app.get("/about", function(request, response){
response.sendFile(__dirname + "/public/aboutus.html");});

app.get("/register", function(request, response){
response.sendFile(__dirname + "/public/reg.html");});

app.post('/register', jsonParser, async (req, res) => {
const { email, password } = req.body;
try {const existingUser = await db.query('SELECT * FROM users WHERE user_email = $1', [email]);
if (existingUser.rows.length > 0) {
res.status(400).send({ error: 'Пользователь с таким email уже существует.' });} else {
await db.query('INSERT INTO users (user_email, user_password) VALUES ($1, $2)', [email, password]);res.send({ success: 'Пользователь успешно зарегистрирован!' });
}} catch (err) {
console.error(err);res.status(500).send({ error: 'Ошибка сервера. Попробуйте еще раз позже.' });
}});

app.use((request, response, next) => {
response.status(404).sendFile(__dirname + "/public/error404.html");});

app.listen(3000, () => console.log('The server is running on http://localhost:3000'));

function App() {
  return (
    <div className="main">
      <Header />
      <MatchComponent />
      <TournamentTable />
      <Team />
      <Footer />
    </div>
  );
}

export default App;



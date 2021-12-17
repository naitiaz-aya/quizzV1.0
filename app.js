// Framework Web rapide
// La philosophie d'Express est de fournir des outils petits et robustes pour les serveurs HTTP
const express = require("express")
const app = express()

//routes
const pagesRoute = require('./routes/pages')
const authRoute = require('./routes/auth')

//.env 
const dotenv = require('dotenv')
dotenv.config({path: './.env'})

//Create connection
const mysql = require('mysql')
const db = mysql.createConnection({
  host : process.env.DATABASE_HOST,
  user : process.env.DATABASE_USER,
  password : process.env.DATABASE_PASSWORD,
  database : process.env.DATABASE
})

//Connect 
db.connect((err,  connection) => {
  if (err) throw err
  console.log('MySql Connected ...')
})

// Create DB
app.get('/createdb', (req, res) => {
  let sql = 'CREATE DATABASE quizz'
  db.query(sql, (err, result) => {
    if(err) throw err
    console.log(result)
    res.send('Database created ...')
    console.log('Database created ...')
  })
})

//Middleware de l'enregistreur de requêtes HTTP pour node.js
const morgan = require('morgan')
app.use(morgan('dev'))

//EJS 
app.set('views', './views')
app.set('view engine', 'ejs')

//middlware & static files
app.use(express.static('public'))

// Parse URL - encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false}))

// Parse JSON bodies (as sent by API clients)
app.use(express.json())

//listen for requests 
app.listen(5555,() =>   {
console.log("Server started on Port 5555 ...")
})

//Define routes
app.use('/', pagesRoute)
app.use('/auth', authRoute)

// app.post("/auth/register", 
// register = (req, res) => {
//   console.log(req.body)
// })
const router = require("express").Router()
const authorize = require('../helpers/authorize')
const Role = require('../helpers/role')

// >==============================<home page>==============================<
router.get("/",(req, res) => {
	res.render('home', {title: "Home Page"})
})

// >==============================<register page>==============================<
router.get("/register", (req, res) => {
	res.render("register", {title: "Register Page"})
})

// >==============================<login page>==============================<
router.get("/login", (req, res) => {
	res.render("login", {title: "Login Page"})
})

// >==============================<create question>==============================<
router.get('/question/create',(req, res) => {
	res.render("createquestion", {title: "Create a new question"})
})

// >==============================<dashboard>==============================<
router.get('/dashboard', (req, res) => {
	res.render("dashboard", {title: "Dashboard"})
})

// >==============================<Index>==============================<
router.get('/index', (req, res) => {
	res.render("index", {title: "Index"})
})

// >==============================<Index>==============================<
router.get('/teacher', (req, res) => {
	res.render("teacher", {title: "Index"})
})

// >==============================<404 page>==============================<
router.get((req, res) => {
	res.status(404).render('error', {title: "404"})
})

//module.exports est un objet spécial qui est inclus par défaut dans
//chaque fichier JavaScript de l'application Node.js
module.exports = router 
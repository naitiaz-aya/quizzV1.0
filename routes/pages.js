const router = require("express").Router()

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

// >==============================<create questions>==============================<
router.get('/question/create', (req, res) => {
	res.render("createquestion", {title: "Create a new question"})
})

// >==============================<dashboard>==============================<
router.get('/dashboard', (req, res) => {
	res.render("dashboard", {title: "Dashboard"})
})

// >==============================<404 page>==============================<
router.get((req, res) => {
	res.status(404).render('error', {title: "404"})
})

//module.exports est un objet spécial qui est inclus par défaut dans 
//chaque fichier JavaScript de l'application Node.js.
module.exports = router 
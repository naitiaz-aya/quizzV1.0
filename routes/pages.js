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
  // console.log(req)
  res.render("login", {title: "Login Page"})
})


// >==============================<create questions>==============================<
router.get('/question/create', (req, res) => {
  res.render("createquestion", {title: "Create a new question"})
})


// >==============================<dashboard>==============================<
router.get('/dashboard', (req, res) => {
  const  questions = [
    {description: "2+2" , answers: ["3","5","2"], correctAnswer: "4" },
    {description: "2+5" , answers: ["6","8","9"], correctAnswer: "7" },
    {description: "9+9" , answers: ["12","14","20"], correctAnswer: "18" },
  ]
  res.render("dashboard", {title: "Dashboard",  questions})
})

// >==============================<404 page>==============================<
router.get((req, res) => {
  res.status(404).render('error', {title: "404"})
})

//module.exports est un objet spécial qui est inclus par défaut dans 
//chaque fichier JavaScript de l'application Node.js.
module.exports = router 
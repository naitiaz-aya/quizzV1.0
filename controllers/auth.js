const mysql = require("mysql")
const jwt = require('jsonwebtoken')
const bcrypt= require('bcryptjs')

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
})

// exports est un objet qui sera exposé en tant que module
// >==============================<Register>==============================<
exports.register = (req, res) => {
  console.log(req.body)

  const { username, password, email, confirmpassword } = req.body
  db.query("Select email FROM users WHERE email = ?", [email], async  (error, results) => {
    if (error) {
      console.log(error)
    }

    // console.log(results.length)

    if (results.length > 0) {
      return res.render("register", {
        message: "That email is already in use",
      })
    } else if (password !== confirmpassword) {
      return res.render("register", {
        message: "Password don't match",
      })
    }

    let hashedPassword = await bcrypt.hash(password, 8)
    console.log(hashedPassword)

  })

  res.send("User registred ...")
};

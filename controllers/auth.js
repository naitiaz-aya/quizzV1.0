const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "quizz",
})

// exports est un objet qui sera exposé en tant que module
// >==============================<Register>==============================<
exports.register = (req, res) => {
	console.log(req.body);

	const { username, password} = req.body

	db.query(
		"SELECT username FROM users WHERE email = ?"[username],
		async (error, results) => {
			if (error) {
				console.log(error)
			}

			let hashedPassword = await bcrypt.hash(password, 8)
			console.log(hashedPassword)

			db.query(	"INSERT INTO users SET ?",	{ username: username, password: hashedPassword },
				(error, results) => {
					if (error) {
						console.log(error)
					} else {
						console.log(results)
						return res.render("home",  {title: "Home Page"})
					}
				}
			)
		}
	)

	// res.send("User registred ...");
}

// >==============================<Login>==============================<
exports.login = (req, res) => {
	try{
		const {username, password, role} = req.body

		if(!username || !password) {
			return res.status(400).render('login', {message: 'You need an username and password.'})
		}

		db.query('SELECT * FROM users WHERE username = ?' , [username] , async (error, results) => {
			console.log(results)
			if(!results || !(await bcrypt.compare(password, results[0].password))){
				res.status(400).redirect('/login')
			}else{
				const id = results[0].id
				const token = jwt.sign({ id }, process.env.JWT_SECRET, {
					expiresIn: process.env.JWT_EXPIRE_IN
				})
				const cookieOption = {
					expires: new Date(
						Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
					),
					httponly: true,
				}
				res.cookie('jwt', token, cookieOption)

				res.status(200).redirect('/dashboard')
			}
		})
	}catch (err){
		console.log(err)
	}
}

// >==============================<Logout>==============================<
exports.logout = (req,res) => {
	res.clearCookie('jwt')
	res.redirect('/login')
}
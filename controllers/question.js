const mysql = require("mysql")
const Question = require('../models/Question')
const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "quizz",
})

// >==============================<Index>==============================<
exports.index = (req, res) => {
	db.query(	"SELECT * FROM questions", (err, rows) => {
		if(err){
			console.log(err)
		}
		// console.log(rows)
		res.render("dashboard"
		,
		 { data: rows , title:"Dashboard"}
		 )
	})
}

// >==============================<Store>==============================<
exports.store = (req, res) => {
	const description = req.body.description
	const correctAnswer = req.body.correctAnswer
	const answer1 = req.body.answer1
	const type = req.body.type
	const score = req.body.score
	// console.log(answer2)
	// const type = req.body.type
	// console.log(res)
	db.query(
		"INSERT INTO questions (description, answer1, correctAnswer, score, type) VALUES (?,?,?,?,?)",
		[description, answer1, correctAnswer, score, type],
		(err, result) => {
			console.log(result)

			if (err) {
				console.log(err)
			} else {
				res.redirect("index")
			}
		}
	)
}

// >==============================<Edit>==============================<
exports.edit = (req, res) => {

 db.query(`SELECT * FROM questions WHERE 
	id = ${req.params.id}`, (err, rows) => {
		if(err){
			console.log(err)
		}
		res.render("editquestion", { data: rows[0] , title: "Edit Question Page"})
	})
}

// >==============================<Updtate>==============================<
exports.update = (req, res) => {
	db.query(	
		"UPDATE questions SET description = ? answer1 = ? correctAnswer = ? score = ? type = ? WHERE id = ?" ,[req.body.description, req.body.answer1, req.body.correctAnswer, req.body.score, req.body.type, req.params.id], (err) => {
		if(err){
			console.log(err)
		}
		console.log("question updated")
		res.redirect("/question/index")
	})
}

// >==============================<Delete>==============================<
exports.destroy = (req, res) => {
	// const id = req.body.id
	// console.log(id)
	db.query(	
		'DELETE FROM questions WHERE id = ?', [req.params.id] , (err) => {
		if(err){
			console.log(err)
		}
		console.log("question deleted")
		res.redirect("/question/index")
	})
}
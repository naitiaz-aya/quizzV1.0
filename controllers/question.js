const mysql = require("mysql")

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "quizz",
})

// >==============================<Index>==============================<
exports.index = (req, res) => {
	Question.get(req.con, (err, rows) => {
		if(err){
			console.log(err)
		}
		console.log(rows)
		res.render("dashboard", { data: rows })
	})
}

// >==============================<Store>==============================<
exports.store = (req, res) => {
  const description = req.body.description
  const correctAnswer = req.body.correctAnswer
  const score = req.body.score
  // const type = req.body.type
	console.log(res)
  db.query(
    "INSERT INTO questions (description, correctAnswer, score) VALUES (?,?,?)",
    [description, correctAnswer, score],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.redirect("/dashboard")
      }
    }
  )
}


// >==============================<Edit>==============================<
exports.edit = (req, res) => {
	Question.edit(req.con, req.params.id, function(err, rows) {
		if(err){
			console.log(err)
		}
		res.render("editquestion", { data: rows[0] , title: "Edit Question Page"})
	})
}

// >==============================<Updtate>==============================<
exports.update = (req, res) => {
	Question.update(req.con, (err) => {
		if(err){
			console.log(err)
		}
		res.render("dashboard")
	})
}

// >==============================<Delete>==============================<
exports.destroy = (req, res) => {
	Question.destroy(req.con, (err) => {
		if(err){
			console.log(err)
		}
		res.render("dashboard")
	})
}
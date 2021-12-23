const mysql = require("mysql");

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "quizz",
});

// >==============================<Get question function>==============================<
exports.get = () => {
	db.query(
		"SELECT * FROM questions", 
	)
}



// >==============================<Update question function>==============================<
exports.update = (data, id) => {
	db.query(
		`UPDATE questions SET ?
		description = '${data.description}', 
		correctAnswer = '${data.correctAnswer}',
		score = '${data.score}',
		WHERE id = ${id}`,
	)
}

// >==============================<Delete question function>==============================<
exports.destroy = (id) => {
	db.query(
		`DELETE FROM questions WHERE 
		id = ${id}`,
	)
}

// >==============================<Edit question function>==============================<
exports.edit = (id) => {
	db.query(
		`SELECT * FROM questions WHERE 
		id = ${id}`,
	)
}
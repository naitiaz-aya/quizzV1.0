module.exports = authorize

function authorize(roles = []) {
		// roles param can be a single role string (e.g. Role.Student or 'student') 
		// or an array of roles (e.g. [Role.Formateur, Role.Student] or ['formateur', 'student'])
		if (typeof roles === 'string') {
				roles = [roles]
		}
		return [
				// authorize based on user role
				(req, res, next) => {
						if (roles.length && !roles.includes(req.body.role)) {
								// user's role is not authorized
								return res.status(401).json({ message: 'Unauthorized' })
						}
						// return res.status(200).json({ message: 'Ok!' })
						// authentication and authorization successful
						next()
				}
		]
}
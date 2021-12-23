const router = require("express").Router()
const questionController = require('../controllers/question')
const authorize = require('../helpers/authorize')
const Role = require('../helpers/role')

// >==============================<index user  "question/index">==============================<
router.get("/index", authorize(Role.Teacher), questionController.index)

// >==============================<store user "question/store">==============================<
router.post("/store", authorize(Role.Teacher), questionController.store)

// >==============================<edit user "question/edit/:id">==============================<
router.get("/edit/:id", authorize(Role.Teacher), questionController.edit)

// >==============================<update user "question/update/:id">==============================<
router.put("/update/:id", authorize(Role.Teacher), questionController.update)

// >==============================<destroy user "question/destroy/:id">==============================<
router.delete("/destroy/:id", authorize(Role.Teacher), questionController.destroy)

module.exports = router
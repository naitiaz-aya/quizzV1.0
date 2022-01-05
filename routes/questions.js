const router = require("express").Router()
const questionController = require('../controllers/question')


// >==============================<index question  "question/index">==============================<
router.get("/index",  questionController.index)

// >==============================<store question "question/store">==============================<
router.post("/store",  questionController.store)

// >==============================<edit question "question/edit/:id">==============================<
router.get("/edit/:id",  questionController.edit)

// >==============================<update question "question/update/:id">==============================<
router.post("/update/:id",  questionController.update)

// >==============================<destroy question "question/destroy/:id">==============================<
router.post("/destroy/:id",  questionController.destroy)

module.exports = router
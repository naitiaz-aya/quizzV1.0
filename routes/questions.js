const router = require("express").Router()
const questionController = require('../controllers/question')


// >==============================<index user  "question/index">==============================<
router.get("/index",  questionController.index)

// >==============================<store user "question/store">==============================<
router.post("/store",  questionController.store)

// >==============================<edit user "question/edit/:id">==============================<
router.get("/edit/:id",  questionController.edit)

// >==============================<update user "question/update/:id">==============================<
router.put("/update/:id",  questionController.update)

// >==============================<destroy user "question/destroy/:id">==============================<
router.delete("/destroy/:id",  questionController.destroy)

module.exports = router

const express = require('express');
const router = express.Router();
const questionController = require('../controller/QuestionCont');

router.get('/questions', questionController.getQuestions);
router.post('/questions', questionController.createQuestion);
router.put('/questions/:id', questionController.updateQuestion);
router.delete('/questions/:id', questionController.deleteQuestion);

module.exports = router;

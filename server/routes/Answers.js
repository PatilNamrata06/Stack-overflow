import express from 'express'

import { postAnswers, deleteAnswer } from '../controllers/Answers.js'
import auth from '../middleware/auth.js'

const router = express.Router()


router.patch('/post/:id', auth, postAnswers)
router.patch('/delete/:id', auth, deleteAnswer)

export default router
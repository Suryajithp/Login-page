const express = require('express')
const router = express.Router()
const userController = require('../controller/user_controller')
const {verifyJWT} = require('../controller/Authenticate')

router.get('/isUserAuth', verifyJWT, userController.jwt)
router.post('/signup',userController.Signup)
router.post('/',userController.Login)

module.exports = router;
const Router = require('express').Router;
const {registerUser} = require('../controllers/user.controllers.js')


const router = Router()

router.route("/register").post(registerUser)


module.exports = router
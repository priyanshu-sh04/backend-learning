const express = require('express');
const authController = require('../controllers/auth.controllers')

const router = express.Router(); 


/* POST /api/auth/register  */
router.post('/register', authController.registerUser)

router.get('/test', (req, res) => {
    console.log("Cookies:", req.cookies)
    res.status(201).json({
        message: "Test route",
        cookies: req.cookies
    })

})


module.exports = router;
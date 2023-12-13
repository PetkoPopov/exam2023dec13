const router = require('express').Router()
const { create } = require('../service/userService.js')

router.get('/login', (req, res) => { res.render('login') })
router.post('/login', (req, res) => { res.render('login') })

router.get('/register', (req, res) => { res.render('register') })
router.post('/register', async (req, res) => {
    const { username, email, password, repeat_password } = req.body
    console.log(password, repeat_password);
    // res.redirect('/user/register')
    const user = await create({ username, email, password, repeat_password })
    console.log(" you save the new user");
    res.redirect('/user/login')

   
})

module.exports = router
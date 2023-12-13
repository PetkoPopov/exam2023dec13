const router = require('express').Router()
const { create, login } = require('../service/userService.js')

router.get('/login', (req, res) => { res.render('login') })
router.post('/login', async (req, res) => {
    const { email, password } = req.body
    const token = await login({ email, password })
    res.cookie('auth', token, { httpOnly: true })
    res.redirect('/')

})

router.get('/register', (req, res) => { res.render('register') })
router.post('/register', async (req, res) => {
    const { username, email, password, repeat_password } = req.body
    // console.log(password, repeat_password);
    // res.redirect('/user/register')
    if (password !== repeat_password) {
        res.redirect('/user/register')
    } else {
        const user = await create({ username, email, password, repeat_password })
        console.log(" you save the new user");
        res.redirect('/user/login')
    }
})
router.get("/logout", (req, res) => {
    res.clearCookie("auth");
    res.redirect("/");
});

module.exports = router
const router = require('express').Router()

router.get('/login',(req,res)=>{res.render('login')})
router.post('/login', (req, res) => { res.render('login')})

router.get('/register', (req, res) => { res.render('register') })
router.post('/register', (req, res) => { 
const {username , email ,password ,repeat_password} = req.body
console.log(username , password ,email , repeat_password);

    res.render('register')
 })

module.exports = router
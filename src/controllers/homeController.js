const router = require("express").Router()

router.get('/', (req, res) => { res.render('home') })
router.get('/all-courses', (req, res) => { res.render('catalog') })
// router.get('/login', (req, res) => { res.render('login') })


module.exports = router
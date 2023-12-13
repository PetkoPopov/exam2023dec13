const router = require("express").Router()
const courseService = require('../service/courseService.js')

router.get('/', (req, res) => { res.render('home') })
router.get('/all-courses', async (req, res) => {
    const all = await courseService.getAll()
    res.render('catalog', { all })
})
router.get('/404', (req, res) => {
    res.render('404')
})

module.exports = router
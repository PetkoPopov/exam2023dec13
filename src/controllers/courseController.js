const router =require('express').Router()
const courseService = require('../service/courseService.js')

router.get('/create-offer', (req, res) => {
    res.render('create')
})
router.post('/create-offer', (req, res) => {
    const{title ,type,certificate ,description ,image ,price}=req.body
    const isSaved = courseService.save({ title, type, certificate, description, image, price })
    // console.log(title, type, certificate, description, image, price);
     console.log(isSaved);
    res.redirect('/all-courses')
})

module.exports = router
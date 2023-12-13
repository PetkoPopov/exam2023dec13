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
router.post('/delete/:courseId',(req,res)=>{
    const {courseId} = req.params
    console.log(courseId);
    res.redirect('/all-courses')
})
/**
 * Моля, въведете вашата парола.
– „рози“
Недостатъчен брой символи в паролата.
– „розови рози“
Паролата трябва да съдържа поне една цифра.
– „1 розова роза“
Паролата не трябва да съдържа празни полета.
– „еднарозовароза“
Паролата трябва да съдържа поне 10 различни символа.
– „1скапанарозовароза“
Паролата трябва да съдържа поне една главна буква.
– „1СКАПАНАРОЗОВАРОЗА“
Паролата трябва да съдържа поне една малка буква.
– „СкапанаРозоваРоза“
Паролата трябва да съдържа поне една цифра.
– „1скапанаРозоваРозаМайнатати“
Тази парола вече е заета.
 */

module.exports = router
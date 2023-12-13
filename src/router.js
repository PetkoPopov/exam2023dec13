const router = require('express').Router()
const homeController = require('./controllers/homeController.js')
const userController = require('./controllers/userController.js')
router.use(homeController)
router.use('/user',userController)

module.exports = router
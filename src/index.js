const express = require("express")
const { PORT } = require('./constants/constants')
const expressConfig = require("./config/expressConfig.js")
const handlebarsConfig = require("./config/handlebarsConfig.js")
const router  = require("./router.js")

const app = express()
expressConfig(app)
handlebarsConfig(app)

app.use(router)
app.listen(PORT, () => { console.log(`server runing on port ${PORT}`); })
const Koa = require('koa')
const bodyParser = require('koa-body')
const json = require("koa-json")
const config = require('./config')

const app = new Koa()
app.use(bodyParser())
app.use(json())


app.listen(config.PORT, () => {
    console.log(`Server listening on port: ${config.PORT}`)
})
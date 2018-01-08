const express = require("express")
const cors = require("cors")
const port = process.env.PORT || 3000
const dataTools = require("./data")
const bodyParser = require("body-parser")


const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get("/", (req, resp) => {
  resp.json(dataTools.races)
})

app.listen(port)

app.post("/", (req, resp) => {
  dataTools.races.push(req.body)
  resp.json(dataTools.races)
})

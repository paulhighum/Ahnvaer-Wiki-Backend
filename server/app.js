const express = require("express")
const cors = require("cors")
const port = process.env.PORT || 3000
const data = require("./data/data.js")

const app = express()
app.use(cors())

app.get("/", (request, response) => {
  response.json(data)
})

app.listen(port)

const express = require("express")
const cors = require("cors")
const port = process.env.PORT || 3000
const data = require("./data/data.js")
let updatedRaces = {}

const app = express()
app.use(cors())

function addRegionsToRaces(data){
  updatedRaces = data.races.map((race) => {
    race["common geography"].regions = []
    race["common geography"].cities.forEach(city => {
      for(var i=0; i<data.regions.length; i++){
        for(var j=0; j<data.regions[i].cities.length; j++){
          if(city === data.regions[i].cities[j]){
            if(race["common geography"].regions.includes(data.regions[i].name)===false) {
              race["common geography"].regions.push(data.regions[i].name)
            }
          }
        }
      }
    })
    return race
  })
  return updatedRaces
}
addRegionsToRaces(data)


app.get("/", (request, response) => {
  response.json(updatedRaces)
})

app.listen(port)

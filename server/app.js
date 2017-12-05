const express = require("express")
const cors = require("cors")
const port = process.env.PORT || 3000
const data = require("./data/data.js")
let races = data.races
let regions = data.regions
let updatedRaces = {}

const app = express()
app.use(cors())

function addRegionsToRaces(races, regions){
  updatedRaces = data.races.map((race) => {
    race.geography.regions = []
    race.geography.cities.forEach(city => {
      for(var i=0; i<regions.length; i++){
        for(var j=0; j<regions[i].cities.length; j++){
          if(city === regions[i].cities[j]){
            if(race.geography.regions.includes(regions[i].name)===false) {
              race.geography.regions.push(regions[i].name)
            }
          }
        }
      }
    })
    return race
  })
  return updatedRaces
}
addRegionsToRaces(races, regions)

module.exports = {
  addRegionsToRaces
}

app.get("/", (request, response) => {
  response.json(updatedRaces)
})

app.listen(port)

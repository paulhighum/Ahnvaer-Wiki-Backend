const express = require("express")
const cors = require("cors")
const port = process.env.PORT || 3000
const data = require("./data/data.js")
const bodyParser = require("body-parser")
let races = data.races
let regions = data.regions
let updatedRaces = []

const app = express()
app.use(cors())
app.use(bodyParser.json())

function addRegionsToRaces(races, regions){
  return updatedRaces = races.map((race) => {
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
}
addRegionsToRaces(races, regions)

// function addRegionsToRaces(races, regions){
//   addsRegionArrayToRaces(races)
// }
// addRegionsToRaces(races, regions)
//
// function addsRegionArrayToRaces(races){
//   return updatedRaces = races.map((race) => {
//     race.geography.regions = []
//     matchesCitiesWithRegions(races, regions)
//     return race
//   })
// }
//
// function matchesCitiesWithRegions(races, regions){
//   race.geography.cities.forEach(city => {
//     regionsLoop(regions)
//   })
// }
//
// function regionsLoop(regions){
//   for(var i=0; regions.length; i++){
//     citiesLoop(regions[i].cities)
//   }
// }
//
// function citiesLoop(cities){
//   for(var j=0; j<cities.length; j++){
//     if(race.geography.regions.includes(regions[i].name)===false) {
//       race.geography.regions.push(regions[i].name)
//     }
//   }
// }


app.get("/", (req, resp) => {
  resp.json(updatedRaces)
})

app.listen(port)

app.post("/", (req, resp) => {
  updatedRaces.push(req.body)
  resp.json(updatedRaces)
})

module.exports = {
  addRegionsToRaces
}

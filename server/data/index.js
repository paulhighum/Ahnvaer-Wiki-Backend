const data = require("./data.js")
let races = data.races
let regions = data.regions
let updatedRaces = []

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

module.exports = {
  races: updatedRaces
}

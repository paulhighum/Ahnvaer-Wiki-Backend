const data = require("./data.js")
let races = data.races
let regions = data.regions
let updatedRaces = []

// function addRegionsToRaces(races, regions){
//   return updatedRaces = races.map((race) => {
//     race.geography.regions = []
//     race.geography.cities.forEach(city => {
//       for(var i=0; i<regions.length; i++){
//         for(var j=0; j<regions[i].cities.length; j++){
//           if(city === regions[i].cities[j]){
//             if(race.geography.regions.includes(regions[i].name)===false) {
//               race.geography.regions.push(regions[i].name)
//             }
//           }
//         }
//       }
//     })
//     return race
//   })
// }
// addRegionsToRaces(races, regions)

function matchRaceRegions(races) {
  return races.map(race => {
    const cities = race.geography.cities
    let regions = findRegionForCities(cities)
    race.geography.regions = makeUnique(regions)
    return race
  })
}

function findRegion(city) {
  let regionMatch = regions.find(region => {
    return region.cities.includes(city)
  })
  return regionMatch ? regionMatch.name : null
}

function findRegionForCities(cities) {
  return cities.map(findRegion).filter(val => val)
}

function makeUnique(arr){
  return Array.from(new Set(arr))
}

updatedRaces= matchRaceRegions(races)

module.exports = {
  races: updatedRaces,
  matchRaceRegions,
  findRegion,
  findRegionForCities,
  makeUnique,
}

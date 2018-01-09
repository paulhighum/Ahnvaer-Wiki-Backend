const data = require("./data.js")
let updatedRaces = []

function DataTools(regions = data.regions, races = data.races){
  function matchRaceRegions(races){
    return races.map(race => {
      const cities = race.geography.cities
      let regions = findRegionForCities(cities)
      race.geography.regions = makeUnique(regions)
      return race
    })
  }

  function findRegion(city){
    let regionMatch = regions.find(region => {
      return region.cities.includes(city)
    })
    return regionMatch ? regionMatch.name : null
  }

  function findRegionForCities(cities){
    return cities.map(findRegion).filter(val => val)
  }

  function makeUnique(arr){
    if(!Array.isArray(arr)) throw new Error("Not an array")
    return Array.from(new Set(arr))
  }

  updatedRaces = matchRaceRegions(races)

  return {
    races: updatedRaces,
    matchRaceRegions,
    findRegion,
    findRegionForCities,
    makeUnique
  }
}

module.exports = DataTools

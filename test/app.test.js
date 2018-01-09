const assert = require("assert")
const DataTools = require("../server/data")
const data = require("../server/data/data.js")

let dataTools = DataTools(data.regions, data.races)

describe("dataMethods", function() {
  it("#makeUnique: valid array", function() {
    const input = [1, 1, 2, 1]
    const output = [1, 2]
    assert.deepEqual(dataTools.makeUnique(input), output)
  })
  it("#makeUnique: invalid arg", function() {
    const input = undefined
    assert.throws(() => {
      dataTools.makeUnique(input)
    })
  })
  it("#findRegion: valid city", function() {
    const input = "Sacramento"
    const output = "California"
    const regions = [
      {
        name: "California",
        cities: ["Los Angeles", "San Francisco", "Sacramento"]
      },
      {
        name: "Colorado",
        cities: ["Denver"]
      }
    ]
    dataTools = DataTools(regions)
    assert.deepEqual(dataTools.findRegion(input), output)
  })
  it("#findRegion: invalid arg", function() {
    const input = "Egypt"
    const output = null
    assert.deepEqual(dataTools.findRegion(input), output)
  })
  it("#findRegionForCities: valid cities array", function() {
    const input = ["Sacramento", "Denver", "San Francisco"]
    const output = ["California", "Colorado", "California"]
    const regions = [
      {
        name: "California",
        cities: ["Los Angeles", "San Francisco", "Sacramento"]
      },
      {
        name: "Colorado",
        cities: ["Denver"]
      }
    ]
    dataTools = DataTools(regions)
    assert.deepEqual(dataTools.findRegionForCities(input), output)
  })
  it("#findRegionForCities: city array with matchless item", function() {
    const input = ["Sacramento", "Denver", "Boston"]
    const output = ["California", "Colorado"]
    const regions = [
      {
        name: "California",
        cities: ["Los Angeles", "San Francisco", "Sacramento"]
      },
      {
        name: "Colorado",
        cities: ["Denver"]
      }
    ]
    dataTools = DataTools(regions)
    assert.deepEqual(dataTools.findRegionForCities(input), output)
  })
  it("#matchRaceRegions: valid race array", function() {
    const input = [
      {
        name: "Human",
        description: "a human",
        geography: {
          cities: ["Denver", "Sacramento", "Sanfrancisco"]
        }
      }
    ]
    const output = [
      {
        name: "Human",
        description: "a human",
        geography: {
          cities: ["Denver", "Sacramento", "Sanfrancisco"],
          regions: ["Colorado", "California"]
        }
      }
    ]
    const regions = [
      {
        name: "California",
        cities: ["Los Angeles", "San Francisco", "Sacramento"]
      },
      {
        name: "Colorado",
        cities: ["Denver"]
      }
    ]
    dataTools = DataTools(regions)
    assert.deepEqual(dataTools.matchRaceRegions(input), output)
  })
})

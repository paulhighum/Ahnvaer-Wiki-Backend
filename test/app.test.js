const assert = require("assert")
const DataTools = require("../server/data")
const data = require("../server/data/data.js")
const inputRaces = data.races
const inputRegions = data.regions

const dataTools = DataTools(data.regions)



describe("dataMethods", function () {
  it("makeUnique: valid array", function () {
    const input = [1, 1, 2, 1]
    const output = [1, 2]
    assert.deepEqual(dataTools.makeUnique(input), output)
  })
  it("makeUnique: invalid arg", function () {
    const input = undefined
    // const output = [1, 2]
    assert.throws(() => {
      dataTools.makeUnique(input)
    })
  })
})

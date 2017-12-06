const assert = require("assert")
const app = require("../server/app.js")
const data = require("../server/data/data.js")
const inputRaces = data.races
const inputRegions = data.regions


const outPutArray = [
  {
    "name": "Thallarite",
    "description": "",
    "geography": {
      "cities": [
        "Corsaya",
        "Enia"
      ],
      "regions": [
        "Angareel"
      ]
    }
  },
  {
    "name": "Garethan",
    "description": "",
    "geography": {
      "cities": [
        "Caprifar",
        "Knovaya City",
        "Barosh's Hold",
        "Cerrar",
        "Ovoule"
      ],
      "regions": [
        "Grasulahn",
        "The Siphaer Delta"
      ]
    }
  },
  {
    "name": "Fyrenian",
    "description": "",
    "geography": {
      "cities": [
        "Ovoule",
        "Jalowna",
        "Suhnberg",
        "Melmejin",
        "Tobbindru"
      ],
      "regions": [
        "The Siphaer Delta",
        "The Zeeran Desert"
      ]
    }
  },
  {
    "name": "Pelvoshi",
    "description": "",
    "geography": {
      "cities": [
        ""
      ],
      "regions": []
    }
  },
  {
    "name": "Lurthen",
    "description": "",
    "geography": {
      "cities": [
        ""
      ],
      "regions": []
    }
  },
  {
    "name": "Faltarron",
    "description": "",
    "geography": {
      "cities": [
        "Ahndaril",
        "Valint"
      ],
      "regions": [
        "Alahnvaer"
      ]
    }
  }
]

describe("App", function () {
  describe("#addRegionsToRaces", function () {
    it("Adds regions to each race based on the cities they are found in", function (){
      assert.deepEqual(app.addRegionsToRaces(inputRaces, inputRegions), outPutArray)
    })
  })
})

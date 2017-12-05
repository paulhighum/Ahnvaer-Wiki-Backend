const assert = require("assert")
const app = require("../server/app.js")


const outPutArray = [
  {
    "id": 1,
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
    "id": 2,
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
    "id": 3,
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
    "id": 4,
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
    "id": 5,
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
    "id": 6,
    "name": "Faltaron",
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

const inputRaces = [
  {
    id: 1,
    name: "Thallarite",
    description: "",
    geography: {
      cities: ["Corsaya", "Enia"]
    }
  },{
    id: 2,
    name: "Garethan",
    description: "",
    geography: {
      cities: ["Caprifar", "Knovaya City", "Barosh's Hold", "Cerrar", "Ovoule"]
    }
  },{
    id: 3,
    name: "Fyrenian",
    description: "",
    geography: {
      cities: ["Ovoule", "Jalowna", "Suhnberg", "Melmejin", "Tobbindru"]
    }
  },{
    id: 4,
    name: "Pelvoshi",
    description: "",
    geography: {
      cities: [""]
    }
  },{
    id: 5,
    name: "Lurthen",
    description: "",
    geography: {
      cities: [""]
    }
  },{
    id: 6,
    name: "Faltaron",
    description: "",
    geography: {
      cities: ["Ahndaril", "Valint"]
    }
  }
]

const inputRegions = [
  {
    "region-id": 1,
    name: "Angareel",
    cities: ["Corsaya", "Enia"]
  },{
    "region-id": 2,
    name: "Grasulahn",
    cities: ["Caprifar", "Knovaya City", "Barosh's Hold"]
  },{
    "region-id": 3,
    name: "The Siphaer Delta",
    cities: ["Cerrar", "Ovoule"]
  },{
    "region-id": 4,
    name: "The Zeeran Desert",
    cities: ["Jalowna", "Suhnberg", "Melmejin", "Tobbindru"]
  },{
    "region-id": 5,
    name: "Khopeshka",
    cities: []
  },{
    "region-id": 6,
    name: "Chaos Coast",
    cities: []
  },{
    "region-id": 7,
    name: "Alahnvaer",
    cities: ["Ahndaril", "Valint"]
  }
]

describe("App", function () {
  describe("#addRegionsToRaces", function () {
    it("Adds regions to each race based on the cities they are found in", function (){
      assert.deepEqual(app.addRegionsToRaces(inputRaces, inputRegions), outPutArray)
    })
  })
})

const assert = require("assert")
const app = require("../server/app.js")
const data = require("../server/data/data.js")
const inputRaces = data.races
const inputRegions = data.regions

const racesWithEmptyRegionArrays = [
  {
    "name": "Thallarite",
    "description": "Thallarites are a small statured race, the tallest of which stand about as tall as the smallest of humans. Their ears are huge in comparison to the rest of their bodies and heads, and stick out as opposed to lying flat as human ears do. Their hair is often thicker and fuller than human hair. Their eyes, though, come in mostly the same shades and colors as those of human eyes. What truly sets Thallarites apart, however, are their feet. Their feet are nearly as agile as their hands, allowing them to grab things and pick them up as easily as a human does with their hands, or to walk along ropes or trees as easily as a human walks on the ground.   ",
    "geography": {
      "cities": [
        "Corsaya",
        "Enia"
      ],
      "regions": []
    }
  },
  {
    "name": "Garethan",
    "description": "Garethans, as a race, are enormous, towering at heights of up to eight feet. But they are more than just tall; they are large, with thickset muscular bodies that hold a strength that can crush boulders and bullish large heads with broad flat faces. Their skin does not soften their appearance for it ranges in color from a stoic gray to an impenetrable black and is so rough and leathery that most airborne projectiles fail to pierce it. Yet it is neither their size nor their strength that most physically distinguishes them, but their head and back spikes. These spikes protrude over eight inches and a constant line of them begin at their forehead, go up over the crown of their skull, and start down their spine before fading away. The spikes are more than just fearsome in appearance, they are deadly, capable of impaling a man with a head-butt",
    "geography": {
      "cities": [
        "Caprifar",
        "Knovaya City",
        "Barosh's Hold",
        "Cerrar",
        "Ovoule"
      ],
      "regions": []
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
      "regions": []
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
      "regions": []
    }
  }
]

const outPutArray = [
  {
    "name": "Thallarite",
    "description": "Thallarites are a small statured race, the tallest of which stand about as tall as the smallest of humans. Their ears are huge in comparison to the rest of their bodies and heads, and stick out as opposed to lying flat as human ears do. Their hair is often thicker and fuller than human hair. Their eyes, though, come in mostly the same shades and colors as those of human eyes. What truly sets Thallarites apart, however, are their feet. Their feet are nearly as agile as their hands, allowing them to grab things and pick them up as easily as a human does with their hands, or to walk along ropes or trees as easily as a human walks on the ground.   ",
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
    "description": "Garethans, as a race, are enormous, towering at heights of up to eight feet. But they are more than just tall; they are large, with thickset muscular bodies that hold a strength that can crush boulders and bullish large heads with broad flat faces. Their skin does not soften their appearance for it ranges in color from a stoic gray to an impenetrable black and is so rough and leathery that most airborne projectiles fail to pierce it. Yet it is neither their size nor their strength that most physically distinguishes them, but their head and back spikes. These spikes protrude over eight inches and a constant line of them begin at their forehead, go up over the crown of their skull, and start down their spine before fading away. The spikes are more than just fearsome in appearance, they are deadly, capable of impaling a man with a head-butt",
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
    it("Adds a regions array to each race", function (){
      assert.deepEqual(app.addsRegionArrayToRaces(inputRaces), racesWithEmptyRegionArrays)
    })
    it("There are no repeat region names in any race's regions array", function () {
      assert.equal()
    })
    it("Adds region names based on which cities a race is found in", function (){
      assert.deepEqual()
    })
  })
})

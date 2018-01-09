const races = [
  {
    name: "Thallarite",
    description:
      "Thallarites are a small statured race, the tallest of which stand about as tall as the smallest of humans. Their ears are huge in comparison to the rest of their bodies and heads, and stick out as opposed to lying flat as human ears do. Their hair is often thicker and fuller than human hair. Their eyes, though, come in mostly the same shades and colors as those of human eyes. What truly sets Thallarites apart, however, are their feet. Their feet are nearly as agile as their hands, allowing them to grab things and pick them up as easily as a human does with their hands, or to walk along ropes or trees as easily as a human walks on the ground.   ",
    geography: {
      cities: ["Corsaya", "Enia"]
    }
  },
  {
    name: "Garethan",
    description:
      "Garethans, as a race, are enormous, towering at heights of up to eight feet. But they are more than just tall; they are large, with thickset muscular bodies that hold a strength that can crush boulders and bullish large heads with broad flat faces. Their skin does not soften their appearance for it ranges in color from a stoic gray to an impenetrable black and is so rough and leathery that most airborne projectiles fail to pierce it. Yet it is neither their size nor their strength that most physically distinguishes them, but their head and back spikes. These spikes protrude over eight inches and a constant line of them begin at their forehead, go up over the crown of their skull, and start down their spine before fading away. The spikes are more than just fearsome in appearance, they are deadly, capable of impaling a man with a head-butt",
    geography: {
      cities: ["Caprifar", "Knovaya City", "Barosh's Hold", "Cerrar", "Ovoule"]
    }
  },
  {
    name: "Fyrenian",
    description: "Fyrenians are a medium sized race with a very similar physical build to humans, though there are some key differences between the races. Where human skin tones vary widely, Fyrenian skin tones only range from dark brown to near black. Fyrenian hair is similarly narrow, only coming in shade of white and blonde. Every Fyrenian has detached ear lobes and both the top tips and bottom lobes are elongated and pointed at the tip. They are a race shaped for their desert homeland. Their nearly black skin protects any exposed patches from sunburn, while their elongated and double pointed ears dissipate large amounts of heat. Their features, from their discernable ears to their chin, nose, and cheekbones, are pointed as if chiseled to tips by the desert’s sand-winds.",
    geography: {
      cities: ["Ovoule", "Jalowna", "Suhnberg", "Melmejin", "Tobbindru"]
    }
  },
  {
    name: "Pelvoshi",
    description: "Pelvoshi are a small race, being roughly the same height as Thallarites. Their skin, though, sets them drastically apart, coming only in pale shades of pink and purple. Their ears are double pointed, similar to Fyrenian ears, with both the bottom lobes and top tips elongated and pointed. As a race they are renowned for their ivory and hand carved goods.",
    geography: {
      cities: ["Boondu", "Fykos", "Ayetemba"]
    }
  },
  {
    name: "Lurthen",
    description: "Lurthens are an ancient race that many other upper races do not believe actually exist due to their incredible rarity. They are a medium sized race, on average a little larger than humans, and their hair is nearly always black. Their skin is similarly black, except for the endless swirling patterns of silver or gold that blanket their skin. These patterns occur in either circular or rectangular spirals, with no two Lurthens having the same pattern.",
    geography: {
      cities: ["Elinghor"]
    }
  },
  {
    name: "Faltarron",
    description: "Faltarrons are a feathered upper race common in the north-western reaches of Ahnvaer. Instead of hair, both male and female members of the race have thick plumes of feathers on their heads. They are a medium sized race, about the same size as humans, and are imbued with incredible agility. ",
    geography: {
      cities: ["Ahndaril", "Valint"]
    }
  }
]

const regions = [
  {
    name: "Angareel",
    cities: ["Corsaya", "Enia"]
  },
  {
    name: "Grasulahn",
    cities: ["Caprifar", "Knovaya City", "Barosh's Hold"]
  },
  {
    name: "The Siphaer Delta",
    cities: ["Cerrar", "Ovoule"]
  },
  {
    name: "The Zeeran Desert",
    cities: ["Jalowna", "Suhnberg", "Melmejin", "Tobbindru"]
  },
  {
    name: "Khopeshka",
    cities: []
  },
  {
    name: "Chaos Coast",
    cities: ["Elinghor"]
  },
  {
    name: "Alahnvaer",
    cities: ["Ahndaril", "Valint"]
  },
  {
    name: "Mirfolas",
    cities: ["Boondu"]
  },
  {
    name: "Dyefolas",
    cities: ["Ayetemba"]
  },
  {
    name: "Bhoak",
    cities: ["Fykos"]
  }
]

module.exports = {
  races,
  regions
}

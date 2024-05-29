// BASE CLASS
class Player {
  footwear = "";
  constructor(dress = "", eyelashes = "", hairstyle = "", power) {
    this.dress = dress;
    this.eyelashes = eyelashes;
    this.hairstyle = hairstyle;
    this.power = power;
  }
  changeDress(dress = "") {
    this.dress = dress;
  }
  changeEyelashes(lashes = "") {
    this.eyelashes = lashes;
  }

  get footwear() {
    return this.footwear;
  }

  set footwear(wear = "") {
    this.footwear = wear;
  }
}

const Veeran = new Player("Bomber Jacket", "Persian", "Groovy");

console.log(Veeran);

Veeran.footwear = "Sneakers";

console.log(Veeran);

console.log(Veeran.footwear);

// Veeran.changeDress("Camaoflauge jacket");

// console.log(Veeran);

// const Maaveran = new Player(
//   "leather Waist coat",
//   "",
//   "Silky",
//   "Leather Sandal",
//   "High Strength"
// );

// console.log(Maaveran);

/**
 * DERIVED CLASS
 */
class SpecialPlayer extends Player {
  constructor(
    tendency = "",
    dress = "",
    eyelashes = "",
    hairstyle = "",
    power
  ) {
    super(dress, eyelashes, hairstyle, power);
    this.tendency = tendency;
  }
}

const SpecialPlayerOne = new SpecialPlayer(
  "Fast Gun Firing Frequency",
  "Bomber Jacket",
  "Persian",
  "Groovy",
  "Sneakers",
  "Lightning"
);

SpecialPlayerOne.footwear = "Adidas";

console.log(SpecialPlayerOne);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
class SuperSpecialPlayer extends SpecialPlayer {
  constructor(
    tendency = "",
    dress = "",
    eyelashes = "",
    hairstyle = "",
    power
  ) {
    super(
      (tendency = ""),
      (dress = ""),
      (eyelashes = ""),
      (hairstyle = ""),
      power
    );
  }
}

const SPP = new SuperSpecialPlayer();
console.log("SPP", SPP);

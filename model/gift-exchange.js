const { BadRequestError } = require("../utils/errors");

let namesArr = [];
let pairs = [];
let phrases = [];

class GiftExchange {
  static async getPairs() {
    return pairs;
  }

  static async pairs(names) {
    if (names == undefined) {
      throw new BadRequestError("You must include a list of names!");
    }
    namesArr = names;
    if (namesArr.length % 2 != 0) {
      throw new BadRequestError("You must have an even number of names!");
    }
    let ranNum;
    let ranNum2;
    let numsUsed = [];

    for (let i = 0; i < namesArr.length / 2; i++) {
      do {
        ranNum = Math.floor(Math.random() * namesArr.length);
      } while (numsUsed.includes(ranNum));

      numsUsed.push(ranNum);
      do {
        ranNum2 = Math.floor(Math.random() * namesArr.length);
      } while (numsUsed.includes(ranNum2));

      numsUsed.push(ranNum2);

      pairs.push([namesArr[ranNum], namesArr[ranNum2]]);
    }
    return this.getPairs();
  }

  static async getTraditional() {
    return phrases;
  }

  static async traditional(names) {
    if (names == undefined) {
      throw new BadRequestError("You must include a list of names!");
    }
    namesArr = names;
    if (namesArr.length % 2 != 0) {
      throw new BadRequestError("You must have an even number of names!");
    }
    let ranNum;
    let numsUsed = [];

    for (let i = 0; i < namesArr.length; i++) {
      do {
        ranNum = Math.floor(Math.random() * namesArr.length);
      } while (numsUsed.includes(ranNum));

      numsUsed.push(ranNum);
      pairs.push(namesArr[ranNum]);
    }

    for (let i = 0; i < pairs.length; i++) {
      if (pairs[i + 1] != undefined) {
        phrases.push(pairs[i] + " is giving a gift to " + pairs[i + 1]);
      } else {
        phrases.push(pairs[i] + " is giving a gift to " + pairs[0]);
      }
    }

    return this.getTraditional();
  }
}

module.exports = GiftExchange;

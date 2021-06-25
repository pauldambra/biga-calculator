// interface BigaCalculation {
//   stepOne: FirstStep
//   stepTwo: SecondStep
// }
//
// interface SecondStep {
//   gramsOfWater: number
//   gramsOfSalt: number
//   teaspoonsOfOliveOil: number
// }
//
// interface FirstStep {
//   gramsOfHoney: number
//   gramsOfYeast: number
//   gramsOfWater: number
// }
//
// interface StartingQuantity {
//   gramsOfFlour: number
// }

/**
 * references
 *  - https://food52.com/blog/17140-preferments-and-how-to-adapt-any-bread-recipe-to-use-one
 *  - https://web.archive.org/web/20040814193817/cafemeetingplace.com/archives/food3_apr2004.htm
 *  - https://www.youtube.com/watch?v=V2RCYjVhb9w&t=1448s
 */
module.exports.bigaFor = (gramsOfFlour) => {
  return {
    stepOne: {
      startingFlour: gramsOfFlour,
      gramsOfWater: Math.floor(gramsOfFlour * 0.50),
      gramsOfYeast: +((gramsOfFlour * 0.0083).toFixed(1)),
      gramsOfHoney: +((gramsOfFlour * 0.0083).toFixed(1))
    },
    stepTwo: {
      startingFlour: gramsOfFlour,
      gramsOfWater: Math.floor(gramsOfFlour * 0.167),
      gramsOfSalt: Math.floor(gramsOfFlour * 0.025),
      teaspoonsOfOliveOil: Math.floor(gramsOfFlour * 0.0017)
    }
  }
}
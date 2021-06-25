const { bigaFor } = require('../src/biga-calculator')
const { expect } = require('chai')

const randomNumber = (min = 1, max = 5000) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

describe('The biga calculator', () => {
  describe('step 2', () => {
    it('matches Vito Locapelli\'s video', () => {
      const result = bigaFor(600)
      expect(result.stepTwo.gramsOfWater).to.eql(100)
      expect(result.stepTwo.gramsOfSalt).to.be.closeTo(15, 0.1)
      expect(result.stepTwo.teaspoonsOfOliveOil).to.eql(1)
    })
  })

  describe('step 1', () => {
    it('has 50% water to flour', () => {
      const flour = randomNumber()
      const water = Math.floor(flour * 0.50)

      const result = bigaFor(flour)
      expect(result.stepOne.gramsOfWater).to.eql(water)
    })

    it('has 0.83% yeast to flour', () => {
      const flour = randomNumber()
      const yeast = flour * 0.0083

      const result = bigaFor(flour)
      expect(result.stepOne.gramsOfYeast).to.be.closeTo(yeast, 0.1)
    })

    it('has 0.83% honey to flour', () => {
      const flour = randomNumber()
      const yeast = flour * 0.0083

      const result = bigaFor(flour)
      expect(result.stepOne.gramsOfHoney).to.be.closeTo(yeast, 0.1)
    })

    it('matches Vito Locapelli\'s video', () => {
      const result = bigaFor(600)
      expect(result.stepOne.gramsOfWater).to.eql(300)
      expect(result.stepOne.gramsOfYeast).to.be.closeTo(5, 0.1)
      expect(result.stepOne.gramsOfHoney).to.be.closeTo(5, 0.1)
    })
  })
})

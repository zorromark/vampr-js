const chai = require('chai');
const expect = chai.expect;

const Vampire = require('./vampire.js');

describe("vampire", () => {

  let rootVampire;
  beforeEach(() => {
    rootVampire = new Vampire("root");
  });
  
  describe("addOffspring", () => {

    let offspring;
    beforeEach(() => {
      offspring = new Vampire("andrew");
      rootVampire.addOffspring(offspring);
    });

    it("should get added to offspring", () => {
      expect(rootVampire.offspring[0]).to.equal(offspring);
    });
    it("should get added to offspring", () => {
      expect(offspring.parent).to.equal(rootVampire);
    });

  })    
  describe("numberOfOffspring", () => {
  })
  describe("numberOfVampiresFromOriginal", () => {
  })
  describe("moreSeniorVampire", () => {
  })
  describe("closestCommonAncestor", () => {
  })
});
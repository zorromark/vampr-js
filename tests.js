const chai = require('chai');
const expect = chai.expect;

const Vampire = require('./vampire.js');

describe("vampire", () => {

  let rootVampire;
  beforeEach(() => {
    rootVampire = new Vampire("root");
  });
  
  describe("addOffspring", () => {

    let offspring1;
    let offspring2;
    beforeEach(() => {
      offspring1 = new Vampire("andrew");
      offspring2 = new Vampire("sarah");
      rootVampire.addOffspring(offspring1);
      rootVampire.addOffspring(offspring2);
    });

    it("should get added to offspring", () => {
      expect(rootVampire.offspring[0]).to.equal(offspring1);
      expect(rootVampire.offspring[1]).to.equal(offspring2);
    });
    it("should get added to offspring", () => {
      expect(offspring1.parent).to.equal(rootVampire);
      expect(offspring2.parent).to.equal(rootVampire);
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
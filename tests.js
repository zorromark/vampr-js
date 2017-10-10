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
      expect(offspring1.creator).to.equal(rootVampire);
      expect(offspring2.creator).to.equal(rootVampire);
    });

  });

  describe("numberOfOffspring", () => {

    it("should get the correct number of offspring", () => {
      expect(rootVampire.numberOfOffspring).to.equal(0);
      rootVampire.addOffspring(new Vampire());
      expect(rootVampire.numberOfOffspring).to.equal(1);
      rootVampire.addOffspring(new Vampire());
      rootVampire.addOffspring(new Vampire());
      rootVampire.addOffspring(new Vampire());
      rootVampire.addOffspring(new Vampire());
      expect(rootVampire.numberOfOffspring).to.equal(5);
    });
  });

  describe("numberOfVampiresFromOriginal", () => {

    let offspring1, offspring2, offspring3, offspring4;
    before(() => {
      offspring1 = new Vampire();
      offspring2 = new Vampire();
      offspring3 = new Vampire();
      offspring4 = new Vampire();

      rootVampire.addOffspring(offspring1);
      offspring1.addOffspring(offspring2);
      offspring2.addOffspring(offspring3);
      offspring3.addOffspring(offspring4);
    })
    
    it("root should be 0 from original", () => {
      expect(rootVampire.numberOfVampiresFromOriginal).to.equal(0);
    });

    it("offspring 1 should be 1 from original", () => {
      expect(offspring1.numberOfVampiresFromOriginal).to.equal(1);
    });

    it("offspring 2 should be 2 from original", () => {
      expect(offspring2.numberOfVampiresFromOriginal).to.equal(2);
    });

    it("offspring 4 should be 4 from original", () => {
      expect(offspring4.numberOfVampiresFromOriginal).to.equal(4);
    });
  });

  describe("moreSeniorVampire", () => {
  });

  describe("closestCommonAncestor", () => {
  });

});
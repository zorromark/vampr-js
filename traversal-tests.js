const chai = require('chai');
const expect = chai.expect;

const Vampire = require('./vampire.js');

describe("vampire", function() {

  let rootVampire;
  beforeEach( function() {
    rootVampire = new Vampire("root");
  });

  describe("search for vampire with name", () => {

    let offspring1;
    let offspring2;
    beforeEach(() => {
      offspring1 = new Vampire("andrew");
      offspring2 = new Vampire("sarah");
      rootVampire.addOffspring(offspring1);
      offspring1.addOffspring(offspring2);
    });
    
    it("should return the vampire with that name", () => {
      expect(rootVampire.vampireWithName("")).to.equal(null);
      expect(rootVampire.vampireWithName(rootVampire.name).name).to.equal(rootVampire.name);
      expect(rootVampire.vampireWithName(offspring1.name).name).to.equal(offspring1.name);
      expect(rootVampire.vampireWithName(offspring2.name).name).to.equal(offspring2.name);
    });

  });

});
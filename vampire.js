class Vampire {
  constructor(name) {
    this.name = name;
    this.offspring = [];
    this.creator = null;
  }

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampires = 0;
    let currentVampire = this;

    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampires++;
    }

    return numberOfVampires;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    const thisDistance = this.numberOfVampiresFromOriginal;
    const thatDistance = vampire.numberOfVampiresFromOriginal;

    return thisDistance < thatDistance;
  } 

  // Returns the closest common ancestor of two vampires.
  closestCommonAncestor(vampire) {

    let ancestor1 = this;
    let ancestor2 = vampire;
    while(ancestor1 !== ancestor2) {
      ancestor2 = ancestor2.creator;

      if (ancestor2 === null) {
        ancestor2 = vampire;
        ancestor1 = ancestor1.creator;
      }
    }

    return ancestor1;
  }


  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {


    function vampireWithNameDepthFirst(vampire, name) {
      console.log(`vampire.name ${vampire.name} name ${name}`);
      if (vampire.name === name) {
        return vampire;
      }

      let vampWithName;
      for (let offspring of vampire.offspring) {
        vampWithName = vampireWithNameDepthFirst(offspring, name);
        if (vampWithName != null) {
          return vampWithName;
        }
      }

      return null;
    }

    return vampireWithNameDepthFirst(this, name);
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let sum = 0;

    sum += this.numberOfOffspring;

    for (let offspring of this.offspring) {
      sum += offspring.totalDescendents;
    }

    return sum;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {

  }
}

module.exports = Vampire;
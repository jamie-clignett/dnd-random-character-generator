// import react


// initiate a constant 

const classes = {
  1: 'Barbarian', 
  2: 'Bard', 
  3: 'Cleric', 
  4: 'Druid',
  5: 'Fighter',
  6: 'Monk',
  7: 'Paladin',
  8: 'Ranger',
  9: 'Rogue',
  10: 'Sorcerer',
  11: 'Warlock',
  12: 'Wizard'
}

const clericSubclass = {
  1: 'Knowledge Domain', 
  2: 'Life Domain',
  3: 'Light Domain',
  4: 'Nature Domain',
  5: 'Tempest Domain',
  6: 'Trickery Domain', 
  7: 'War Domain'
}

const fighterSubclass = {
  1: 'Champion',
  2: 'Battle Master',
  3: 'Eldritch Knight'
}

const sorcererSubclass = {
  1: 'Wild Magic',
  2: 'Draconic Bloodline'
}

const warlockSubclass = {
  1: 'The Archfey',
  2: 'The Fiend',
  3: 'The Great Old One'
}

// if cleric(3), fighter(5), sorcerer(10), or warlock(11) is rolled then continue to their subclass list

// create function that randomizes classes and checks to see if a cleric, fighter, sorcerer or warlock is rolled
const classRandomizer = () => {
  // declare result object
  const result = {};
  // use the random method on the math object to get a number 1 - 12
  const randomNum = Math.ceil(Math.random() * 12);
  result[randomNum] = classes[randomNum];
  // check if random number is the same as cleric(3)
  if (randomNum === 3) {
    // yes -> create a variable to run another random number
    clericRanNum = Math.ceil(Math.random() * 7);
    // match it to clericSubclass/put objects in an object? 
    result[clericRanNum] = clericSubclass[clericRanNum];
    return result;
  }
  // check if random number is the same as fighter(5)
  if (randomNum === 5) {
    // yes -> create a variable to run another random number
    fighterRanNum = Math.ceil(Math.random() * 3);
    // match it to fighterSubclass
    result[fighterRanNum] = fighterSubclass[fighterRanNum];
    return result;
  }
  // check if random number is the same as sorcerer(10)
  if (randomNum === 10) {
    // yes -> create a variable to run another random number 
    sorcererRanNum = Math.ceil(Math.random() * 2);
    // match it to sorcererSubclass
    result[sorcererRanNum] = sorcererSubclass[sorcererRanNum];
    return result;
  }
  // check if random number is the same as warlock(11)
  if (randomNum === 11) {
    // yes -> create a variable to run another random number
    warlockRanNum = Math.ceil(Math.random() * 3);
    // match it to warlockSubclass
    result[warlockRanNum] = warlockSubclass[warlockRanNum];
    return result;
  } 
  // return object? 
  return result;
}
// Extension add other subClasses 
// import React
import React from 'react';

// highest rolled can be 18

// Str, Dex, Con, Int, Wis, Cha = these are the ability scores that need to be populated

// Initiate a constant to an object
const abilities = {
  Strength: 1,
  Dexterity: 1, 
  Constitution: 1, 
  Intelligence: 1, 
  Wisdom: 1, 
  Charisma: 1
}

const abilityScoresRandomizer = () => {
   for (const prop in abilities) {
     const randomNum = Math.ceil(Math.random() * 18);
     abilities[prop] = randomNum;
   }
   return abilities;
}

console.log(abilityScoresRandomizer());


// export abilities? 

export default abilities;
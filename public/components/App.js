import React, { useState } from 'react';

// import AbilityScores from ''
import RacesRandomizer from './Races/racesRandomizer.js'
import RacesMounted from './Races/mountRaces.js'
import ClassMounted from './Classes/mountClass.js'
import ClassRandomizer from './Classes/classRandomizer.js'

// What do I need in state?
/* Race name:
   Class Name:
   Ability Scores: {
     Strength:
     Dexterity: 
     Constitution: 
     Intelligence:
     Wisdom:
     Charisma:
   }
*/
// [raceName, setRaceName]
const [className, setClassName] = useState('');
const [raceName, setRaceName] = useState('');
const racesButtonClick = () => {
  console.log('invoked races button');
  // assign variable to the evaluated result call raceRandomizer 
  const raceResults = RacesRandomizer();
  // fetching (post) to the backend
  fetch('/api', {
    method: 'POST',
    body: JSON.stringify({
      raceResults
    })
  })
  // then parse data
    .then(res => res.json())
  // then setRaceName(data) 
    .then(data => setRaceName(data))
};

const classButtonClick = () => {
  console.log('invoked races button');
  // assign variable to the evaluated result call classRandomizer 
  const classResults = ClassRandomizer();
  // fetching (post) to the backend
  fetch('/api', {
    method: 'POST',
    body: JSON.stringify({
      classResults
    })
  })
  // then parse data
    .then(res => res.json())
  // then setClassName(data) 
    .then(data => setClassName(data))
};

const App = () => {
  return (<div>
  <div className='Buttons'>
    <button className='Race Button' onClick={racesButtonClick}>Race Randomizer</button>
    <button className='Class Button'>Class Randomizer</button>
    <button className='Ability Scores Button'>Ability Scores Randomizer</button>
  </div>
  <RacesMounted raceName={raceName}/>
  <ClassMounted dndClassName={className}/>
  </div>   
)};


// fetch to backend in function such as buttonClick for api info
// promise so await parsing of data
// saved in variable

export default App;
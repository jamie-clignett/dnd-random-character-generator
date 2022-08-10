// import react

const races = {
  1: 'Dwarf',
  2: 'Elf',
  3: 'Halfling',
  4: 'Human',
  5: 'Dragonborn',
  6: 'Gnome',
  7: 'Half-Elf',
  8: 'Half-Orc',
  9: 'Tiefling'
}


const racesRandomizer = () => {
  const result = {};
  const ranNum = Math.ceil(Math.random() * 9);
  result[ranNum] = races[ranNum];
  return result;
}
// Extension add subRaces
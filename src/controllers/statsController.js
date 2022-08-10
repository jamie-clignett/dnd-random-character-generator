const fetch = require('node-fetch');


// come back to this to reroll the ability scores manually
// api doesn't seem to work with numbers and you're going to need
// all six ability scores anyway. 


// statsController.getStats = (req, req, next) => {
//   console.log('invoked?');
//   const { id } = req.params;
//   const statsUrl = 'https://www.dnd5eapi.co/api/ability-scores/' + id;
//   fetch(statsUrl)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       res.locals.randomStats = data; 
//     }) 
// }
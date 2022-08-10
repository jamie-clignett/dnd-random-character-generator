const fetch = require('node-fetch');

classesController.getClass = (req, req, next) => {
  console.log('invoked?');
  const { id } = req.params;
  const classesUrl = 'https://www.dnd5eapi.co/api/races/' + id;
  fetch(classesUrl)
    body: JSON.stringify({
      query: `
        
      `
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      res.locals.randomclasses = 
    }) 
}
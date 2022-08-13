const fetch = require('node-fetch');

const dndController = {};

dndController.getClasses = (req, res, next) => {
  const classResult = req.body.classResults;
  console.log('class results', classResult);
  const classUrl = 'https://www.dnd5eapi.co/api/classes/' + classResult;
  fetch(classUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      res.locals.classData = data;
      return next();
    })
}

dndController.getRaces = (req, res, next) => {
      const raceResult = req.body.raceResults;
      console.log('race results', raceResult);
      const raceUrl = 'https://www.dnd5eapi.co/api/classes/' + raceResult;
      fetch(raceUrl)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          res.locals.raceData = data;
          return next();
        })
}

dndController.getStats = (req, res, next) => {

}

modules.export = dndController;











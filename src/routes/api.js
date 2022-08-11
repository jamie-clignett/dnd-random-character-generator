const express = require('express');
// add controller require
// const classesController = require('../controllers/classesController');
const dndController = require('../controllers/dndController');
// const statsController = require('../controllers/statsController');

const router = express.Router();

// create stats route
router.get('/',
  dndController.getStats,
  (req, res) => res.status(200).json(res.locals)
);
// create classes route
router.get('/',
  dndController.getClasses,
  (req, res) => res.status(200).json(res.locals)
);
// create races route
router.get('/',
  dndController.getRaces,
  (req, res) => res.status(200).json(res.locals)
);
// extension: 

// create subraces route

// create subclasses route (I might need some anyway)

// create levels route

module.exports = router;
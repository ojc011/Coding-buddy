const router = require('express').Router();
const User = require('../../models/User');

// get all users
router.get('/', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  User.create({
    username: req.body.username, 
    email: req.body.email, 
    password: req.body.password, 
    Javascript: req.body.Javascript,
    Python: req.body.Python,
    SQL: req.body.SQL
  }) .then(dbUserData => {
      res.json(dbUserData)
  });
});
 
//Gets user by language

router.get('/Javascript', (req, res) => {
    User.findAll({
      where: {
        Javascript: true
      },
    })
    .then(dbUserData => {
      res.json(dbUserData)
    });
});

router.get('/Java', (req, res) => {
  User.findAll({
    where: {
      Java: true
    },
  })
  .then(dbUserData => {
    res.json(dbUserData)
  });
});

router.get('/Python', (req, res) => {
  User.findAll({
    where: {
      Python: true
    },
  })
  .then(dbUserData => {
    res.json(dbUserData)
  });
});

router.get('/SQL', (req, res) => {
  User.findAll({
    where: {
      SQL: true
    },
  })
  .then(dbUserData => {
    res.json(dbUserData)
  });
});

router.get('/C', (req, res) => {
  User.findAll({
    where: {
      C: true
    },
  })
  .then(dbUserData => {
    res.json(dbUserData)
  });
});


module.exports = router;
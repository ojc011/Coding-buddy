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
    /* Javascript: req.body.Javascript,
    Python: req.body.Python,
    SQL: req.body.SQL,
    Java: req.body.Java,
    C: req.body.C */
  }).then(dbUserData => {
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.json(dbUserData);

    });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
})

router.post('/login', (req, res) => {
  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
  });
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
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
const router = require('express').Router();
const Sequelize = require('../config/connection');
const User = require('../models/User');

router.get('/', (req, res) => {
    console.log('======================');
    User.findAll({
      attributes: [
        'id',
        'username',
        'Github',
        'Javascript', 
        'Java', 
        'Python', 
        'SQL', 
        'C'
      ]
    })
      .then(dbUserData => {
        const users = dbUserData.map(users => users.get({ plain: true }));
  
        res.render('homepage', {
          users,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/Javascript', (req, res) => {
    console.log('======================');
    User.findAll({
      where: {
        Javascript: true
      },
      attributes: [
        'id',
        'username',
        'Github',
        
        
      ]
    })
      .then(dbUserData => {
        const users = dbUserData.map(users => users.get({ plain: true }));
        console.log(users);
        res.render('homepage', users/* {
          users
          ,
          loggedIn: req.session.loggedIn
        } */);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/Java', (req, res) => {
    console.log('======================');
    User.findAll({
      where: {
        Java: true
      },
      attributes: [
        'id',
        'username',
        'Github',
        
      ]
    })
      .then(dbUserData => {
        const users = dbUserData.map(users => users.get({ plain: true }));
  
        res.render('homepage', {
          users,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/SQL', (req, res) => {
    console.log('======================');
    User.findAll({
      where: {
        SQL: true
      },
      attributes: [
        'id',
        'username',
        'Github',
      ]
    })
      .then(dbUserData => {
        const users = dbUserData.map(users => users.get({ plain: true }));
  
        res.render('homepage', {
          users,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/Python', (req, res) => {
    console.log('======================');
    User.findAll({
      where: {
        Javascript: true
      },
      attributes: [
        'id',
        'username',
        'Github',
        
      ]
    })
      .then(dbUserData => {
        const users = dbUserData.map(users => users.get({ plain: true }));
  
        res.render('homepage', {
          users,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/C', (req, res) => {
    console.log('======================');
    User.findAll({
      where: {
        Javascript: true
      },
      attributes: [
        'id',
        'username',
        'Github',
        
      ]
    })
      .then(dbUserData => {
        const users = dbUserData.map(users => users.get({ plain: true }));
  
        res.render('homepage', {
          users,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

  module.exports = router;
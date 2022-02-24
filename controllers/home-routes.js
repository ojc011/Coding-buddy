const router = require('express').Router();
const sequelize = require('../config/connection');
const User = require('../models/User');

router.get('/', (req, res) => {
    console.log('======================');
    User.findAll({
      attributes: [
        'id',
        'username',
        'Javascript', 
        'Java', 
        'Python', 
        'SQL', 
        'C'
      ]
    })
      .then(dbUserData => {
        const users = dbPostData.map(users => users.get({ plain: true }));
  
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
  

  module.exports = router;
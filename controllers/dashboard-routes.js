const router = require('express').Router();
const sequelize = require('../config/connection');
const User = require('../models/User');
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/', withAuth, (req, res) => {
    console.log(req.session);
    console.log('======================');
    User.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'username',
            'email',
           
        ],
    })
        .then(dbUserData => {
            const users = dbUserData.map(users => users.get({ plain: true }));

            res.render('dashboard', { users, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;


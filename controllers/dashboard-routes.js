const router = require('express').Router();
const sequelize = require('../../config/connection');
const User = require('../../models');
const withAuth = require('../../utils/auth');

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
            'Javascript',
            'Java',
            'Python',
            'SQL',
            'C'
        ],
    })
        .then(dbUserData => {
            const users = dbUserData.map(users => users.get({ plain: true }));

            res.render('profile', { users, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;


const router = require('express').Router();

const User = require('../../models/User');
const withAuth = require('../../utils/auth');


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

router.put('/edit', withAuth, (req, res) => {
    User.update(
        {
            username: req.body.username,
            email: req.body.email,
            Javascript: req.body.Javascript,
            Python: req.body.Python,
            SQL: req.body.SQL,
            Java: req.body.Java,
            C: req.body.C
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
module.exports = router;

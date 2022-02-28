const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const profileRoutes = require('./profile-routes.js')


router.use('/profiles', profileRoutes);
router.use('/users', userRoutes);


module.exports = router;
const sequelize = require('../config/connection');
const  User  = require('../models/User');

const userdata = [
    {
      username: 'alesmonde0',
      email: 'nwestnedge0@cbc.com',
      password: 'password123',
      Github: 'github/user.com',
      Javascript: true,
    },
    {
      username: 'jwilloughway1',
      email: 'rmebes1@sogou.com',
      password: 'password123',
      Github: 'github/user2.com',
      Java: true
    },
    {
      username: 'iboddam2',
      email: 'cstoneman2@last.com',
      password: 'password123',
      Github: 'github/user3.com',
      SQL: true,
    },
    {
      username: 'dstanmer3',
      email: 'ihellier3@goo.com',
      password: 'password123',
      Github: 'github/user4.com',
      Python: true
    },
    {
      username: 'djiri4',
      email: 'gmidgley4@weather.com',
      password: 'password123',
      Github: 'github/user5.com',
      C: true,
    },
    {
      username: 'msprague5',
      email: 'larnout5@imdb.com',
      password: 'password123',
      Github: 'github/user6.com',
      Java: true
    },
    {
      username: 'mpergens6',
      email: 'hnapleton6@feedburner.com',
      password: 'password123',
      Github: 'github/user7.com',
      Javascript: true,
    },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});
module.exports = seedUsers;
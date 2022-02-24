const sequelize = require('../config/connection');
const  User  = require('../models/User');

const userdata = [
    {
      username: 'alesmonde0',
      email: 'nwestnedge0@cbc.ca',
      password: 'password123',
      Javascript: true,
    },
    {
      username: 'jwilloughway1',
      email: 'rmebes1@sogou.com',
      password: 'password123',
      Java: true
    },
    {
      username: 'iboddam2',
      email: 'cstoneman2@last.fm',
      password: 'password123',
      SQL: true,
    },
    {
      username: 'dstanmer3',
      email: 'ihellier3@goo.ne.jp',
      password: 'password123',
      Python: true
    },
    {
      username: 'djiri4',
      email: 'gmidgley4@weather.com',
      password: 'password123',
      C: true,
    },
    {
      username: 'msprague5',
      email: 'larnout5@imdb.com',
      password: 'password123',
      Java: true
    },
    {
      username: 'mpergens6',
      email: 'hnapleton6@feedburner.com',
      password: 'password123',
      Javascript: true,
    },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});
module.exports = seedUsers;
const sequelize = require('../config/connection');
const  User  = require('../models/User');

const userdata = [
    {
      username: 'alesmonde0',
      email: 'nwestnedge0@cbc.com',
      password: 'password123',
      github: 'github/user.com',
      language: 'Javascript'
    },
    {
      username: 'jwilloughway1',
      email: 'rmebes1@sogou.com',
      password: 'password123',
      github: 'github/user2.com',
      language: 'C#'
    },
    {
      username: 'iboddam2',
      email: 'cstoneman2@last.com',
      password: 'password123',
      github: 'github/user3.com',
      language: 'Java'
    },
    {
      username: 'dstanmer3',
      email: 'ihellier3@goo.com',
      password: 'password123',
      github: 'github/user4.com',
      language: 'Python'
    },
    {
      username: 'djiri4',
      email: 'gmidgley4@weather.com',
      password: 'password123',
      github: 'github/user5.com',
      language: 'SQL'
    },
    {
      username: 'msprague5',
      email: 'larnout5@imdb.com',
      password: 'password123',
      github: 'github/user6.com',
      language: 'Java'
    },
    {
      username: 'mpergens6',
      email: 'hnapleton6@feedburner.com',
      password: 'password123',
      github: 'github/user7.com',
      language: 'Javascript'
    },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});
module.exports = seedUsers;
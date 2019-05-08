const router = require('express').Router();
const db =require('../data/dbConfig.js');

router.get('/', (req, res) => {
    db('users')
      .then(users => {
        res.json(users);
      })
      .catch(err => res.send(err));
  });

  module.exports=router
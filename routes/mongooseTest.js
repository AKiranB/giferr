const express = require('express');
const router = express.Router();
const Test = require('../models/Test.js')


router.get('/', (req, res, next) => {
    Test.find()
    .then(test => res.status(200).json(test))
    .catch(err => console.log(err))
});
  




  module.exports = router;
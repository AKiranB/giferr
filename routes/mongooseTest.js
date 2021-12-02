const express = require('express');
const router = express.Router();
const Test = require('../models/Test.js')


router.get('/', (req, res, next) => {
  const getAllGifs = async () => {
    try {
      let allGifs = await fetch(`http://api.giphy.com/v1/gifs/trending?api_key=2bdn2aQsC4hMxrKn5kul22j7jHNzCEsN`, {
        method: 'GET',
      })
    }
    catch {
      console.log(error)
    }

    return allGifs
  }

  console.log(getAllGifs)
  res.status(200).json(getAllGifs())
})





module.exports = router;
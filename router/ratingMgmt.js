const express = require('express');
const router = express();
const { v4: uuidv4 } = require('uuid');
const { ratingServices } = require('../services/index');

router.get('/', async (req, res) => {
  try {
    let result = await ratingServices.get();
    if (result) {
      console.log('[INFO]: Get rating successfully');
      return res.status(200).json({
        message: 'Success',
        result: result,
      });
    }
    console.log('[ERROR]: Get rating failed');
    return res.status(200).json({
      message: 'Failed',
    });
  } catch (error) {
    console.log('[ERROR]: Get rating failed', error);
    throw error;
  }
});

router.post('/', async (req, res) => {
  try {
    // Handle create data
    let { jobInformation, userId, rate, comment } = req.body;

    let result = await ratingServices.create({
      id: uuidv4(),
      jobInformation,
      userId,
      rate,
      comment,
    });
    if (result) {
      console.log('[INFO]: Create rating successfully');
      return res.status(200).json({
        message: 'Success',
        result: result,
      });
    }
    console.log('[ERROR]: Create rating failed');
    return res.status(200).json({
      message: 'Failed',
    });
  } catch (error) {
    console.log('[ERROR]: Create rating failed', error);
    throw error;
  }
});

router.put('/', async (req, res) => {
  try {
    // Handle update data
    let { id } = req.query;
    let { jobInformation, userId, rate, comment } = req.body;

    let result = await ratingServices.update({
      id,
      jobInformation,
      userId,
      rate,
      comment,
    });
    if (result) {
      console.log('[INFO]: Update rating successfully');
      return res.status(200).json({
        message: 'Success',
        result: result,
      });
    }
    console.log('[ERROR]: Update rating failed');
    return res.status(200).json({
      message: 'Failed',
      result: false,
    });
  } catch (error) {
    console.log('[ERROR]: Update rating failed', error);
    throw error;
  }
});

router.delete('/', async (req, res) => {
  try {
    // Hadle delete data
    let { id } = req.query;

    let rs = await ratingServices.delete({
      id,
    });
    return res.status(200).json({
      message: 'Success',
      result: rs,
    });
  } catch (error) {
    console.log('[ERROR]: Delete rating failed', error);
    throw error;
  }
});

module.exports = router;

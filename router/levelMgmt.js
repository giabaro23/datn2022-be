const express = require('express');
const router = express();
const { v4: uuidv4 } = require('uuid');
const { levelServices } = require('../services/index');

router.get('/', async (req, res) => {
  try {
    let result = await levelServices.get();
    if (result) {
      console.log('[INFO]: Get level successfully');
      return res.status(200).json({
        message: 'Success',
        result: result,
      });
    }
    console.log('[ERROR]: Get level failed');
    return res.status(200).json({
      message: 'Failed',
    });
  } catch (error) {
    console.log('[ERROR]: Get level failed', error);
    throw error;
  }
});

router.post('/', async (req, res) => {
  try {
    // Handle create data
    let { levelName } = req.body;

    let result = await levelServices.create({
      id: uuidv4(),
      levelName
    });
    if (result) {
      console.log('[INFO]: Create level successfully');
      return res.status(200).json({
        message: 'Success',
        result: result,
      });
    }
    console.log('[ERROR]: Create level failed');
    return res.status(200).json({
      message: 'Failed',
    });
  } catch (error) {
    console.log('[ERROR]: Create level failed', error);
    throw error;
  }
});

router.put('/', async (req, res) => {
  try {
    // Handle update data
    let { id } = req.query;
    let { levelName } = req.body;

    let result = await levelServices.update({
      id,
      levelName
    });
    if (result) {
      console.log('[INFO]: Update level successfully');
      return res.status(200).json({
        message: 'Success',
        result: result,
      });
    }
    console.log('[ERROR]: Update level failed');
    return res.status(200).json({
      message: 'Failed',
      result: false,
    });
  } catch (error) {
    console.log('[ERROR]: Update level failed', error);
    throw error;
  }
});

router.delete('/', async (req, res) => {
  try {
    // Hadle delete data
    let { id } = req.query;

    let rs = await levelServices.delete({
      id,
    });
    return res.status(200).json({
      message: 'Success',
      result: rs,
    });
  } catch (error) {
    console.log('[ERROR]: Delete level failed', error);
    throw error;
  }
});

module.exports = router;

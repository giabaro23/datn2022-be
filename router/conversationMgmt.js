const express = require('express');
const router = express();
const { v4: uuidv4 } = require('uuid');
const { conversationServices } = require('../services/index');

router.get('/', async (req, res) => {
  try {
    let result = await conversationServices.get();
    if (result) {
      console.log('[INFO]: Get conversation successfully');
      return res.status(200).json({
        message: 'Success',
        result: result,
      });
    }
    console.log('[ERROR]: Get conversation failed');
    return res.status(200).json({
      message: 'Failed',
    });
  } catch (error) {
    console.log('[ERROR]: Get conversation failed', error);
    throw error;
  }
});

router.post('/', async (req, res) => {
  try {
    // Handle create data
    let { userId1, userId2 } = req.body;

    let result = await conversationServices.create({
      id: uuidv4(),
      userId1,
      userId2,
    });
    if (result) {
      console.log('[INFO]: Create conversation successfully');
      return res.status(200).json({
        message: 'Success',
        result: result,
      });
    }
    console.log('[ERROR]: Create conversation failed');
    return res.status(200).json({
      message: 'Failed',
    });
  } catch (error) {
    console.log('[ERROR]: Create conversation failed', error);
    throw error;
  }
});

router.put('/', async (req, res) => {
  try {
    // Handle update data
    let { id } = req.query;
    let { userId1, userId2 } = req.body;

    let result = await conversationServices.update({
      id,
      userId1,
      userId2,
    });
    if (result) {
      console.log('[INFO]: Update conversation successfully');
      return res.status(200).json({
        message: 'Success',
        result: result,
      });
    }
    console.log('[ERROR]: Update conversation failed');
    return res.status(200).json({
      message: 'Failed',
      result: false,
    });
  } catch (error) {
    console.log('[ERROR]: Update conversation failed', error);
    throw error;
  }
});

router.delete('/', async (req, res) => {
  try {
    // Hadle delete data
    let { id } = req.query;

    let rs = await conversationServices.delete({
      id,
    });
    return res.status(200).json({
      message: 'Success',
      result: rs,
    });
  } catch (error) {
    console.log('[ERROR]: Delete conversation failed', error);
    throw error;
  }
});

module.exports = router;

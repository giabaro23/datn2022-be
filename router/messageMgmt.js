const express = require('express');
const router = express();
const { v4: uuidv4 } = require('uuid');
const { messageServices } = require('../services/index');

router.get('/', async (req, res) => {
  try {
    let result = await messageServices.get();
    if (result) {
      console.log('[INFO]: Get message successfully');
      return res.status(200).json({
        message: 'Success',
        result: result,
      });
    }
    console.log('[ERROR]: Get message failed');
    return res.status(200).json({
      message: 'Failed',
    });
  } catch (error) {
    console.log('[ERROR]: Get message failed', error);
    throw error;
  }
});

router.post('/', async (req, res) => {
  try {
    // Handle create data
    let { conversationId, message, createByUserId } = req.body;

    let result = await messageServices.create({
      id: uuidv4(),
      conversationId,
      message,
      createByUserId,
    });
    if (result) {
      console.log('[INFO]: Create message successfully');
      return res.status(200).json({
        message: 'Success',
        result: result,
      });
    }
    console.log('[ERROR]: Create message failed');
    return res.status(200).json({
      message: 'Failed',
    });
  } catch (error) {
    console.log('[ERROR]: Create message failed', error);
    throw error;
  }
});

router.put('/', async (req, res) => {
  try {
    // Handle update data
    let { id } = req.query;
    let { message } = req.body;

    let result = await messageServices.update({
      id,
      message,
    });
    if (result) {
      console.log('[INFO]: Update message successfully');
      return res.status(200).json({
        message: 'Success',
        result: result,
      });
    }
    console.log('[ERROR]: Update message failed');
    return res.status(200).json({
      message: 'Failed',
      result: false,
    });
  } catch (error) {
    console.log('[ERROR]: Update message failed', error);
    throw error;
  }
});

router.delete('/', async (req, res) => {
  try {
    // Hadle delete data
    let { id } = req.query;

    let rs = await messageServices.delete({
      id,
    });
    return res.status(200).json({
      message: 'Success',
      result: rs,
    });
  } catch (error) {
    console.log('[ERROR]: Delete message failed', error);
    throw error;
  }
});

module.exports = router;

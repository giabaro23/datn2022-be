const express = require('express');
const router = express();
const { v4: uuidv4 } = require('uuid');
const { payTypeServices } = require('../services/index');

router.get('/', async (req, res) => {
  try {
    let result = await payTypeServices.get();
    if (result) {
      console.log('[INFO]: Get payType successfully');
      return res.status(200).json({
        message: 'Success',
        result: result,
      });
    }
    console.log('[ERROR]: Get payType failed');
    return res.status(200).json({
      message: 'Failed',
    });
  } catch (error) {
    console.log('[ERROR]: Get payType failed', error);
    throw error;
  }
});

router.post('/', async (req, res) => {
  try {
    // Handle create data
    let { namePayType } = req.body;

    let result = await payTypeServices.create({
      id: uuidv4(),
      namePayType,
    });
    if (result) {
      console.log('[INFO]: Create payType successfully');
      return res.status(200).json({
        message: 'Success',
        result: result,
      });
    }
    console.log('[ERROR]: Create payType failed');
    return res.status(200).json({
      message: 'Failed',
    });
  } catch (error) {
    console.log('[ERROR]: Create payType failed', error);
    throw error;
  }
});

router.put('/', async (req, res) => {
  try {
    // Handle update data
    let { id } = req.query;
    let { namePayType } = req.body;

    let result = await payTypeServices.update({
      id,
      namePayType,
    });
    if (result) {
      console.log('[INFO]: Update payType successfully');
      return res.status(200).json({
        message: 'Success',
        result: result,
      });
    }
    console.log('[ERROR]: Update payType failed');
    return res.status(200).json({
      message: 'Failed',
      result: false,
    });
  } catch (error) {
    console.log('[ERROR]: Update payType failed', error);
    throw error;
  }
});

router.delete('/', async (req, res) => {
  try {
    // Hadle delete data
    let { id } = req.query;

    let rs = await payTypeServices.delete({
      id,
    });
    return res.status(200).json({
      message: 'Success',
      result: rs,
    });
  } catch (error) {
    console.log('[ERROR]: Delete payType failed', error);
    throw error;
  }
});

module.exports = router;

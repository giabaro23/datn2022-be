const express = require('express');
const router = express();
const { v4: uuidv4 } = require('uuid');
const { saveJobServices } = require('../services/index');

router.get('/', async (req, res) => {
  try {
    let result = await saveJobServices.get();
    if (result) {
      console.log('[INFO]: Get saveJob successfully');
      return res.status(200).json({
        message: 'Success',
        result: result,
      });
    }
    console.log('[ERROR]: Get saveJob failed');
    return res.status(200).json({
      message: 'Failed',
    });
  } catch (error) {
    console.log('[ERROR]: Get saveJob failed', error);
    throw error;
  }
});

router.post('/', async (req, res) => {
  try {
    // Handle create data
    let { jobInformationId, userId } = req.body;

    let result = await saveJobServices.create({
      id: uuidv4(),
      jobInformationId,
      userId,
    });
    if (result) {
      console.log('[INFO]: Create saveJob successfully');
      return res.status(200).json({
        message: 'Success',
        result: result,
      });
    }
    console.log('[ERROR]: Create saveJob failed');
    return res.status(200).json({
      message: 'Failed',
    });
  } catch (error) {
    console.log('[ERROR]: Create saveJob failed', error);
    throw error;
  }
});

router.put('/', async (req, res) => {
  try {
    // Handle update data
    let { id } = req.query;
    let { jobInformationId, userId } = req.body;

    let result = await saveJobServices.update({
      id,
      jobInformationId,
      userId,
    });
    if (result) {
      console.log('[INFO]: Update saveJob successfully');
      return res.status(200).json({
        message: 'Success',
        result: result,
      });
    }
    console.log('[ERROR]: Update saveJob failed');
    return res.status(200).json({
      message: 'Failed',
      result: false,
    });
  } catch (error) {
    console.log('[ERROR]: Update saveJob failed', error);
    throw error;
  }
});

router.delete('/', async (req, res) => {
  try {
    // Hadle delete data
    let { id } = req.query;

    let rs = await saveJobServices.delete({
      id,
    });
    return res.status(200).json({
      message: 'Success',
      result: rs,
    });
  } catch (error) {
    console.log('[ERROR]: Delete saveJob failed', error);
    throw error;
  }
});

module.exports = router;

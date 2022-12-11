const express = require('express');
const router = express();
const { v4: uuidv4 } = require('uuid');
const { workTypeServices } = require('../services/index');

router.get('/', async (req, res) => {
  try {
    let result = await workTypeServices.get();
    if (result) {
      console.log('[INFO]: Get workType successfully');
      return res.status(200).json({
        message: 'Success',
        result: result,
      });
    }
    console.log('[ERROR]: Get workType failed');
    return res.status(200).json({
      message: 'Failed',
    });
  } catch (error) {
    console.log('[ERROR]: Get workType failed', error);
    throw error;
  }
});

router.post('/', async (req, res) => {
  try {
    // Handle create data
    let { namWorkType } = req.body;

    let result = await workTypeServices.create({
      id: uuidv4(),
      namWorkType,
    });
    if (result) {
      console.log('[INFO]: Create workType successfully');
      return res.status(200).json({
        message: 'Success',
        result: result,
      });
    }
    console.log('[ERROR]: Create workType failed');
    return res.status(200).json({
      message: 'Failed',
    });
  } catch (error) {
    console.log('[ERROR]: Create workType failed', error);
    throw error;
  }
});

router.put('/', async (req, res) => {
  try {
    // Handle update data
    let { id } = req.query;
    let { namWorkType } = req.body;

    let result = await workTypeServices.update({
      id,
      namWorkType,
    });
    if (result) {
      console.log('[INFO]: Update workType successfully');
      return res.status(200).json({
        message: 'Success',
        result: result,
      });
    }
    console.log('[ERROR]: Update workType failed');
    return res.status(200).json({
      message: 'Failed',
      result: false,
    });
  } catch (error) {
    console.log('[ERROR]: Update workType failed', error);
    throw error;
  }
});

router.delete('/', async (req, res) => {
  try {
    // Hadle delete data
    let { id } = req.query;

    let rs = await workTypeServices.delete({
      id,
    });
    return res.status(200).json({
      message: 'Success',
      result: rs,
    });
  } catch (error) {
    console.log('[ERROR]: Delete workType failed', error);
    throw error;
  }
});

module.exports = router;

const express = require('express');
const router = express();
const { v4: uuidv4 } = require('uuid');
const { roleServices } = require('../services/index');

router.get('/', async (req, res) => {
  try {
    let result = await roleServices.get();
    if (result) {
      console.log('[INFO]: Get role successfully');
      return res.status(200).json({
        message: 'Success',
        result: result,
      });
    }
    console.log('[ERROR]: Get role failed');
    return res.status(200).json({
      message: 'Failed',
    });
  } catch (error) {
    console.log('[ERROR]: Get role failed', error);
    throw error;
  }
});

router.post('/', async (req, res) => {
  try {
    // Handle create data
    let { roleName } = req.body;

    let result = await roleServices.create({
      id: uuidv4(),
      roleName,
    });
    if (result) {
      console.log('[INFO]: Create role successfully');
      return res.status(200).json({
        message: 'Success',
        result: result,
      });
    }
    console.log('[ERROR]: Create role failed');
    return res.status(200).json({
      message: 'Failed',
    });
  } catch (error) {
    console.log('[ERROR]: Create role failed', error);
    throw error;
  }
});

router.put('/', async (req, res) => {
  try {
    // Handle update data
    let { id } = req.query;
    let { roleName } = req.body;

    let result = await roleServices.update({
      id,
      roleName,
    });
    if (result) {
      console.log('[INFO]: Update role successfully');
      return res.status(200).json({
        message: 'Success',
        result: result,
      });
    }
    console.log('[ERROR]: Update role failed');
    return res.status(200).json({
      message: 'Failed',
      result: false,
    });
  } catch (error) {
    console.log('[ERROR]: Update role failed', error);
    throw error;
  }
});

router.delete('/', async (req, res) => {
  try {
    // Hadle delete data
    let { id } = req.query;

    let rs = await roleServices.delete({
      id,
    });
    return res.status(200).json({
      message: 'Success',
      result: rs,
    });
  } catch (error) {
    console.log('[ERROR]: Delete role failed', error);
    throw error;
  }
});

module.exports = router;

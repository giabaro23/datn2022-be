const express = require('express');
const router = express();
const { v4: uuidv4 } = require('uuid');
const { permissionServices } = require('../services/index');

router.get('/', async (req, res) => {
  try {
    let result = await permissionServices.get();
    if (result) {
      console.log('[INFO]: Get permission successfully');
      return res.status(200).json({
        message: 'Success',
        result: result,
      });
    }
    console.log('[ERROR]: Get permission failed');
    return res.status(200).json({
      message: 'Failed',
    });
  } catch (error) {
    console.log('[ERROR]: Get permission failed', error);
    throw error;
  }
});

router.post('/', async (req, res) => {
  try {
    // Handle create data
    let { permissionName, roleId } = req.body;

    let result = await permissionServices.create({
      id: uuidv4(),
      permissionName,
      roleId,
    });
    if (result) {
      console.log('[INFO]: Create permission successfully');
      return res.status(200).json({
        message: 'Success',
        result: result,
      });
    }
    console.log('[ERROR]: Create permission failed');
    return res.status(200).json({
      message: 'Failed',
    });
  } catch (error) {
    console.log('[ERROR]: Create permission failed', error);
    throw error;
  }
});

router.put('/', async (req, res) => {
  try {
    // Handle update data
    let { id } = req.query;
    let { permissionName, roleId } = req.body;

    let result = await permissionServices.update({
      id,
      permissionName,
      roleId,
    });
    if (result) {
      console.log('[INFO]: Update permission successfully');
      return res.status(200).json({
        message: 'Success',
        result: result,
      });
    }
    console.log('[ERROR]: Update permission failed');
    return res.status(200).json({
      message: 'Failed',
      result: false,
    });
  } catch (error) {
    console.log('[ERROR]: Update permission failed', error);
    throw error;
  }
});

router.delete('/', async (req, res) => {
  try {
    // Hadle delete data
    let { id } = req.query;

    let rs = await permissionServices.delete({
      id,
    });
    return res.status(200).json({
      message: 'Success',
      result: rs,
    });
  } catch (error) {
    console.log('[ERROR]: Delete permission failed', error);
    throw error;
  }
});

module.exports = router;

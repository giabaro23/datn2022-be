const express = require('express');
const router = express();
const { v4: uuidv4 } = require('uuid');
const { profileFreelancerServices } = require('../services/index');

router.get('/', async (req, res) => {
  try {
    let result = await profileFreelancerServices.get();
    if (result) {
      console.log('[INFO]: Get profileFreelancer successfully');
      return res.status(200).json({
        message: 'Success',
        result: result,
      });
    }
    console.log('[ERROR]: Get profileFreelancer failed');
    return res.status(200).json({
      message: 'Failed',
    });
  } catch (error) {
    console.log('[ERROR]: Get profileFreelancer failed', error);
    throw error;
  }
});

router.post('/', async (req, res) => {
  try {
    // Handle create data
    let {
      userId,
      jobTitle,
      description,
      linkProfile,
      major,
      levelId,
      skills,
      status,
      workTypeId,
    } = req.body;

    let result = await profileFreelancerServices.create({
      id: uuidv4(),
      userId,
      jobTitle,
      description,
      linkProfile,
      major,
      levelId,
      skills,
      status,
      workTypeId,
    });
    if (result) {
      console.log('[INFO]: Create profileFreelancer successfully');
      return res.status(200).json({
        message: 'Success',
        result: result,
      });
    }
    console.log('[ERROR]: Create profileFreelancer failed');
    return res.status(200).json({
      message: 'Failed',
    });
  } catch (error) {
    console.log('[ERROR]: Create profileFreelancer failed', error);
    throw error;
  }
});

router.put('/', async (req, res) => {
  try {
    // Handle update data
    let { id } = req.query;
    let {
      userId,
      jobTitle,
      description,
      linkProfile,
      major,
      levelId,
      skills,
      workTypeId,
    } = req.body;

    let result = await profileFreelancerServices.update({
      id,
      userId,
      jobTitle,
      description,
      linkProfile,
      major,
      levelId,
      skills,
      workTypeId,
    });
    if (result) {
      console.log('[INFO]: Update profileFreelancer successfully');
      return res.status(200).json({
        message: 'Success',
        result: result,
      });
    }
    console.log('[ERROR]: Update profileFreelancer failed');
    return res.status(200).json({
      message: 'Failed',
      result: false,
    });
  } catch (error) {
    console.log('[ERROR]: Update profileFreelancer failed', error);
    throw error;
  }
});

router.delete('/', async (req, res) => {
  try {
    // Hadle delete data
    let { id } = req.query;

    let rs = await profileFreelancerServices.delete({
      id,
    });
    return res.status(200).json({
      message: 'Success',
      result: rs,
    });
  } catch (error) {
    console.log('[ERROR]: Delete profileFreelancer failed', error);
    throw error;
  }
});

module.exports = router;

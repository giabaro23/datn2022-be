const express = require('express');
const router = express();
const { v4: uuidv4 } = require('uuid');
const { jobServices } = require('../services/index');

router.post('/', async (req, res) => {
  try {
    // Handle permission role
    let {
      userId,
      categoryId,
      workTypeId,
      payTypeId,
      name,
      description,
      salary,
      startDate,
      endDate,
      dueDate,
      status,
      location,
    } = req.body;

    // Handle create data

    let rs = await jobServices.createJob({
      id: uuidv4(),
      userId,
      categoryId,
      workTypeId,
      payTypeId,
      name,
      description,
      salary,
      startDate,
      endDate,
      dueDate,
      status,
      location,
    });
    return res.status(200).json({
      rs,
    });
  } catch (error) {
    console.log('[ERROR]: Create job failed', error);
    throw error;
  }
});

router.get('/', async (req, res) => {
  try {
    let rs = await jobServices.getListJob();
    return res.status(200).json(rs);
  } catch (error) {
    console.log('[ERROR]: Get job failed', error);
    throw error;
  }
});

router.put('/', async (req, res) => {
  try {
    // Handle permission role
    // Handle update data
    let { id } = req.query;
    let {
      categoryId,
      workTypeId,
      payTypeId,
      name,
      description,
      salary,
      startDate,
      endDate,
      dueDate,
      status,
      location,
    } = req.body;

    let rs = await jobServices.updateJob({
      id,
      categoryId,
      workTypeId,
      payTypeId,
      name,
      description,
      salary,
      startDate,
      endDate,
      dueDate,
      status,
      location,
    });
    return res.status(200).json({
      message: 'Success',
      result: rs,
    });
  } catch (error) {
    console.log('[ERROR]: Update job failed', error);
    throw error;
  }
});

router.put('/applyJob', async (req, res) => {
  try {
    // Handle update data
    let { jobInformationId, userId } = req.body;

    await jobServices.updateStatusJob({
      id: jobInformationId,
      status: 'waiting',
    });

    let rs = await jobServices.applyJob({
      id: uuidv4(),
      jobInformationId,
      userId,
      status: 'Waiting',
    });
    return res.status(200).json({
      message: 'Apply job successfully',
      result: rs,
    });
  } catch (error) {
    console.log('[ERROR]: Apply job failed', error);
    throw error;
  }
});

router.put('/approveJob', async (req, res) => {
    try {
      // Handle update data
      let { jobInformationId } = req.body;
  
      await jobServices.updateStatusJob({
        id: jobInformationId,
        status: 'approved',
      });
  
      let rs = await jobServices.approveJob({
        jobInformationId,
        status: 'approved',
      });
      return res.status(200).json({
        message: 'Approved job successfully',
        result: rs,
      });
    } catch (error) {
      console.log('[ERROR]: Approve job failed', error);
      throw error;
    }
  });

module.exports = router;

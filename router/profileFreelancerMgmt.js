const express = require('express');
const router = express();
const { v4: uuidv4 } = require('uuid');
const { profileFreelancerServices } = require('../services/index');
const { comparePassword, hashPassword } = require('../common/hashPassword');
const { loginServices } = require('../services/index');

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

router.put('/changePassword', async (req, res) => {
  try {
    let { email } = req.userInfo;
    let { password, newPassword } = req.body;

    if (password === newPassword) {
      return res.status(400).json({
        msg: 'Please enter new password difference current password!',
      });
    }

    // Password with email
    let result = await loginServices.getPassword({
      email,
    });

    // Handle compare
    let resultCompare = await comparePassword(password, result[0]?.password);
    if (!resultCompare) {
      return res.status(400).json({
        msg: 'Please enter correct current password!',
      });
    }

    let newPass;
    await hashPassword(newPassword).then((res) => {
      newPass = res;
    });

    let response = await profileFreelancerServices.updatePassword({
      password: newPass,
      email,
    });

    if (response) {
      return res.status(200).json({
        message: 'Change password successfully!',
        result: true,
      });
    }

    return res.status(200).json({
      message: 'Failed',
      result: false,
    });
  } catch (error) {
    console.log('[ERROR]: Change password failed', error);
    throw error;
  }
});

router.put('/updateProfile', async (req, res) => {
  try {
    let { userId } = req.query;
    let { description, linkProfile, major, levelId, workTypeId } = req.body;

    let response = await profileFreelancerServices.updateProfile({
      description,
      linkProfile,
      major,
      levelId,
      workTypeId,
      id: userId
    });

    if (response) {
      return res.status(200).json({
        message: 'update profile freelancer successfully!',
        result: true,
      });
    }

    return res.status(200).json({
      message: 'Failed',
      result: false,
    });
  } catch (error) {
    console.log('[ERROR]: update profile freelancer failed', error);
    throw error;
  }
});

module.exports = router;

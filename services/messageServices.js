const pg = require('../model');
const moment = require('moment');

exports.get = async () => {
  let message = new pg.message();
  return await message
    .get()
    .then((res) => {
      console.log('[INFO]: Function get successfully');
      return res.rows;
    })
    .catch((error) => {
      console.error('[ERROR]: Function get failed', error);
      throw new Error(error);
    });
};

exports.create = async (messageInfo) => {
  messageInfo.createDate = moment().format();
  let message = new pg.message();
  return await message
    .save(messageInfo)
    .then((res) => {
      console.log('[INFO]: Function create successfully');
      return true;
    })
    .catch((error) => {
      console.error('[ERROR]: Function create failed', error);
      throw new Error(error);
    });
};

exports.update = async (messageInfo) => {
  let message = new pg.message();
  return await message
    .update(messageInfo)
    .then((res) => {
      console.log('[INFO]: Function update successfully');
      return true;
    })
    .catch((error) => {
      console.error('[ERROR]: Function update failed', error);
      throw new Error(error);
    });
};

exports.delete = async (messageInfo) => {
  let message = new pg.message();
  return await message
    .delete(messageInfo)
    .then((res) => {
      console.log('[INFO]: Function delete successfully');
      return true;
    })
    .catch((error) => {
      console.error('[ERROR]: Function delete failed', error);
      throw new Error(error);
    });
};

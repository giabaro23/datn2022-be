const pg = require('../model');
const moment = require('moment');

exports.get = async () => {
  let conversation = new pg.conversation();
  return await conversation
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

exports.create = async (conversationInfo) => {
  conversationInfo.createDate = moment().format();
  let conversation = new pg.conversation();
  return await conversation
    .save(conversationInfo)
    .then((res) => {
      console.log('[INFO]: Function create successfully');
      return true;
    })
    .catch((error) => {
      console.error('[ERROR]: Function create failed', error);
      throw new Error(error);
    });
};

exports.update = async (conversationInfo) => {
  let conversation = new pg.conversation();
  return await conversation
    .update(conversationInfo)
    .then((res) => {
      console.log('[INFO]: Function update successfully');
      return true;
    })
    .catch((error) => {
      console.error('[ERROR]: Function update failed', error);
      throw new Error(error);
    });
};

exports.delete = async (conversationInfo) => {
  let conversation = new pg.conversation();
  return await conversation
    .delete(conversationInfo)
    .then((res) => {
      console.log('[INFO]: Function delete successfully');
      return true;
    })
    .catch((error) => {
      console.error('[ERROR]: Function delete failed', error);
      throw new Error(error);
    });
};

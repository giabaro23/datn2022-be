const pg = require('../model');
const moment = require('moment');

exports.get = async () => {
  let level = new pg.level();
  return await level
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

exports.create = async (levelInfo) => {
  let level = new pg.level();
  return await level
    .save(levelInfo)
    .then((res) => {
      console.log('[INFO]: Function create successfully');
      return true;
    })
    .catch((error) => {
      console.error('[ERROR]: Function create failed', error);
      throw new Error(error);
    });
};

exports.update = async (levelInfo) => {
  let level = new pg.level();
  return await level
    .update(levelInfo)
    .then((res) => {
      console.log('[INFO]: Function update successfully');
      return true;
    })
    .catch((error) => {
      console.error('[ERROR]: Function update failed', error);
      throw new Error(error);
    });
};

exports.delete = async (levelInfo) => {
  let level = new pg.level();
  return await level
    .delete(levelInfo)
    .then((res) => {
      console.log('[INFO]: Function delete successfully');
      return true;
    })
    .catch((error) => {
      console.error('[ERROR]: Function delete failed', error);
      throw new Error(error);
    });
};

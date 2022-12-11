const pg = require('../model');

exports.get = async () => {
  let workType = new pg.workType();
  return await workType
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

exports.create = async (workTypeInfo) => {
  let workType = new pg.workType();
  return await workType
    .save(workTypeInfo)
    .then((res) => {
      console.log('[INFO]: Function create successfully');
      return true;
    })
    .catch((error) => {
      console.error('[ERROR]: Function create failed', error);
      throw new Error(error);
    });
};

exports.update = async (workTypeInfo) => {
  let workType = new pg.workType();
  return await workType
    .update(workTypeInfo)
    .then((res) => {
      console.log('[INFO]: Function update successfully');
      return true;
    })
    .catch((error) => {
      console.error('[ERROR]: Function update failed', error);
      throw new Error(error);
    });
};

exports.delete = async (workTypeInfo) => {
  let workType = new pg.workType();
  return await workType
    .delete(workTypeInfo)
    .then((res) => {
      console.log('[INFO]: Function delete successfully');
      return true;
    })
    .catch((error) => {
      console.error('[ERROR]: Function delete failed', error);
      throw new Error(error);
    });
};

const pg = require('../model');

exports.get = async () => {
  let saveJob = new pg.saveJob();
  return await saveJob
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

exports.create = async (saveJobInfo) => {
  let saveJob = new pg.saveJob();
  return await saveJob
    .save(saveJobInfo)
    .then((res) => {
      console.log('[INFO]: Function create successfully');
      return true;
    })
    .catch((error) => {
      console.error('[ERROR]: Function create failed', error);
      throw new Error(error);
    });
};

exports.update = async (saveJobInfo) => {
  let saveJob = new pg.saveJob();
  return await saveJob
    .update(saveJobInfo)
    .then((res) => {
      console.log('[INFO]: Function update successfully');
      return true;
    })
    .catch((error) => {
      console.error('[ERROR]: Function update failed', error);
      throw new Error(error);
    });
};

exports.delete = async (saveJobInfo) => {
  let saveJob = new pg.saveJob();
  return await saveJob
    .delete(saveJobInfo)
    .then((res) => {
      console.log('[INFO]: Function delete successfully');
      return true;
    })
    .catch((error) => {
      console.error('[ERROR]: Function delete failed', error);
      throw new Error(error);
    });
};

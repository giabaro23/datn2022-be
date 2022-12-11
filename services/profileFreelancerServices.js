const pg = require('../model');

exports.get = async () => {
  let profileFreelancer = new pg.profileFreelancer();
  return await profileFreelancer
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

exports.create = async (profileFreelancerInfo) => {
  let profileFreelancer = new pg.profileFreelancer();
  return await profileFreelancer
    .save(profileFreelancerInfo)
    .then((res) => {
      console.log('[INFO]: Function create successfully');
      return true;
    })
    .catch((error) => {
      console.error('[ERROR]: Function create failed', error);
      throw new Error(error);
    });
};

exports.update = async (profileFreelancerInfo) => {
  let profileFreelancer = new pg.profileFreelancer();
  return await profileFreelancer
    .update(profileFreelancerInfo)
    .then((res) => {
      console.log('[INFO]: Function update successfully');
      return true;
    })
    .catch((error) => {
      console.error('[ERROR]: Function update failed', error);
      throw new Error(error);
    });
};

exports.delete = async (profileFreelancerInfo) => {
  let profileFreelancer = new pg.profileFreelancer();
  return await profileFreelancer
    .delete(profileFreelancerInfo)
    .then((res) => {
      console.log('[INFO]: Function delete successfully');
      return true;
    })
    .catch((error) => {
      console.error('[ERROR]: Function delete failed', error);
      throw new Error(error);
    });
};

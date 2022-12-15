const pg = require('../model');
const moment = require('moment');

exports.createJob = async (jobInfo) => {
  jobInfo.createDate = moment().format();
  jobInfo.status = true;
  let jobInformation = new pg.jobInformation();
  return await jobInformation
    .save(jobInfo)
    .then((res) => {
      return true;
    })
    .catch((error) => {
      console.error(error);
      throw new Error(error);
    });
};

exports.getListJob = async () => {
  let jobInformation = new pg.jobInformation();
  return await jobInformation
    .get()
    .then((res) => {
      return res.rows;
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });
};

exports.updateJob = async (jobInfo) => {
  jobInfo.updateDate = moment().format();
  let jobInformation = new pg.jobInformation();
  return await jobInformation
    .update(jobInfo)
    .then((res) => {
      return true;
    })
    .catch((error) => {
      console.error(error);
      throw new Error(error);
    });
};

exports.createJob = async (jobInfo) => {
  jobInfo.createDate = moment().format();
  jobInfo.status = true;
  let jobInformation = new pg.jobInformation();
  return await jobInformation
    .save(jobInfo)
    .then((res) => {
      return true;
    })
    .catch((error) => {
      console.error(error);
      throw new Error(error);
    });
};

exports.getListJob = async () => {
  let jobInformation = new pg.jobInformation();
  return await jobInformation
    .get()
    .then((res) => {
      return res.rows;
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });
};

exports.applyJob = async (jobInfo) => {
  jobInfo.createDate = moment().format();
  let jobInformation = new pg.jobInformation();
  return await jobInformation
    .applyJob(jobInfo)
    .then((res) => {
      return true;
    })
    .catch((error) => {
      console.error(error);
      throw new Error(error);
    });
};

exports.updateStatusJob = async (jobInfo) => {
  let jobInformation = new pg.jobInformation();
  return await jobInformation
    .updateStatusJob(jobInfo)
    .then((res) => {
      return true;
    })
    .catch((error) => {
      console.error(error);
      throw new Error(error);
    });
};


exports.approveJob = async (jobInfo) => {
    let jobInformation = new pg.jobInformation();
    return await jobInformation
      .approveJob(jobInfo)
      .then((res) => {
        return true;
      })
      .catch((error) => {
        console.error(error);
        throw new Error(error);
      });
  };

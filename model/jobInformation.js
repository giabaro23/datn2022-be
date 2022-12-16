const pg = require('pg');
const { PG_CONFIG, PG_DB } = require('../common/constants');

class jobInformation {
  constructor() {
    this.init();
  }
  init() {
    if (!this.pool) {
      this.pool = new pg.Pool(PG_CONFIG);
      this.tableName = `${PG_DB.SCHEMA}."${PG_DB.JOB_INFORMATION}"`;
      this.tableName2 = `${PG_DB.SCHEMA}."${PG_DB.JOB_DETAIL}"`;
    }
  }
  save(jobInfo) {
    let query = `INSERT INTO ${this.tableName} ("id", "userId","topicName","workTypeName","payTypeName","name","description",
        "salaryMin","salaryMax","dueDate","createDate","status","location","skills")
        VALUES ($1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)`;
    let data = [
      jobInfo.id,
      jobInfo.userId,
      jobInfo.topicName,
      jobInfo.workTypeName,
      jobInfo.payTypeName,
      jobInfo.name,
      jobInfo.description,
      jobInfo.salaryMin,
      jobInfo.salaryMax,
      jobInfo.dueDate,
      jobInfo.createDate,
      jobInfo.status,
      jobInfo.location,
      jobInfo.skills,
    ];
    return this.pool.query(query, data);
  }

  get() {
    let query = `SELECT * FROM ${this.tableName} ORDER BY "name"`;
    return this.pool.query(query);
  }
  getById(id) {
    let query = `SELECT * FROM ${this.tableName} WHERE "id"=($1)`;
    return this.pool.query(query, [id]);
  }
  getListByUserId(userId){
    let query = `SELECT * FROM ${this.tableName} WHERE "userId"=($1)`;
    return this.pool.query(query, [userId]);
  }

  update(jobInfo) {
    let query = `UPDATE ${this.tableName} SET "categoryId" = ($2), "workTypeId"=($3), "payTypeId"=($4), "name"=($5), 
        "description"=($6), "salary"=($7), "startDate"($7), "endDate"=($8), "dueDate"=($9), "status"=($10),"location"=($11), "updateDate"=($12)
        WHERE "id" = ($1)`;

    let data = [
      jobInfo.id,
      jobInfo.categoryId,
      jobInfo.workTypeId,
      jobInfo.payTypeId,
      jobInfo.name,
      jobInfo.description,
      jobInfo.salary,
      jobInfo.startDate,
      jobInfo.endDate,
      jobInfo.dueDate,
      jobInfo.status,
      jobInfo.location,
      jobInfo.updateDate,
    ];
    return this.pool.query(query, data);
  }

  applyJob(jobInfo) {
    let query = `INSERT INTO ${this.tableName2} ("id", "jobInformationId","userId", "createDate", "status")
        VALUES ($1, $2,$3,$4,$5)`;
    let data = [
      jobInfo.id,
      jobInfo.jobInformationId,
      jobInfo.userId,
      jobInfo.createDate,
      jobInfo.status,
    ];
    return this.pool.query(query, data);
  }

  updateStatusJob(jobInfo) {
    let query = `UPDATE ${this.tableName} SET "status" = ($1)
        WHERE "id" = ($2)`;
    let data = [jobInfo.status, jobInfo.id];

    return this.pool.query(query, data);
  }

  approveJob(jobInfo) {
    let query = `UPDATE ${this.tableName2} SET "status" = ($1)
        WHERE "jobInformationId" = ($2)`;
    let data = [jobInfo.status, jobInfo.jobInformationId];

    return this.pool.query(query, data);
  }
}

module.exports = jobInformation;

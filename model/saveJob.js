const pg = require('pg');
const { PG_CONFIG, PG_DB } = require('../common/constants');

class saveJob {
  constructor() {
    this.init();
  }
  init() {
    if (!this.pool) {
      this.pool = new pg.Pool(PG_CONFIG);
      this.tableName = `${PG_DB.SCHEMA}."${PG_DB.SAVE_JOB}"`;
    }
  }
  save(saveJobInfo) {
    let query = `INSERT INTO ${this.tableName} ("id", "jobInformationId", "userId")
      VALUES ($1, $2, $3)`;
    let data = [
      saveJobInfo.id,
      saveJobInfo.jobInformationId,
      saveJobInfo.userId,
    ];
    return this.pool.query(query, data);
  }

  get() {
    let query = `SELECT * FROM ${this.tableName}`;
    return this.pool.query(query);
  }

  update(saveJobInfo) {
    let query = `UPDATE ${this.tableName} SET "jobInformationId" = ($1), "userId" = ($2)
    WHERE "id" = ($3)`;

    let data = [
      saveJobInfo.jobInformationId,
      saveJobInfo.userId,
      saveJobInfo.id,
    ];
    return this.pool.query(query, data);
  }

  delete(saveJobInfo) {
    let query = `DELETE FROM ${this.tableName} WHERE "id" = ($1)`;
    let data = [saveJobInfo.id];

    return this.pool.query(query, data);
  }
}

module.exports = saveJob;

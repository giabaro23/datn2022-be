const pg = require('pg');
const { PG_CONFIG, PG_DB } = require('../common/constants');

class rating {
  constructor() {
    this.init();
  }
  init() {
    if (!this.pool) {
      this.pool = new pg.Pool(PG_CONFIG);
      this.tableName = `${PG_DB.SCHEMA}."${PG_DB.RATING}"`;
    }
  }
  save(ratingInfo) {
    let query = `INSERT INTO ${this.tableName} ("id", "jobInformation", "userId","rate","comment")
      VALUES ($1, $2, $3, $4, $5)`;
    let data = [
      ratingInfo.id,
      ratingInfo.jobInformation,
      ratingInfo.userId,
      ratingInfo.rate,
      ratingInfo.comment,
    ];
    return this.pool.query(query, data);
  }

  get() {
    let query = `SELECT * FROM ${this.tableName}`;
    return this.pool.query(query);
  }

  update(ratingInfo) {
    let query = `UPDATE ${this.tableName} SET "jobInformation" = ($1), "userId" = ($2), "rate" = ($3), "comment" = ($4)
    WHERE "id" = ($5)`;

    let data = [
      ratingInfo.jobInformation,
      ratingInfo.userId,
      ratingInfo.rate,
      ratingInfo.comment,
      ratingInfo.id,
    ];
    return this.pool.query(query, data);
  }

  delete(ratingInfo) {
    let query = `DELETE FROM ${this.tableName} WHERE "id" = ($1)`;
    let data = [ratingInfo.id];

    return this.pool.query(query, data);
  }
}

module.exports = rating;

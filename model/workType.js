const pg = require('pg');
const { PG_CONFIG, PG_DB } = require('../common/constants');

class workType {
  constructor() {
    this.init();
  }
  init() {
    if (!this.pool) {
      this.pool = new pg.Pool(PG_CONFIG);
      this.tableName = `${PG_DB.SCHEMA}."${PG_DB.WORK_TYPE}"`;
    }
  }
  save(workTypeInfo) {
    let query = `INSERT INTO ${this.tableName} ("id", "nameWorkType")
      VALUES ($1, $2)`;
    let data = [workTypeInfo.id, workTypeInfo.nameWorkType];
    return this.pool.query(query, data);
  }

  get() {
    let query = `SELECT * FROM ${this.tableName}`;
    return this.pool.query(query);
  }

  update(workTypeInfo) {
    let query = `UPDATE ${this.tableName} SET "nameWorkType" = ($1)
    WHERE "id" = ($2)`;

    let data = [workTypeInfo.nameWorkType, workTypeInfo.id];
    return this.pool.query(query, data);
  }

  delete(workTypeInfo) {
    let query = `DELETE FROM ${this.tableName} WHERE "id" = ($1)`;
    let data = [workTypeInfo.id];

    return this.pool.query(query, data);
  }
}

module.exports = workType;

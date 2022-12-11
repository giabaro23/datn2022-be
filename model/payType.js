const pg = require('pg');
const { PG_CONFIG, PG_DB } = require('../common/constants');

class payType {
  constructor() {
    this.init();
  }
  init() {
    if (!this.pool) {
      this.pool = new pg.Pool(PG_CONFIG);
      this.tableName = `${PG_DB.SCHEMA}."${PG_DB.PAY_TYPE}"`;
    }
  }
  save(payTypeInfo) {
    let query = `INSERT INTO ${this.tableName} ("id", "namePayType")
      VALUES ($1, $2)`;
    let data = [payTypeInfo.id, payTypeInfo.namePayType];
    return this.pool.query(query, data);
  }

  get() {
    let query = `SELECT * FROM ${this.tableName}`;
    return this.pool.query(query);
  }

  update(payTypeInfo) {
    let query = `UPDATE ${this.tableName} SET "namePayType" = ($1)
      WHERE "id" = ($2)`;

    let data = [payTypeInfo.namePayType, payTypeInfo.id];
    return this.pool.query(query, data);
  }

  delete(payTypeInfo) {
    let query = `DELETE FROM ${this.tableName} WHERE "id" = ($1)`;
    let data = [payTypeInfo.id];

    return this.pool.query(query, data);
  }
}

module.exports = payType;

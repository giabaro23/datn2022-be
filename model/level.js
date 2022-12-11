const pg = require('pg');
const { PG_CONFIG, PG_DB } = require('../common/constants');

class level {
  constructor() {
    this.init();
  }
  init() {
    if (!this.pool) {
      this.pool = new pg.Pool(PG_CONFIG);
      this.tableName = `${PG_DB.SCHEMA}."${PG_DB.LEVEL}"`;
    }
  }
  save(levelInfo) {
    let query = `INSERT INTO ${this.tableName} ("id", "levelName")
      VALUES ($1, $2)`;
    let data = [
      levelInfo.id,
      levelInfo.levelName,
    ];
    return this.pool.query(query, data);
  }

  get() {
    let query = `SELECT * FROM ${this.tableName}`;
    return this.pool.query(query);
  }

  update(levelInfo) {
    let query = `UPDATE ${this.tableName} SET "levelName" = ($1)
      WHERE "id" = ($2)`;

    let data = [
      levelInfo.levelName,
      levelInfo.id,
    ];
    return this.pool.query(query, data);
  }

  delete(levelInfo) {
    let query = `DELETE FROM ${this.tableName} WHERE "id" = ($1)`;
    let data = [levelInfo.id];

    return this.pool.query(query, data);
  }
}

module.exports = level;

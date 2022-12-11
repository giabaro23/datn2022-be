const pg = require('pg');
const { PG_CONFIG, PG_DB } = require('../common/constants');

class role {
  constructor() {
    this.init();
  }
  init() {
    if (!this.pool) {
      this.pool = new pg.Pool(PG_CONFIG);
      this.tableName = `${PG_DB.SCHEMA}."${PG_DB.ROLE}"`;
    }
  }
  save(roleInfo) {
    let query = `INSERT INTO ${this.tableName} ("id", "roleName")
      VALUES ($1, $2)`;
    let data = [roleInfo.id, roleInfo.roleName];
    return this.pool.query(query, data);
  }

  get() {
    let query = `SELECT * FROM ${this.tableName}`;
    return this.pool.query(query);
  }

  update(roleInfo) {
    let query = `UPDATE ${this.tableName} SET "roleName" = ($1)
    WHERE "id" = ($2)`;

    let data = [roleInfo.roleName, roleInfo.id];
    return this.pool.query(query, data);
  }

  delete(roleInfo) {
    let query = `DELETE FROM ${this.tableName} WHERE "id" = ($1)`;
    let data = [roleInfo.id];

    return this.pool.query(query, data);
  }
}

module.exports = role;

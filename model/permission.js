const pg = require('pg');
const { PG_CONFIG, PG_DB } = require('../common/constants');

class permission {
  constructor() {
    this.init();
  }
  init() {
    if (!this.pool) {
      this.pool = new pg.Pool(PG_CONFIG);
      this.tableName = `${PG_DB.SCHEMA}."${PG_DB.PERMISSION}"`;
    }
  }
  save(permissionInfo) {
    let query = `INSERT INTO ${this.tableName} ("id", "permissionName", "roleId")
      VALUES ($1, $2, $3)`;
    let data = [permissionInfo.id, permissionInfo.permissionName, permissionInfo.roleId];
    return this.pool.query(query, data);
  }

  get() {
    let query = `SELECT * FROM ${this.tableName}`;
    return this.pool.query(query);
  }

  update(permissionInfo) {
    let query = `UPDATE ${this.tableName} SET "permissionName" = ($1), "roleId" = ($2)
      WHERE "id" = ($3)`;

    let data = [
      permissionInfo.permissionName,
      permissionInfo.roleId,
      permissionInfo.id,
    ];
    return this.pool.query(query, data);
  }

  delete(permissionInfo) {
    let query = `DELETE FROM ${this.tableName} WHERE "id" = ($1)`;
    let data = [permissionInfo.id];

    return this.pool.query(query, data);
  }
}

module.exports = permission;

const pg = require('pg');
const { PG_CONFIG, PG_DB } = require('../common/constants');

class message {
  constructor() {
    this.init();
  }
  init() {
    if (!this.pool) {
      this.pool = new pg.Pool(PG_CONFIG);
      this.tableName = `${PG_DB.SCHEMA}."${PG_DB.MESSAGE}"`;
    }
  }
  save(messageInfo) {
    let query = `INSERT INTO ${this.tableName} ("id", "conversationId", "message", "createDate", "createByUserId")
      VALUES ($1, $2, $3, $4, $5)`;
    let data = [
      messageInfo.id,
      messageInfo.conversationId,
      messageInfo.message,
      messageInfo.createDate,
      messageInfo.createByUserId,
    ];
    return this.pool.query(query, data);
  }

  get() {
    let query = `SELECT * FROM ${this.tableName}`;
    return this.pool.query(query);
  }

  update(messageInfo) {
    let query = `UPDATE ${this.tableName} SET "message" = ($1)
      WHERE "id" = ($2)`;

    let data = [messageInfo.message, messageInfo.id];
    return this.pool.query(query, data);
  }

  delete(messageInfo) {
    let query = `DELETE FROM ${this.tableName} WHERE "id" = ($1)`;
    let data = [messageInfo.id];

    return this.pool.query(query, data);
  }
}

module.exports = message;

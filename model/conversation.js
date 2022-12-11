const pg = require('pg');
const { PG_CONFIG, PG_DB } = require('../common/constants');

class conversation {
  constructor() {
    this.init();
  }
  init() {
    if (!this.pool) {
      this.pool = new pg.Pool(PG_CONFIG);
      this.tableName = `${PG_DB.SCHEMA}."${PG_DB.CONVERSATION}"`;
    }
  }
  save(conversationInfo) {
    let query = `INSERT INTO ${this.tableName} ("id", "userId1","userId2","createDate")
      VALUES ($1, $2,$3,$4)`;
    let data = [
      conversationInfo.id,
      conversationInfo.userId1,
      conversationInfo.userId2,
      conversationInfo.createDate,
    ];
    return this.pool.query(query, data);
  }

  get() {
    let query = `SELECT * FROM ${this.tableName}`;
    return this.pool.query(query);
  }

  update(conversationInfo) {
    let query = `UPDATE ${this.tableName} SET "userId1" = ($1), "userId2" = ($2)
      WHERE "id" = ($3)`;

    let data = [
      conversationInfo.userId1,
      conversationInfo.userId2,
      conversationInfo.id,
    ];
    return this.pool.query(query, data);
  }

  delete(conversationInfo) {
    let query = `DELETE FROM ${this.tableName} WHERE "id" = ($1)`;
    let data = [conversationInfo.id];

    return this.pool.query(query, data);
  }
}

module.exports = conversation;

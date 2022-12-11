const pg = require('pg');
const { PG_CONFIG, PG_DB } = require('../common/constants');

class profileFreelancer {
  constructor() {
    this.init();
  }
  init() {
    if (!this.pool) {
      this.pool = new pg.Pool(PG_CONFIG);
      this.tableName = `${PG_DB.SCHEMA}."${PG_DB.PROFILE_FREELANCER}"`;
    }
  }
  save(profileFreelancerInfo) {
    let query = `INSERT INTO ${this.tableName} ("id", "userId", "jobTitle", "description", "linkProfile", "major", "levelId", "skills", "status", "workTypeId")
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`;
    let data = [
      profileFreelancerInfo.id,
      profileFreelancerInfo.userId,
      profileFreelancerInfo.jobTitle,
      profileFreelancerInfo.description,
      profileFreelancerInfo.linkProfile,
      profileFreelancerInfo.major,
      profileFreelancerInfo.levelId,
      profileFreelancerInfo.skills,
      profileFreelancerInfo.status,
      profileFreelancerInfo.workTypeId,
    ];
    return this.pool.query(query, data);
  }

  get() {
    let query = `SELECT * FROM ${this.tableName}`;
    return this.pool.query(query);
  }

  update(profileFreelancerInfo) {
    let query = `UPDATE ${this.tableName} SET "userId" = ($1), "jobTitle" = ($2), "description" = ($3), 
    "linkProfile" = ($4), "major" = ($5), "levelId" = ($6), "skills" = ($7), "workTypeId" = ($8)
    WHERE "id" = ($9)`;

    let data = [
      profileFreelancerInfo.userId,
      profileFreelancerInfo.jobTitle,
      profileFreelancerInfo.description,
      profileFreelancerInfo.linkProfile,
      profileFreelancerInfo.major,
      profileFreelancerInfo.levelId,
      profileFreelancerInfo.skills,
      profileFreelancerInfo.workTypeId,
      profileFreelancerInfo.id
    ];
    return this.pool.query(query, data);
  }

  delete(profileFreelancerInfo) {
    let query = `DELETE FROM ${this.tableName} WHERE "id" = ($1)`;
    let data = [profileFreelancerInfo.id];

    return this.pool.query(query, data);
  }
}

module.exports = profileFreelancer;

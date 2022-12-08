const {
    query
} = require('express');
const pg = require('pg');
const {
    PG_CONFIG,
    PG_DB
} = require('../common/constants');

class jobInformation {
    constructor() {
        this.init()
    }
    init() {
        if (!this.pool) {
            this.pool = new pg.Pool(PG_CONFIG);
            this.tableName = `${PG_DB.SCHEMA}."${PG_DB.JOB_INFORMATION}"`;
            this.tableName2 = `${PG_DB.SCHEMA}."${PG_DB.JOB_DETAIL}"`;
        }
    }
    save(jobInfo) {
        let query = `INSERT INTO ${this.tableName} ("id", "userId","categoryId","workTypeId","payTypeId","name","description",
        "salary",,"startDate","endDate","dueDate","createDate","status","location")
        VALUES ($1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)`;
        let data = [jobInfo.id, jobInfo.userId, jobInfo.categoryId, jobInfo.workTypeId, jobInfo.payTypeId, jobInfo.name, jobInfo.description, jobInfo.salary, jobInfo.startDate, jobInfo.endDate, jobInfo.dueDate, jobInfo.createDate, jobInfo.status, jobInfo.location];
        return this.pool.query(query, data);
    }

    get() {
        let query = `SELECT * FROM ${this.tableName} ORDER BY "name"`;
        return this.pool.query(query);
    }

    update(jobInfo) {
        let query = `UPDATE ${this.tableName} SET "categoryId" = ($2), "workTypeId"=($3), "payTypeId"=($4), "name"=($5), 
        "description"=($6), "salary"=($7), "startDate"($7), "endDate"=($8), "dueDate"=($9), "status"=($10),"location"=($11), "updateDate"=($12)
        WHERE "id" = ($1)`;

        let data = [jobInfo.id, jobInfo.categoryId, jobInfo.workTypeId, jobInfo.payTypeId, jobInfo.name, jobInfo.description, jobInfo.salary, jobInfo.startDate, jobInfo.endDate, jobInfo.dueDate, jobInfo.status, jobInfo.location, jobInfo.updateDate];
        return this.pool.query(query, data);
    }

    
}

module.exports = jobInformation;
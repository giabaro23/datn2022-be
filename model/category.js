const pg = require('pg');
const {
    PG_CONFIG,
    PG_DB
} = require('../common/constants');

class category {
    constructor() {
        this.init()
    }
    init() {
        if (!this.pool) {
            this.pool = new pg.Pool(PG_CONFIG);
            this.tableName = `${PG_DB.SCHEMA}."${PG_DB.CATEGORY}"`;
            this.tableName2 = `${PG_DB.SCHEMA}."${PG_DB.CATEGORY_DETAIL}"`;
        }
    }
    save(categoryInfo) {
        let query = `INSERT INTO ${this.tableName} ("id", "nameCategory") VALUES ($1, $2)`;

        let data = [categoryInfo.id, categoryInfo.nameCategory];
        return this.pool.query(query, data);
    }

    get() {
        let query = `SELECT * FROM ${this.tableName} ORDER BY "nameCategory"`;

        return this.pool.query(query);
    }

    saveDetail(categoryInfo) {
        let query = `INSERT INTO ${this.tableName2} ("id", "categoryId", "name") VALUES ($1, $2, $3)`;

        let data = [categoryInfo.id, categoryInfo.categoryId, categoryInfo.name];
        return this.pool.query(query, data);
    }

    getListCategory() {
        let query = `SELECT a."nameCategory", b."id", b."categoryId", b."name" FROM ${this.tableName} as a JOIN ${this.tableName2} as b ON a."id" = b."categoryId"`;

        return this.pool.query(query);
    }

    update(categoryInfo) {
        let query = `UPDATE ${this.tableName} SET "nameCategory" = ($2) WHERE "id" = ($1)`;

        let data = [categoryInfo.id, categoryInfo.nameCategory];
        return this.pool.query(query, data);
    }

    updateDetail(categoryInfo) {
        let query = `UPDATE ${this.tableName2} SET "categoryId" = ($2), "name" = ($3) WHERE "id" = ($1)`;

        let data = [categoryInfo.id, categoryInfo.categoryId, categoryInfo.name];
        return this.pool.query(query, data);
    }

    async delete(categoryInfo) {
        let query = `DELETE FROM ${this.tableName2} WHERE "categoryId" = ($1)`;
        let query2 = `DELETE FROM ${this.tableName} WHERE "id" = ($1)`;

        let data = [categoryInfo.id];

        await this.pool.query(query, data)
        return await this.pool.query(query2, data);
    }



}

module.exports = category;
const pg = require('pg');
const {
    PG_CONFIG,
    PG_DB
} = require('../common/constants');

class userInformation {
    constructor() {
        this.init()
    }
    init() {
        if (!this.pool) {
            this.pool = new pg.Pool(PG_CONFIG);
            this.tableName = `${PG_DB.SCHEMA}."${PG_DB.USERS_INFORMATION}"`
        }
    }
    save(userInfo) {
        let query = `INSERT INTO ${this.tableName} ("roleId","email","password","address","description","phoneNumber","firstName","lastName","isActive","createDate")
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`;

        let data = [userInfo.roleId, userInfo.email, userInfo.newPassword, userInfo.address, userInfo.description, userInfo.phoneNumber, userInfo.firstName, userInfo.lastName, userInfo.isActive, userInfo.createDate];
        return this.pool.query(query, data);
    }

    getPassword(userInfo) {
        let query = `SELECT "password" FROM ${this.tableName} WHERE "email" = ($1)`;

        let data = [userInfo.email];
        return this.pool.query(query, data);
    }

    getUserInfo(userInfo) {
        let query = `SELECT * FROM ${this.tableName} WHERE "email" = ($1)`;
        let data = [userInfo.email];
        return this.pool.query(query, data);
    }

    getUserInfoById(userInfo) {
        let query = `SELECT "roleId","email","address","description","phoneNumber","firstName","lastName","isActive","createDate","avatar" FROM ${this.tableName} WHERE "id"=($1)`
        let data = [userInfo.id]
        return this.pool.query(query, data);
    }

    updateProfile(userInfo) {
        let query = `UPDATE ${this.tableName} SET
                    "address" = ($1),
                    "description" = ($2),
                    "firstName" = ($3),
                    "lastName" = ($4),
                    "phoneNumber" = ($5),
                    "avatar" = ($6)
                    WHERE "email" = ($7)`;

        let data = [userInfo.address, userInfo.description, userInfo.firstName, userInfo.lastName, userInfo.phoneNumber, userInfo.avatar, userInfo.email];
        return this.pool.query(query, data);
    }

    getListUser() {
        let query = `SELECT * from ${this.tableName}`
        return this.pool.query(query)
    }

    lockUser(userInfo) {
        let query = `UPDATE ${this.tableName} SET "isActive" =($1) WHERE "email"=($2)`
        let data = [userInfo.isActive, userInfo.emailUser]
        return this.pool.query(query, data)
    }
}

module.exports = userInformation;
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var pg = require('pg');

var _require = require('../common/constants'),
    PG_CONFIG = _require.PG_CONFIG,
    PG_DB = _require.PG_DB;

var jobInformation =
/*#__PURE__*/
function () {
  function jobInformation() {
    _classCallCheck(this, jobInformation);

    this.init();
  }

  _createClass(jobInformation, [{
    key: "init",
    value: function init() {
      if (!this.pool) {
        this.pool = new pg.Pool(PG_CONFIG);
        this.tableName = "".concat(PG_DB.SCHEMA, ".\"").concat(PG_DB.JOB_INFORMATION, "\"");
        this.tableName2 = "".concat(PG_DB.SCHEMA, ".\"").concat(PG_DB.JOB_DETAIL, "\"");
      }
    }
  }, {
    key: "save",
    value: function save(jobInfo) {
      var query = "INSERT INTO ".concat(this.tableName, " (\"id\", \"userId\",\"topicName\",\"workTypeName\",\"payTypeName\",\"name\",\"description\",\n        \"salaryMin\",\"salaryMax\",\"dueDate\",\"createDate\",\"status\",\"location\",\"skills\")\n        VALUES ($1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)");
      var data = [jobInfo.id, jobInfo.userId, jobInfo.topicName, jobInfo.workTypeName, jobInfo.payTypeName, jobInfo.name, jobInfo.description, jobInfo.salaryMin, jobInfo.salaryMax, jobInfo.dueDate, jobInfo.createDate, jobInfo.status, jobInfo.location, jobInfo.skills];
      return this.pool.query(query, data);
    }
  }, {
    key: "get",
    value: function get() {
      var query = "SELECT * FROM ".concat(this.tableName, " ORDER BY \"name\"");
      return this.pool.query(query);
    }
  }, {
    key: "getById",
    value: function getById(id) {
      var query = "SELECT * FROM ".concat(this.tableName, " WHERE \"id\"=($1)");
      return this.pool.query(query, [id]);
    }
  }, {
    key: "getListByUserId",
    value: function getListByUserId(userId) {
      var query = "SELECT * FROM ".concat(this.tableName, " WHERE \"userId\"=($1)");
      return this.pool.query(query, [userId]);
    }
  }, {
    key: "update",
    value: function update(jobInfo) {
      var query = "UPDATE ".concat(this.tableName, " SET \"categoryId\" = ($2), \"workTypeId\"=($3), \"payTypeId\"=($4), \"name\"=($5), \n        \"description\"=($6), \"salary\"=($7), \"startDate\"($7), \"endDate\"=($8), \"dueDate\"=($9), \"status\"=($10),\"location\"=($11), \"updateDate\"=($12)\n        WHERE \"id\" = ($1)");
      var data = [jobInfo.id, jobInfo.categoryId, jobInfo.workTypeId, jobInfo.payTypeId, jobInfo.name, jobInfo.description, jobInfo.salary, jobInfo.startDate, jobInfo.endDate, jobInfo.dueDate, jobInfo.status, jobInfo.location, jobInfo.updateDate];
      return this.pool.query(query, data);
    }
  }, {
    key: "applyJob",
    value: function applyJob(jobInfo) {
      var query = "INSERT INTO ".concat(this.tableName2, " (\"id\", \"jobInformationId\",\"userId\", \"createDate\", \"status\")\n        VALUES ($1, $2,$3,$4,$5)");
      var data = [jobInfo.id, jobInfo.jobInformationId, jobInfo.userId, jobInfo.createDate, jobInfo.status];
      return this.pool.query(query, data);
    }
  }, {
    key: "updateStatusJob",
    value: function updateStatusJob(jobInfo) {
      var query = "UPDATE ".concat(this.tableName, " SET \"status\" = ($1)\n        WHERE \"id\" = ($2)");
      var data = [jobInfo.status, jobInfo.id];
      return this.pool.query(query, data);
    }
  }, {
    key: "approveJob",
    value: function approveJob(jobInfo) {
      var query = "UPDATE ".concat(this.tableName2, " SET \"status\" = ($1)\n        WHERE \"jobInformationId\" = ($2)");
      var data = [jobInfo.status, jobInfo.jobInformationId];
      return this.pool.query(query, data);
    }
  }]);

  return jobInformation;
}();

module.exports = jobInformation;
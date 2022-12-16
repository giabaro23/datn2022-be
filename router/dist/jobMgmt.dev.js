"use strict";

var express = require('express');

var router = express();

var _require = require('uuid'),
    uuidv4 = _require.v4;

var _require2 = require('../services/index'),
    jobServices = _require2.jobServices;

router.post('/', function _callee(req, res) {
  var _req$body, userId, topicName, workTypeName, payTypeName, name, description, salaryMin, salaryMax, dueDate, status, location, skills, rs;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          // Handle permission role
          _req$body = req.body, userId = _req$body.userId, topicName = _req$body.topicName, workTypeName = _req$body.workTypeName, payTypeName = _req$body.payTypeName, name = _req$body.name, description = _req$body.description, salaryMin = _req$body.salaryMin, salaryMax = _req$body.salaryMax, dueDate = _req$body.dueDate, status = _req$body.status, location = _req$body.location, skills = _req$body.skills; // Handle create data

          _context.next = 4;
          return regeneratorRuntime.awrap(jobServices.createJob({
            id: uuidv4(),
            userId: userId,
            topicName: topicName,
            workTypeName: workTypeName,
            payTypeName: payTypeName,
            name: name,
            description: description,
            salaryMin: salaryMin,
            salaryMax: salaryMax,
            dueDate: dueDate,
            status: status,
            location: location,
            skills: skills
          }));

        case 4:
          rs = _context.sent;
          return _context.abrupt("return", res.status(200).json({
            rs: rs
          }));

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.log('[ERROR]: Create job failed', _context.t0);
          throw _context.t0;

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
router.get('/', function _callee2(req, res) {
  var rs;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(jobServices.getListJob());

        case 3:
          rs = _context2.sent;
          return _context2.abrupt("return", res.status(200).json(rs));

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.log('[ERROR]: Get job failed', _context2.t0);
          throw _context2.t0;

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
router.get('/getById', function _callee3(req, res) {
  var id, rs;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.query.id;
          _context3.next = 4;
          return regeneratorRuntime.awrap(jobServices.getJobById(id));

        case 4:
          rs = _context3.sent;
          return _context3.abrupt("return", res.status(200).json(rs));

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.log('[ERROR]: Get job failed', _context3.t0);
          throw _context3.t0;

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
router.get('/getByUserId', function _callee4(req, res) {
  var userId, rs;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          userId = req.body.userId;
          _context4.next = 4;
          return regeneratorRuntime.awrap(jobServices.getJobByUserId(userId));

        case 4:
          rs = _context4.sent;
          return _context4.abrupt("return", res.status(200).json(rs));

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          console.log('[ERROR]: Get job failed', _context4.t0);
          throw _context4.t0;

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
router.put('/', function _callee5(req, res) {
  var id, _req$body2, categoryId, workTypeId, payTypeId, name, description, salary, startDate, endDate, dueDate, status, location, rs;

  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          // Handle permission role
          // Handle update data
          id = req.query.id;
          _req$body2 = req.body, categoryId = _req$body2.categoryId, workTypeId = _req$body2.workTypeId, payTypeId = _req$body2.payTypeId, name = _req$body2.name, description = _req$body2.description, salary = _req$body2.salary, startDate = _req$body2.startDate, endDate = _req$body2.endDate, dueDate = _req$body2.dueDate, status = _req$body2.status, location = _req$body2.location;
          _context5.next = 5;
          return regeneratorRuntime.awrap(jobServices.updateJob({
            id: id,
            categoryId: categoryId,
            workTypeId: workTypeId,
            payTypeId: payTypeId,
            name: name,
            description: description,
            salary: salary,
            startDate: startDate,
            endDate: endDate,
            dueDate: dueDate,
            status: status,
            location: location
          }));

        case 5:
          rs = _context5.sent;
          return _context5.abrupt("return", res.status(200).json({
            message: 'Success',
            result: rs
          }));

        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          console.log('[ERROR]: Update job failed', _context5.t0);
          throw _context5.t0;

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 9]]);
});
router.put('/applyJob', function _callee6(req, res) {
  var _req$body3, jobInformationId, userId, rs;

  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          // Handle update data
          _req$body3 = req.body, jobInformationId = _req$body3.jobInformationId, userId = _req$body3.userId;
          _context6.next = 4;
          return regeneratorRuntime.awrap(jobServices.updateStatusJob({
            id: jobInformationId,
            status: 'waiting'
          }));

        case 4:
          _context6.next = 6;
          return regeneratorRuntime.awrap(jobServices.applyJob({
            id: uuidv4(),
            jobInformationId: jobInformationId,
            userId: userId,
            status: 'Waiting'
          }));

        case 6:
          rs = _context6.sent;
          return _context6.abrupt("return", res.status(200).json({
            message: 'Apply job successfully',
            result: rs
          }));

        case 10:
          _context6.prev = 10;
          _context6.t0 = _context6["catch"](0);
          console.log('[ERROR]: Apply job failed', _context6.t0);
          throw _context6.t0;

        case 14:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 10]]);
});
router.put('/approveJob', function _callee7(req, res) {
  var jobInformationId, rs;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          // Handle update data
          jobInformationId = req.body.jobInformationId;
          _context7.next = 4;
          return regeneratorRuntime.awrap(jobServices.updateStatusJob({
            id: jobInformationId,
            status: 'approved'
          }));

        case 4:
          _context7.next = 6;
          return regeneratorRuntime.awrap(jobServices.approveJob({
            jobInformationId: jobInformationId,
            status: 'approved'
          }));

        case 6:
          rs = _context7.sent;
          return _context7.abrupt("return", res.status(200).json({
            message: 'Approved job successfully',
            result: rs
          }));

        case 10:
          _context7.prev = 10;
          _context7.t0 = _context7["catch"](0);
          console.log('[ERROR]: Approve job failed', _context7.t0);
          throw _context7.t0;

        case 14:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 10]]);
});
module.exports = router;
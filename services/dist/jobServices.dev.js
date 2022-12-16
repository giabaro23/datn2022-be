"use strict";

var pg = require('../model');

var moment = require('moment');

exports.createJob = function _callee(jobInfo) {
  var jobInformation;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          jobInfo.createDate = moment().format();
          jobInfo.status = true;
          jobInformation = new pg.jobInformation();
          _context.next = 5;
          return regeneratorRuntime.awrap(jobInformation.save(jobInfo).then(function (res) {
            return true;
          })["catch"](function (error) {
            console.error(error);
            throw new Error(error);
          }));

        case 5:
          return _context.abrupt("return", _context.sent);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.getListJob = function _callee2() {
  var jobInformation;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          jobInformation = new pg.jobInformation();
          _context2.next = 3;
          return regeneratorRuntime.awrap(jobInformation.get().then(function (res) {
            return res.rows;
          })["catch"](function (error) {
            console.log(error);
            throw new Error(error);
          }));

        case 3:
          return _context2.abrupt("return", _context2.sent);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.getJobById = function _callee3(id) {
  var jobInformation;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          jobInformation = new pg.jobInformation();
          _context3.next = 3;
          return regeneratorRuntime.awrap(jobInformation.getById(id).then(function (res) {
            return res.rows;
          })["catch"](function (error) {
            console.log(error);
            throw new Error(error);
          }));

        case 3:
          return _context3.abrupt("return", _context3.sent);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.getJobByUserId = function _callee4(userId) {
  var jobInformation;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          jobInformation = new pg.jobInformation();
          _context4.next = 3;
          return regeneratorRuntime.awrap(jobInformation.getListByUserId(userId).then(function (res) {
            return res.rows;
          })["catch"](function (error) {
            console.log(error);
            throw new Error(error);
          }));

        case 3:
          return _context4.abrupt("return", _context4.sent);

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.updateJob = function _callee5(jobInfo) {
  var jobInformation;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          jobInfo.updateDate = moment().format();
          jobInformation = new pg.jobInformation();
          _context5.next = 4;
          return regeneratorRuntime.awrap(jobInformation.update(jobInfo).then(function (res) {
            return true;
          })["catch"](function (error) {
            console.error(error);
            throw new Error(error);
          }));

        case 4:
          return _context5.abrupt("return", _context5.sent);

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  });
};

exports.createJob = function _callee6(jobInfo) {
  var jobInformation;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          jobInfo.createDate = moment().format();
          jobInformation = new pg.jobInformation();
          _context6.next = 4;
          return regeneratorRuntime.awrap(jobInformation.save(jobInfo).then(function (res) {
            return true;
          })["catch"](function (error) {
            console.error(error);
            throw new Error(error);
          }));

        case 4:
          return _context6.abrupt("return", _context6.sent);

        case 5:
        case "end":
          return _context6.stop();
      }
    }
  });
};

exports.getListJob = function _callee7() {
  var jobInformation;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          jobInformation = new pg.jobInformation();
          _context7.next = 3;
          return regeneratorRuntime.awrap(jobInformation.get().then(function (res) {
            return res.rows;
          })["catch"](function (error) {
            console.log(error);
            throw new Error(error);
          }));

        case 3:
          return _context7.abrupt("return", _context7.sent);

        case 4:
        case "end":
          return _context7.stop();
      }
    }
  });
};

exports.applyJob = function _callee8(jobInfo) {
  var jobInformation;
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          jobInfo.createDate = moment().format();
          jobInformation = new pg.jobInformation();
          _context8.next = 4;
          return regeneratorRuntime.awrap(jobInformation.applyJob(jobInfo).then(function (res) {
            return true;
          })["catch"](function (error) {
            console.error(error);
            throw new Error(error);
          }));

        case 4:
          return _context8.abrupt("return", _context8.sent);

        case 5:
        case "end":
          return _context8.stop();
      }
    }
  });
};

exports.updateStatusJob = function _callee9(jobInfo) {
  var jobInformation;
  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          jobInformation = new pg.jobInformation();
          _context9.next = 3;
          return regeneratorRuntime.awrap(jobInformation.updateStatusJob(jobInfo).then(function (res) {
            return true;
          })["catch"](function (error) {
            console.error(error);
            throw new Error(error);
          }));

        case 3:
          return _context9.abrupt("return", _context9.sent);

        case 4:
        case "end":
          return _context9.stop();
      }
    }
  });
};

exports.approveJob = function _callee10(jobInfo) {
  var jobInformation;
  return regeneratorRuntime.async(function _callee10$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          jobInformation = new pg.jobInformation();
          _context10.next = 3;
          return regeneratorRuntime.awrap(jobInformation.approveJob(jobInfo).then(function (res) {
            return true;
          })["catch"](function (error) {
            console.error(error);
            throw new Error(error);
          }));

        case 3:
          return _context10.abrupt("return", _context10.sent);

        case 4:
        case "end":
          return _context10.stop();
      }
    }
  });
};
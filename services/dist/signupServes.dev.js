"use strict";

var pg = require('../model');

var moment = require('moment');

exports.register = function _callee(userInfo) {
  var userInformation;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          userInfo.createDate = moment().format();
          userInfo.isActive = true;
          userInformation = new pg.userInformation();
          _context.next = 5;
          return regeneratorRuntime.awrap(userInformation.save(userInfo).then(function (res) {
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

exports.getEmail = function _callee2(userInfo) {
  var userInformation;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          userInformation = new pg.userInformation();
          _context2.next = 3;
          return regeneratorRuntime.awrap(userInformation.getUserInfo(userInfo).then(function (res) {
            return res.rows;
          })["catch"](function (error) {
            console.error(error);
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
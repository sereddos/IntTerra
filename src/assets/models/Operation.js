/* eslint-disable no-void */
/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
'use strict'
exports.__esModule = true
exports.Assessment = exports.OperationType = exports.Plant = void 0
var TDate_1 = require('./TDate')
var OperationType;
(function (OperationType) {
  OperationType[OperationType.PLOWING = 0] = 'PLOWING'
  OperationType[OperationType.BOWLING = 1] = 'BOWLING'
  OperationType[OperationType.FERTILIZATION = 2] = 'FERTILIZATION'
  OperationType[OperationType.WATERING = 3] = 'WATERING'
  OperationType[OperationType.RIGGING = 4] = 'RIGGING'
  OperationType[OperationType.HARVESTING = 5] = 'HARVESTING' // Сбор урожая
})(OperationType = exports.OperationType || (exports.OperationType = {}))
var Assessment;
(function (Assessment) {
  Assessment[Assessment.EXCELLENT = 0] = 'EXCELLENT'
  Assessment[Assessment.SATISFACTORILY = 1] = 'SATISFACTORILY'
  Assessment[Assessment.BADLY = 2] = 'BADLY' // Плохо
})(Assessment = exports.Assessment || (exports.Assessment = {}))
var Plant;
(function (Plant) {
  Plant[Plant.WINTERWHEAT = 0] = 'WINTERWHEAT'
  Plant[Plant.WHEAT = 1] = 'WHEAT'
  Plant[Plant.CORN = 2] = 'CORN' // Плохо
})(Plant = exports.Plant || (exports.Plant = {}))
var Operation = /** @class */ (function () {
  function Operation (args) {
    var _a = args.id; var id = _a === void 0 ? null : _a; var type = args.type; var date = args.date; var area = args.area; var _b = args.comment; var comment = _b === void 0 ? null : _b; var _c = args.assessment; var assessment = _c === void 0 ? null : _c; var _p = args.plant; var plant = _p === void 0 ? null : _p
    this.id = id
    this.type = type
    this.date = new TDate_1.default(date)
    this.area = area
    this.comment = comment
    this.assessment = assessment
    this.plant = plant
  }
  return Operation
}())
exports.default = Operation

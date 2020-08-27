/* eslint-disable no-void */
/* eslint-disable new-cap */
/* eslint-disable camelcase */
'use strict'
exports.__esModule = true
var Operation_1 = require('./models/Operation')
var FieldService = /** @class */ (function () {
  function FieldService () {
    this.operations = [
      new Operation_1.default({
        id: 'f112-o0',
        type: Operation_1.OperationType.PLOWING,
        date: { year: 2018, month: 3, day: 12 },
        area: 48.2,
        comment: 'Отлично вспахали',
        assessment: Operation_1.Assessment.EXCELLENT,
        plant: Operation_1.Plant.WINTERWHEAT
      }),
      new Operation_1.default({
        id: 'f112-o1',
        type: Operation_1.OperationType.FERTILIZATION,
        date: { year: 2018, month: 3, day: 14 },
        area: 47.8,
        comment: 'Все прошло нормально',
        assessment: Operation_1.Assessment.SATISFACTORILY,
        plant: null
      }),
      new Operation_1.default({
        id: 'f112-o2',
        type: Operation_1.OperationType.RIGGING,
        date: { year: 2018, month: 3, day: 17 },
        area: 47.5,
        comment: null,
        assessment: Operation_1.Assessment.BADLY,
        plant: Operation_1.Plant.WINTERWHEAT
      }),
      new Operation_1.default({
        id: 'f112-o3',
        type: Operation_1.OperationType.BOWLING,
        date: { year: 2018, month: 3, day: 26 },
        area: 48.2,
        comment: null,
        assessment: null,
        plant: Operation_1.Plant.WHEAT
      }),
      new Operation_1.default({
        id: 'f112-o4',
        type: Operation_1.OperationType.WATERING,
        date: { year: 2018, month: 4, day: 2 },
        area: 48.1,
        comment: 'Знатно полили',
        assessment: Operation_1.Assessment.EXCELLENT,
        plant: Operation_1.Plant.WHEAT
      }),
      new Operation_1.default({
        id: 'f112-o5',
        type: Operation_1.OperationType.HARVESTING,
        date: { year: 2018, month: 6, day: 20 },
        area: 48.0,
        comment: null,
        assessment: null,
        plant: Operation_1.Plant.CORN
      }),
      new Operation_1.default({
        id: 'f112-o6',
        type: Operation_1.OperationType.BOWLING,
        date: { year: 2020, month: 9, day: 26 },
        area: 48.2,
        comment: null,
        assessment: null,
        plant: Operation_1.Plant.WHEAT
      }),
      new Operation_1.default({
        id: 'f112-o7',
        type: Operation_1.OperationType.WATERING,
        date: { year: 2020, month: 11, day: 2 },
        area: 48.1,
        comment: 'Знатно полили',
        assessment: null,
        plant: Operation_1.Plant.WHEAT
      }),
      new Operation_1.default({
        id: 'f112-o8',
        type: Operation_1.OperationType.HARVESTING,
        date: { year: 2020, month: 10, day: 20 },
        area: 48.0,
        comment: null,
        assessment: null,
        plant: Operation_1.Plant.CORN
      })
    ]
  }
  /**
     * Имитирует получение истории операций по тестовому полю 112
     * @returns {Promise<Array<Operation>>}
     */
  FieldService.prototype.getOperations = function () {
    var _this = this
    return new Promise(function (resolve) {
      setTimeout(function () {
        var clonedOperations = _this.operations.map(function (operation) { return operation })
        resolve(clonedOperations)
      }, 10)
    })
  }
  /**
     * Имитирует синхронное получение операции по id
     * @param {string | null} operationId
     * @returns {Operation | null}
     */
  FieldService.prototype.getOperationSync = function (operationId) {
    if (operationId === void 0) { operationId = null }
    if (operationId === null) { return null }
    var operation = this.operations.find(function (operation) { return operation.id === operationId })
    return operation || null
  }
  /**
     * Имитирует получение операции по id
     * @param {string | null} operationId
     * @returns {Promise<Operation | null>}
     */
  FieldService.prototype.getOperation = function (operationId) {
    var _this = this
    if (operationId === void 0) { operationId = null }
    return new Promise(function (resolve) {
      setTimeout(function () {
        var operation = _this.getOperationSync(operationId)
        var clonedOperation = operation ? new Operation_1.default(operation) : null
        resolve(clonedOperation)
      }, 10)
    })
  }
  /**
     * Имитирует создание/редактирование операции
     * @param {Operation} operation
     * @returns {Promise<Operation>}
     */
  FieldService.prototype.saveOperation = function (operation) {
    var _this = this
    return new Promise(function (resolve) {
      setTimeout(function () {
        var operationIndex = _this.getOperationIndex(operation.id)
        var isExistingOperation = operationIndex !== -1
        var operationToSave = new Operation_1.default(operation)
        if (isExistingOperation) { _this.operations.splice(operationIndex, 1, operationToSave) } else {
          operationToSave.id = _this.getNextId()
          _this.operations.push(operationToSave)
        }
        var clonedOperation = new Operation_1.default(operationToSave)
        resolve(clonedOperation)
      }, 10)
    })
  }
  /**
     * Получает индекс операции
     * @param {string | null} operationId
     * @returns {number}
     */
  FieldService.prototype.getOperationIndex = function (operationId) {
    if (operationId === void 0) { operationId = null }
    if (operationId === null) { return -1 }
    var operation = this.getOperationSync(operationId)
    if (operation === null) { return -1 }
    return this.operations.indexOf(operation)
  }
  FieldService.prototype.getNextId = function () {
    var nextPartialId = this.operations.length
    return 'f112-o' + nextPartialId
  }
  return FieldService
}())
exports.default = FieldService

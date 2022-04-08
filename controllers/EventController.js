"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventController = void 0;
var EventController = /** @class */ (function () {
    function EventController(service) {
        this.service = service;
    }
    EventController.prototype.listCalendars = function () {
        return this.service.listCalendars();
    };
    EventController.prototype.save = function (event, id) {
        return this.service.save(event, id);
    };
    EventController.prototype.getAll = function (id) {
        return this.service.getAll(id);
    };
    EventController.prototype.updateEvent = function (id, event) {
        return this.service.updateEvent(id, event);
    };
    return EventController;
}());
exports.EventController = EventController;

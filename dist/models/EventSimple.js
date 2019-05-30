"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../types");
var District_1 = require("./District");
var EventSimple = (function (_super) {
    __extends(EventSimple, _super);
    function EventSimple() {
        var _this = _super.call(this) || this;
        _this._key = "";
        _this._name = "";
        _this._eventCode = "";
        _this._eventType = "";
        _this._district = new District_1.default();
        _this._city = "";
        _this._stateProv = "";
        _this._country = "";
        _this._startDate = "";
        _this._endDate = "";
        _this._year = 0;
        return _this;
    }
    EventSimple.prototype.toJSON = function () {
        return {
            key: this.key,
            name: this.name,
            event_code: this.eventCode,
            event_type: this.eventType,
            district: this.district.toJSON(),
            city: this.city,
            state_prov: this.stateProv,
            country: this.country,
            start_date: this.startDate,
            end_date: this.endDate,
            year: this.year
        };
    };
    EventSimple.prototype.fromJSON = function (json) {
        var event = new EventSimple();
        event.key = types_1.TBAModel.getPropertyFromJSON(json.key, "");
        event.name = types_1.TBAModel.getPropertyFromJSON(json.name, "");
        event.eventCode = types_1.TBAModel.getPropertyFromJSON(json.event_code, "");
        event.eventType = types_1.TBAModel.getPropertyFromJSON(json.event_type, "");
        event.district = types_1.TBAModel.getModelFromJSON(json.district, District_1.default);
        event.city = types_1.TBAModel.getPropertyFromJSON(json.city, "");
        event.stateProv = types_1.TBAModel.getPropertyFromJSON(json.state_prov, "");
        event.country = types_1.TBAModel.getPropertyFromJSON(json.country, "");
        event.startDate = types_1.TBAModel.getPropertyFromJSON(json.start_date, "");
        event.endDate = types_1.TBAModel.getPropertyFromJSON(json.end_date, "");
        event.year = types_1.TBAModel.getPropertyFromJSON(json.year, 0);
        return event;
    };
    Object.defineProperty(EventSimple.prototype, "key", {
        get: function () {
            return this._key;
        },
        set: function (value) {
            this._key = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventSimple.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventSimple.prototype, "eventCode", {
        get: function () {
            return this._eventCode;
        },
        set: function (value) {
            this._eventCode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventSimple.prototype, "eventType", {
        get: function () {
            return this._eventType;
        },
        set: function (value) {
            this._eventType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventSimple.prototype, "district", {
        get: function () {
            return this._district;
        },
        set: function (value) {
            this._district = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventSimple.prototype, "city", {
        get: function () {
            return this._city;
        },
        set: function (value) {
            this._city = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventSimple.prototype, "stateProv", {
        get: function () {
            return this._stateProv;
        },
        set: function (value) {
            this._stateProv = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventSimple.prototype, "country", {
        get: function () {
            return this._country;
        },
        set: function (value) {
            this._country = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventSimple.prototype, "startDate", {
        get: function () {
            return this._startDate;
        },
        set: function (value) {
            this._startDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventSimple.prototype, "endDate", {
        get: function () {
            return this._endDate;
        },
        set: function (value) {
            this._endDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventSimple.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (value) {
            this._year = value;
        },
        enumerable: true,
        configurable: true
    });
    return EventSimple;
}(types_1.TBAModel));
exports.default = EventSimple;
//# sourceMappingURL=EventSimple.js.map
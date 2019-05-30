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
var MatchAlliance_1 = require("./MatchAlliance");
var MatchSimple = (function (_super) {
    __extends(MatchSimple, _super);
    function MatchSimple() {
        var _this = _super.call(this) || this;
        _this._key = "";
        _this._compLevel = "";
        _this._setNumber = 0;
        _this._matchNumber = 0;
        _this._alliances = [];
        _this._winningAlliance = "";
        _this._eventKey = "";
        _this._time = 0;
        _this._predictedTime = 0;
        _this._actualTime = 0;
        return _this;
    }
    MatchSimple.prototype.toJSON = function () {
        return {
            key: this.key,
            comp_level: this.compLevel,
            set_number: this.setNumber,
            match_number: this.matchNumber,
            alliances: this.alliances.map(function (a) { return a.toJSON(); }),
            winning_alliance: this.winningAlliance,
            event_key: this.eventKey,
            time: this.time,
            predicted_time: this.predictedTime,
            actual_time: this.actualTime
        };
    };
    MatchSimple.prototype.fromJSON = function (json) {
        var match = new MatchSimple();
        match.key = types_1.TBAModel.getPropertyFromJSON(json.key, "");
        match.compLevel = types_1.TBAModel.getPropertyFromJSON(json.comp_level, "");
        match.setNumber = types_1.TBAModel.getPropertyFromJSON(json.set_number, 0);
        match.matchNumber = types_1.TBAModel.getPropertyFromJSON(json.match_number, 0);
        match.alliances.push(types_1.TBAModel.getModelFromJSON(json.alliances.blue, MatchAlliance_1.default));
        match.alliances.push(types_1.TBAModel.getModelFromJSON(json.alliances.red, MatchAlliance_1.default));
        match.winningAlliance = types_1.TBAModel.getPropertyFromJSON(json.winning_alliance, "");
        match.eventKey = types_1.TBAModel.getPropertyFromJSON(json.event_key, "");
        match.time = types_1.TBAModel.getPropertyFromJSON(json.time, 0);
        match.predictedTime = types_1.TBAModel.getPropertyFromJSON(json.predicted_time, 0);
        match.actualTime = types_1.TBAModel.getPropertyFromJSON(json.actual_time, 0);
        return match;
    };
    Object.defineProperty(MatchSimple.prototype, "key", {
        get: function () {
            return this._key;
        },
        set: function (value) {
            this._key = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatchSimple.prototype, "compLevel", {
        get: function () {
            return this._compLevel;
        },
        set: function (value) {
            this._compLevel = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatchSimple.prototype, "setNumber", {
        get: function () {
            return this._setNumber;
        },
        set: function (value) {
            this._setNumber = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatchSimple.prototype, "matchNumber", {
        get: function () {
            return this._matchNumber;
        },
        set: function (value) {
            this._matchNumber = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatchSimple.prototype, "alliances", {
        get: function () {
            return this._alliances;
        },
        set: function (value) {
            this._alliances = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatchSimple.prototype, "winningAlliance", {
        get: function () {
            return this._winningAlliance;
        },
        set: function (value) {
            this._winningAlliance = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatchSimple.prototype, "eventKey", {
        get: function () {
            return this._eventKey;
        },
        set: function (value) {
            this._eventKey = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatchSimple.prototype, "time", {
        get: function () {
            return this._time;
        },
        set: function (value) {
            this._time = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatchSimple.prototype, "predictedTime", {
        get: function () {
            return this._predictedTime;
        },
        set: function (value) {
            this._predictedTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatchSimple.prototype, "actualTime", {
        get: function () {
            return this._actualTime;
        },
        set: function (value) {
            this._actualTime = value;
        },
        enumerable: true,
        configurable: true
    });
    return MatchSimple;
}(types_1.TBAModel));
exports.default = MatchSimple;
//# sourceMappingURL=MatchSimple.js.map
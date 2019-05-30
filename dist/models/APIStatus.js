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
var APIStatusAppVersion_1 = require("./APIStatusAppVersion");
var APIStatus = (function (_super) {
    __extends(APIStatus, _super);
    function APIStatus() {
        var _this = _super.call(this) || this;
        _this._currentSeason = "0";
        _this._maxSeason = "0";
        _this._isDataFeedDown = false;
        _this._downEvents = [];
        _this._ios = new APIStatusAppVersion_1.default();
        _this._android = new APIStatusAppVersion_1.default();
        return _this;
    }
    APIStatus.prototype.toJSON = function () {
        return {
            current_season: this.currentSeason,
            max_season: this.maxSeason,
            is_datafeed_down: this.isDataFeedDown,
            down_events: this.downEvents,
            ios: this.ios.toJSON(),
            android: this.android.toJSON()
        };
    };
    APIStatus.prototype.fromJSON = function (json) {
        var apiStatus = new APIStatus();
        apiStatus.currentSeason = types_1.TBAModel.getPropertyFromJSON(json.current_season, "0");
        apiStatus.maxSeason = types_1.TBAModel.getPropertyFromJSON(json.max_season, "0");
        apiStatus.isDataFeedDown = types_1.TBAModel.getPropertyFromJSON(json.is_datafeed_down, false);
        apiStatus.downEvents = types_1.TBAModel.getPropertyFromJSON(json.down_events, []);
        apiStatus.ios = types_1.TBAModel.getModelFromJSON(json.ios, APIStatusAppVersion_1.default);
        apiStatus.android = types_1.TBAModel.getModelFromJSON(json.android, APIStatusAppVersion_1.default);
        return apiStatus;
    };
    Object.defineProperty(APIStatus.prototype, "currentSeason", {
        get: function () {
            return this._currentSeason;
        },
        set: function (value) {
            this._currentSeason = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(APIStatus.prototype, "maxSeason", {
        get: function () {
            return this._maxSeason;
        },
        set: function (value) {
            this._maxSeason = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(APIStatus.prototype, "isDataFeedDown", {
        get: function () {
            return this._isDataFeedDown;
        },
        set: function (value) {
            this._isDataFeedDown = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(APIStatus.prototype, "downEvents", {
        get: function () {
            return this._downEvents;
        },
        set: function (value) {
            this._downEvents = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(APIStatus.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        set: function (value) {
            this._ios = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(APIStatus.prototype, "android", {
        get: function () {
            return this._android;
        },
        set: function (value) {
            this._android = value;
        },
        enumerable: true,
        configurable: true
    });
    return APIStatus;
}(types_1.TBAModel));
exports.default = APIStatus;
//# sourceMappingURL=APIStatus.js.map
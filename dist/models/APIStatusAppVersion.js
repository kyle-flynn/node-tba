"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../types");
var APIStatusAppVersion = (function (_super) {
    __extends(APIStatusAppVersion, _super);
    function APIStatusAppVersion() {
        var _this = _super.call(this) || this;
        _this._minAppVersion = 0;
        _this._latestAppVersion = 0;
        return _this;
    }
    APIStatusAppVersion.prototype.toJSON = function () {
        return {
            min_app_version: this.minAppVersion,
            latest_app_version: this.latestAppVersion
        };
    };
    APIStatusAppVersion.prototype.fromJSON = function (json) {
        var appVersion = new APIStatusAppVersion();
        appVersion.minAppVersion = types_1.TBAModel.getPropertyFromJSON(json.min_app_version, 0);
        appVersion.latestAppVersion = types_1.TBAModel.getPropertyFromJSON(json.latest_app_version, 0);
        return appVersion;
    };
    Object.defineProperty(APIStatusAppVersion.prototype, "minAppVersion", {
        get: function () {
            return this._minAppVersion;
        },
        set: function (value) {
            this._minAppVersion = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(APIStatusAppVersion.prototype, "latestAppVersion", {
        get: function () {
            return this._latestAppVersion;
        },
        set: function (value) {
            this._latestAppVersion = value;
        },
        enumerable: true,
        configurable: true
    });
    return APIStatusAppVersion;
}(types_1.TBAModel));
exports.default = APIStatusAppVersion;
//# sourceMappingURL=APIStatusAppVersion.js.map
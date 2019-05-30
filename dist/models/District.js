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
var District = (function (_super) {
    __extends(District, _super);
    function District() {
        var _this = _super.call(this) || this;
        _this._abbreviation = "";
        _this._displayName = "";
        _this._key = "";
        _this._year = 0;
        return _this;
    }
    District.prototype.toJSON = function () {
        return {
            abbreviation: this.abbreviation,
            display_name: this.displayName,
            key: this.key,
            year: this.year
        };
    };
    District.prototype.fromJSON = function (json) {
        var district = new District();
        district.abbreviation = types_1.TBAModel.getPropertyFromJSON(json.abbreviation, "");
        district.displayName = types_1.TBAModel.getPropertyFromJSON(json.display_name, "");
        district.key = types_1.TBAModel.getPropertyFromJSON(json.key, "");
        district.year = types_1.TBAModel.getPropertyFromJSON(json.year, 0);
        return district;
    };
    Object.defineProperty(District.prototype, "abbreviation", {
        get: function () {
            return this._abbreviation;
        },
        set: function (value) {
            this._abbreviation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(District.prototype, "displayName", {
        get: function () {
            return this._displayName;
        },
        set: function (value) {
            this._displayName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(District.prototype, "key", {
        get: function () {
            return this._key;
        },
        set: function (value) {
            this._key = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(District.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (value) {
            this._year = value;
        },
        enumerable: true,
        configurable: true
    });
    return District;
}(types_1.TBAModel));
exports.default = District;
//# sourceMappingURL=District.js.map
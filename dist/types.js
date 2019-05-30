"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TBAModel = (function () {
    function TBAModel() {
    }
    TBAModel.getPropertyFromJSON = function (property, defaultValue) {
        if (typeof property === "undefined" || property === null) {
            return defaultValue;
        }
        else {
            return property;
        }
    };
    TBAModel.getModelFromJSON = function (json, model) {
        if (typeof json === "undefined" || json === null) {
            return new model();
        }
        else {
            return new model().fromJSON(json);
        }
    };
    TBAModel.getModelListFromJSON = function (json, model) {
        if (typeof json === "undefined" || json === null) {
            return [];
        }
        else {
            return json.map(function (item) { return new model().fromJSON(item); });
        }
    };
    TBAModel.prototype.toJSON = function () {
        return {};
    };
    TBAModel.prototype.fromJSON = function (json) {
        return new TBAModel();
    };
    return TBAModel;
}());
exports.TBAModel = TBAModel;
//# sourceMappingURL=types.js.map
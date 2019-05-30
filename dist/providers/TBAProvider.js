"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var EventSimple_1 = require("../models/EventSimple");
var Match_1 = require("../models/Match");
var TBAProvider = (function () {
    function TBAProvider() {
    }
    TBAProvider.getInstance = function () {
        if (typeof TBAProvider._instance === "undefined") {
            TBAProvider._instance = new TBAProvider();
        }
        return TBAProvider._instance;
    };
    TBAProvider.prototype.initialize = function (apiKey) {
        this._config = {
            baseURL: "https://www.thebluealliance.com/api/v3",
            timeout: 5000,
            headers: {
                "X-TBA-Auth-Key": apiKey
            }
        };
        this._axios = axios_1.default.create(this._config);
    };
    TBAProvider.prototype.get = function (path) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var response = { statusCode: 0, response: null, error: null };
            if (typeof _this._axios === "undefined") {
                response.statusCode = 500;
                response.error = "TBA provider not initialized. Please call TBAProvider.initialize() before using.";
                reject(response);
            }
            _this._axios.get(path).then(function (apiResponse) {
                if (typeof apiResponse.data === "undefined") {
                    response.statusCode = 500;
                    response.error = "No data available";
                    reject(response);
                }
                else {
                    response.statusCode = apiResponse.status;
                    response.response = apiResponse.data;
                    resolve(response);
                }
            }).catch(function (apiError) {
                response.statusCode = apiError.response.status;
                if (typeof apiError.response.data.Error !== "undefined") {
                    response.error = apiError.response.data.Error;
                }
                else if (typeof apiError.response.statusText !== "undefined") {
                    response.error = apiError.response.statusText;
                }
                else {
                    response.error = apiError.response.data;
                }
                resolve(response);
            });
        });
    };
    TBAProvider.prototype.getTeamEventsByYear = function (teamKey, year) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.get("/team/frc" + teamKey + "/events/" + year).then(function (response) {
                resolve(response.response.map(function (eventJSON) { return new EventSimple_1.default().fromJSON(eventJSON); }));
            }).catch(function (error) { return reject(error.error); });
        });
    };
    TBAProvider.prototype.getTeamMatchesByEvent = function (teamKey, eventKey) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.get("/team/frc" + teamKey + "/event/" + eventKey + "/matches").then(function (response) {
                resolve(response.response.map(function (matchJSON) { return new Match_1.default().fromJSON(matchJSON); }));
            }).catch(function (error) { return reject(error.error); });
        });
    };
    TBAProvider.prototype.getMatchesByEvent = function (eventKey) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.get("/event/" + eventKey + "/matches").then(function (response) {
                resolve(response.response.map(function (matchJSON) { return new Match_1.default().fromJSON(matchJSON); }));
            }).catch(function (error) { return reject(error.error); });
        });
    };
    return TBAProvider;
}());
exports.default = TBAProvider.getInstance();
//# sourceMappingURL=TBAProvider.js.map
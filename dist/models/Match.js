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
var MatchSimple_1 = require("./MatchSimple");
var MatchVideo_1 = require("./MatchVideo");
var MatchAlliance_1 = require("./MatchAlliance");
var types_1 = require("../types");
var Match = (function (_super) {
    __extends(Match, _super);
    function Match() {
        var _this = _super.call(this) || this;
        _this._scoreBreakdown = null;
        _this._videos = [];
        return _this;
    }
    Match.prototype.toJSON = function () {
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
            actual_time: this.actualTime,
            score_breakdown: this.scoreBreakdown,
            videos: this.videos.map(function (v) { return v.toJSON(); })
        };
    };
    Match.prototype.fromJSON = function (json) {
        var match = new Match();
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
        match.scoreBreakdown = null;
        match.videos = types_1.TBAModel.getModelListFromJSON(json.videos, MatchVideo_1.default);
        return match;
    };
    Object.defineProperty(Match.prototype, "scoreBreakdown", {
        get: function () {
            return this._scoreBreakdown;
        },
        set: function (value) {
            this._scoreBreakdown = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Match.prototype, "videos", {
        get: function () {
            return this._videos;
        },
        set: function (value) {
            this._videos = value;
        },
        enumerable: true,
        configurable: true
    });
    return Match;
}(MatchSimple_1.default));
exports.default = Match;
//# sourceMappingURL=Match.js.map
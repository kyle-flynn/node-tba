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
var MatchAlliance = (function (_super) {
    __extends(MatchAlliance, _super);
    function MatchAlliance() {
        var _this = _super.call(this) || this;
        _this._score = -1;
        _this._teamKeys = [];
        _this._surrogateTeamKeys = [];
        _this._dqTeamKeys = [];
        return _this;
    }
    MatchAlliance.prototype.toJSON = function () {
        return {
            score: this.score,
            team_keys: this.teamKeys,
            surrogate_team_keys: this.surrogateTeamKeys,
            dq_team_keys: this.dqTeamKeys
        };
    };
    MatchAlliance.prototype.fromJSON = function (json) {
        var alliance = new MatchAlliance();
        alliance.score = types_1.TBAModel.getPropertyFromJSON(json.score, -1);
        alliance.teamKeys = types_1.TBAModel.getPropertyFromJSON(json.team_keys, []);
        alliance.surrogateTeamKeys = types_1.TBAModel.getPropertyFromJSON(json.surrogate_team_keys, []);
        alliance.dqTeamKeys = types_1.TBAModel.getPropertyFromJSON(json.dq_team_keys, []);
        return alliance;
    };
    Object.defineProperty(MatchAlliance.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (value) {
            this._score = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatchAlliance.prototype, "teamKeys", {
        get: function () {
            return this._teamKeys;
        },
        set: function (value) {
            this._teamKeys = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatchAlliance.prototype, "surrogateTeamKeys", {
        get: function () {
            return this._surrogateTeamKeys;
        },
        set: function (value) {
            this._surrogateTeamKeys = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatchAlliance.prototype, "dqTeamKeys", {
        get: function () {
            return this._dqTeamKeys;
        },
        set: function (value) {
            this._dqTeamKeys = value;
        },
        enumerable: true,
        configurable: true
    });
    return MatchAlliance;
}(types_1.TBAModel));
exports.default = MatchAlliance;
//# sourceMappingURL=MatchAlliance.js.map
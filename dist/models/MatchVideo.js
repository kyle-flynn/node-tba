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
var MatchVideo = (function (_super) {
    __extends(MatchVideo, _super);
    function MatchVideo() {
        var _this = _super.call(this) || this;
        _this._key = "";
        _this._type = "";
        return _this;
    }
    MatchVideo.prototype.toJSON = function () {
        return {
            key: this.key,
            type: this.type
        };
    };
    MatchVideo.prototype.fromJSON = function (json) {
        var video = new MatchVideo();
        video.key = types_1.TBAModel.getPropertyFromJSON(json.key, "");
        video.type = types_1.TBAModel.getPropertyFromJSON(json.type, "");
        return video;
    };
    Object.defineProperty(MatchVideo.prototype, "key", {
        get: function () {
            return this._key;
        },
        set: function (value) {
            this._key = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatchVideo.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    return MatchVideo;
}(types_1.TBAModel));
exports.default = MatchVideo;
//# sourceMappingURL=MatchVideo.js.map
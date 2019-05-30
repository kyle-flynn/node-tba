"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var types = require("./types");
exports.types = types;
var TBAProvider_1 = require("./providers/TBAProvider");
exports.TBAProvider = TBAProvider_1.default;
TBAProvider_1.default.initialize("nhImtL4jtHHKMkoxnlV4T4eIFCz6qqC1eOATrqDHCeWBhntc2L6jj1TZLiw7amrL");
TBAProvider_1.default.getTeamEventsByYear("3618", 2019).then(function (response) {
    TBAProvider_1.default.getTeamMatchesByEvent("3618", response[0].key).then(function (matchResponse) {
        console.log(matchResponse.map(function (m) { return m.videos; }));
    }).catch(function (matchError) {
        console.log(matchError);
    });
}).catch(function (error) {
    console.log(error);
});
__export(require("./models"));
//# sourceMappingURL=index.js.map
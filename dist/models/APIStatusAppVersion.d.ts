import { TBAModel } from "../types";
export default class APIStatusAppVersion extends TBAModel {
    private _minAppVersion;
    private _latestAppVersion;
    constructor();
    toJSON(): object;
    fromJSON(json: any): APIStatusAppVersion;
    minAppVersion: number;
    latestAppVersion: number;
}

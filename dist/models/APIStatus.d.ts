import { TBAModel } from "../types";
import APIStatusAppVersion from "./APIStatusAppVersion";
export default class APIStatus extends TBAModel {
    private _currentSeason;
    private _maxSeason;
    private _isDataFeedDown;
    private _downEvents;
    private _ios;
    private _android;
    constructor();
    toJSON(): object;
    fromJSON(json: any): APIStatus;
    currentSeason: string;
    maxSeason: string;
    isDataFeedDown: boolean;
    downEvents: string[];
    ios: APIStatusAppVersion;
    android: APIStatusAppVersion;
}

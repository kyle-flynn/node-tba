import { TBAModel } from "../types";
import MatchAlliance from "./MatchAlliance";
export default class MatchSimple extends TBAModel {
    private _key;
    private _compLevel;
    private _setNumber;
    private _matchNumber;
    private _alliances;
    private _winningAlliance;
    private _eventKey;
    private _time;
    private _predictedTime;
    private _actualTime;
    constructor();
    toJSON(): object;
    fromJSON(json: any): MatchSimple;
    key: string;
    compLevel: string;
    setNumber: number;
    matchNumber: number;
    alliances: MatchAlliance[];
    winningAlliance: string;
    eventKey: string;
    time: number;
    predictedTime: number;
    actualTime: number;
}

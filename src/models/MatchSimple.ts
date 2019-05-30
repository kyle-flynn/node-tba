import {TBAModel} from "../types";
import MatchAlliance from "./MatchAlliance";

export default class MatchSimple extends TBAModel {
  private _key: string;
  private _compLevel: string;
  private _setNumber: number;
  private _matchNumber: number;
  private _alliances: MatchAlliance[];
  private _winningAlliance: string;
  private _eventKey: string;
  private _time: number;
  private _predictedTime: number;
  private _actualTime: number;

  public constructor() {
    super();
    this._key = "";
    this._compLevel = "";
    this._setNumber = 0;
    this._matchNumber = 0;
    this._alliances = [];
    this._winningAlliance = "";
    this._eventKey = "";
    this._time = 0;
    this._predictedTime = 0;
    this._actualTime = 0;
  }

  public toJSON(): object {
    return {
      key: this.key,
      comp_level: this.compLevel,
      set_number: this.setNumber,
      match_number: this.matchNumber,
      alliances: this.alliances.map((a: MatchAlliance) => a.toJSON()),
      winning_alliance: this.winningAlliance,
      event_key: this.eventKey,
      time: this.time,
      predicted_time: this.predictedTime,
      actual_time: this.actualTime
    };
  }

  public fromJSON(json: any): MatchSimple {
    const match: MatchSimple = new MatchSimple();
    match.key = TBAModel.getPropertyFromJSON(json.key, "");
    match.compLevel = TBAModel.getPropertyFromJSON(json.comp_level, "");
    match.setNumber = TBAModel.getPropertyFromJSON(json.set_number, 0);
    match.matchNumber = TBAModel.getPropertyFromJSON(json.match_number, 0);
    match.alliances.push(TBAModel.getModelFromJSON(json.alliances.blue, MatchAlliance) as MatchAlliance);
    match.alliances.push(TBAModel.getModelFromJSON(json.alliances.red, MatchAlliance) as MatchAlliance);
    match.winningAlliance = TBAModel.getPropertyFromJSON(json.winning_alliance, "");
    match.eventKey = TBAModel.getPropertyFromJSON(json.event_key, "");
    match.time = TBAModel.getPropertyFromJSON(json.time, 0);
    match.predictedTime = TBAModel.getPropertyFromJSON(json.predicted_time, 0);
    match.actualTime = TBAModel.getPropertyFromJSON(json.actual_time, 0);
    return match;
  }

  get key(): string {
    return this._key;
  }

  set key(value: string) {
    this._key = value;
  }

  get compLevel(): string {
    return this._compLevel;
  }

  set compLevel(value: string) {
    this._compLevel = value;
  }

  get setNumber(): number {
    return this._setNumber;
  }

  set setNumber(value: number) {
    this._setNumber = value;
  }

  get matchNumber(): number {
    return this._matchNumber;
  }

  set matchNumber(value: number) {
    this._matchNumber = value;
  }

  get alliances(): MatchAlliance[] {
    return this._alliances;
  }

  set alliances(value: MatchAlliance[]) {
    this._alliances = value;
  }

  get winningAlliance(): string {
    return this._winningAlliance;
  }

  set winningAlliance(value: string) {
    this._winningAlliance = value;
  }

  get eventKey(): string {
    return this._eventKey;
  }

  set eventKey(value: string) {
    this._eventKey = value;
  }

  get time(): number {
    return this._time;
  }

  set time(value: number) {
    this._time = value;
  }

  get predictedTime(): number {
    return this._predictedTime;
  }

  set predictedTime(value: number) {
    this._predictedTime = value;
  }

  get actualTime(): number {
    return this._actualTime;
  }

  set actualTime(value: number) {
    this._actualTime = value;
  }
}
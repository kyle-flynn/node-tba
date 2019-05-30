import {TBAModel} from "../types";
import APIStatusAppVersion from "./APIStatusAppVersion";

export default class APIStatus extends TBAModel {
  private _currentSeason: string;
  private _maxSeason: string;
  private _isDataFeedDown: boolean;
  private _downEvents: string[];
  private _ios: APIStatusAppVersion;
  private _android: APIStatusAppVersion;

  public constructor() {
    super();
    this._currentSeason = "0";
    this._maxSeason = "0";
    this._isDataFeedDown = false;
    this._downEvents = [];
    this._ios = new APIStatusAppVersion();
    this._android = new APIStatusAppVersion();
  }

  public toJSON(): object {
    return {
      current_season: this.currentSeason,
      max_season: this.maxSeason,
      is_datafeed_down: this.isDataFeedDown,
      down_events: this.downEvents,
      ios: this.ios.toJSON(),
      android: this.android.toJSON()
    };
  }

  public fromJSON(json: any): APIStatus {
    const apiStatus: APIStatus = new APIStatus();
    apiStatus.currentSeason = TBAModel.getPropertyFromJSON(json.current_season, "0");
    apiStatus.maxSeason = TBAModel.getPropertyFromJSON(json.max_season, "0");
    apiStatus.isDataFeedDown = TBAModel.getPropertyFromJSON(json.is_datafeed_down, false);
    apiStatus.downEvents = TBAModel.getPropertyFromJSON(json.down_events, []);
    apiStatus.ios = TBAModel.getModelFromJSON(json.ios, APIStatusAppVersion) as APIStatusAppVersion;
    apiStatus.android = TBAModel.getModelFromJSON(json.android, APIStatusAppVersion) as APIStatusAppVersion;
    return apiStatus;
  }

  get currentSeason(): string {
    return this._currentSeason;
  }

  set currentSeason(value: string) {
    this._currentSeason = value;
  }

  get maxSeason(): string {
    return this._maxSeason;
  }

  set maxSeason(value: string) {
    this._maxSeason = value;
  }

  get isDataFeedDown(): boolean {
    return this._isDataFeedDown;
  }

  set isDataFeedDown(value: boolean) {
    this._isDataFeedDown = value;
  }

  get downEvents(): string[] {
    return this._downEvents;
  }

  set downEvents(value: string[]) {
    this._downEvents = value;
  }

  get ios(): APIStatusAppVersion {
    return this._ios;
  }

  set ios(value: APIStatusAppVersion) {
    this._ios = value;
  }

  get android(): APIStatusAppVersion {
    return this._android;
  }

  set android(value: APIStatusAppVersion) {
    this._android = value;
  }
}
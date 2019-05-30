import {TBAModel} from "../types";

export default class APIStatusAppVersion extends TBAModel {
  private _minAppVersion: number;
  private _latestAppVersion: number;

  public constructor() {
    super();
    this._minAppVersion = 0;
    this._latestAppVersion = 0;
  }

  public toJSON(): object {
    return {
      min_app_version: this.minAppVersion,
      latest_app_version: this.latestAppVersion
    };
  }

  public fromJSON(json: any): APIStatusAppVersion {
    const appVersion: APIStatusAppVersion = new APIStatusAppVersion();
    appVersion.minAppVersion = TBAModel.getPropertyFromJSON(json.min_app_version, 0);
    appVersion.latestAppVersion = TBAModel.getPropertyFromJSON(json.latest_app_version, 0);
    return appVersion;
  }

  get minAppVersion(): number {
    return this._minAppVersion;
  }

  set minAppVersion(value: number) {
    this._minAppVersion = value;
  }

  get latestAppVersion(): number {
    return this._latestAppVersion;
  }

  set latestAppVersion(value: number) {
    this._latestAppVersion = value;
  }
}
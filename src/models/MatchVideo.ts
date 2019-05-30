import {TBAModel} from "../types";

export default class MatchVideo extends TBAModel {
  private _key: string;
  private _type: string;

  public constructor() {
    super();
    this._key = "";
    this._type = "";
  }

  public toJSON(): object {
    return {
      key: this.key,
      type: this.type
    };
  }

  public fromJSON(json: any): MatchVideo {
    const video: MatchVideo = new MatchVideo();
    video.key = TBAModel.getPropertyFromJSON(json.key, "");
    video.type = TBAModel.getPropertyFromJSON(json.type, "");
    return video;
  }

  get key(): string {
    return this._key;
  }

  set key(value: string) {
    this._key = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }
}
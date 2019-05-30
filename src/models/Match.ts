import MatchSimple from "./MatchSimple";
import MatchVideo from "./MatchVideo";
import MatchAlliance from "./MatchAlliance";
import {TBAModel} from "../types";

export default class Match extends MatchSimple {
  private _scoreBreakdown: any;
  private _videos: MatchVideo[];

  public constructor() {
    super();
    this._scoreBreakdown = null;
    this._videos = [];
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
      actual_time: this.actualTime,
      score_breakdown: this.scoreBreakdown,
      videos: this.videos.map((v: MatchVideo) => v.toJSON())
    };
  }

  public fromJSON(json: any): Match {
    const match: Match = new Match();
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
    match.scoreBreakdown = null;
    match.videos = TBAModel.getModelListFromJSON(json.videos, MatchVideo) as MatchVideo[];
    return match;
  }

  get scoreBreakdown(): any {
    return this._scoreBreakdown;
  }

  set scoreBreakdown(value: any) {
    this._scoreBreakdown = value;
  }

  get videos(): MatchVideo[] {
    return this._videos;
  }

  set videos(value: MatchVideo[]) {
    this._videos = value;
  }
}
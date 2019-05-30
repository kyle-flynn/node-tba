import {TBAModel} from "../types";

export default class MatchAlliance extends TBAModel {
  private _score: number;
  private _teamKeys: string[];
  private _surrogateTeamKeys: string[];
  private _dqTeamKeys: string[];

  public constructor() {
    super();
    this._score = -1;
    this._teamKeys = [];
    this._surrogateTeamKeys = [];
    this._dqTeamKeys = [];
  }

  public toJSON(): object {
    return {
      score: this.score,
      team_keys: this.teamKeys,
      surrogate_team_keys: this.surrogateTeamKeys,
      dq_team_keys: this.dqTeamKeys
    };
  }

  public fromJSON(json: any): MatchAlliance {
    const alliance: MatchAlliance = new MatchAlliance();
    alliance.score = TBAModel.getPropertyFromJSON(json.score, -1);
    alliance.teamKeys = TBAModel.getPropertyFromJSON(json.team_keys, []);
    alliance.surrogateTeamKeys = TBAModel.getPropertyFromJSON(json.surrogate_team_keys, []);
    alliance.dqTeamKeys = TBAModel.getPropertyFromJSON(json.dq_team_keys, []);
    return alliance;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    this._score = value;
  }

  get teamKeys(): string[] {
    return this._teamKeys;
  }

  set teamKeys(value: string[]) {
    this._teamKeys = value;
  }

  get surrogateTeamKeys(): string[] {
    return this._surrogateTeamKeys;
  }

  set surrogateTeamKeys(value: string[]) {
    this._surrogateTeamKeys = value;
  }

  get dqTeamKeys(): string[] {
    return this._dqTeamKeys;
  }

  set dqTeamKeys(value: string[]) {
    this._dqTeamKeys = value;
  }
}
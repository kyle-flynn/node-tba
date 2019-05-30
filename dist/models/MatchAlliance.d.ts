import { TBAModel } from "../types";
export default class MatchAlliance extends TBAModel {
    private _score;
    private _teamKeys;
    private _surrogateTeamKeys;
    private _dqTeamKeys;
    constructor();
    toJSON(): object;
    fromJSON(json: any): MatchAlliance;
    score: number;
    teamKeys: string[];
    surrogateTeamKeys: string[];
    dqTeamKeys: string[];
}

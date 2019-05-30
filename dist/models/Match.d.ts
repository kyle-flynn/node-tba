import MatchSimple from "./MatchSimple";
import MatchVideo from "./MatchVideo";
export default class Match extends MatchSimple {
    private _scoreBreakdown;
    private _videos;
    constructor();
    toJSON(): object;
    fromJSON(json: any): Match;
    scoreBreakdown: any;
    videos: MatchVideo[];
}

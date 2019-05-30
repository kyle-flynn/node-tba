import { TBAModel } from "../types";
export default class MatchVideo extends TBAModel {
    private _key;
    private _type;
    constructor();
    toJSON(): object;
    fromJSON(json: any): MatchVideo;
    key: string;
    type: string;
}

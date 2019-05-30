import { TBAModel } from "../types";
export default class District extends TBAModel {
    private _abbreviation;
    private _displayName;
    private _key;
    private _year;
    constructor();
    toJSON(): object;
    fromJSON(json: any): District;
    abbreviation: string;
    displayName: string;
    key: string;
    year: number;
}

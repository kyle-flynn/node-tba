import { TBAModel } from "../types";
import District from "./District";
export default class EventSimple extends TBAModel {
    private _key;
    private _name;
    private _eventCode;
    private _eventType;
    private _district;
    private _city;
    private _stateProv;
    private _country;
    private _startDate;
    private _endDate;
    private _year;
    constructor();
    toJSON(): object;
    fromJSON(json: any): EventSimple;
    key: string;
    name: string;
    eventCode: string;
    eventType: string;
    district: District;
    city: string;
    stateProv: string;
    country: string;
    startDate: string;
    endDate: string;
    year: number;
}

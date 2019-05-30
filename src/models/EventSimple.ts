import {TBAModel} from "../types";
import District from "./District";

export default class EventSimple extends TBAModel {
  private _key: string;
  private _name: string;
  private _eventCode: string;
  private _eventType: string;
  private _district: District;
  private _city: string;
  private _stateProv: string;
  private _country: string;
  private _startDate: string;
  private _endDate: string;
  private _year: number;

  public constructor() {
    super();
    this._key = "";
    this._name = "";
    this._eventCode = "";
    this._eventType = "";
    this._district = new District();
    this._city = "";
    this._stateProv = "";
    this._country = "";
    this._startDate = "";
    this._endDate = "";
    this._year = 0;
  }

  public toJSON(): object {
    return {
      key: this.key,
      name: this.name,
      event_code: this.eventCode,
      event_type: this.eventType,
      district: this.district.toJSON(),
      city: this.city,
      state_prov: this.stateProv,
      country: this.country,
      start_date: this.startDate,
      end_date: this.endDate,
      year: this.year
    };
  }

  public fromJSON(json: any): EventSimple {
    const event: EventSimple = new EventSimple();
    event.key = TBAModel.getPropertyFromJSON(json.key, "");
    event.name = TBAModel.getPropertyFromJSON(json.name, "");
    event.eventCode = TBAModel.getPropertyFromJSON(json.event_code, "");
    event.eventType = TBAModel.getPropertyFromJSON(json.event_type, "");
    event.district = TBAModel.getModelFromJSON(json.district, District) as District;
    event.city = TBAModel.getPropertyFromJSON(json.city, "");
    event.stateProv = TBAModel.getPropertyFromJSON(json.state_prov, "");
    event.country = TBAModel.getPropertyFromJSON(json.country, "");
    event.startDate = TBAModel.getPropertyFromJSON(json.start_date, "");
    event.endDate = TBAModel.getPropertyFromJSON(json.end_date, "");
    event.year = TBAModel.getPropertyFromJSON(json.year, 0);
    return event;
  }

  get key(): string {
    return this._key;
  }

  set key(value: string) {
    this._key = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get eventCode(): string {
    return this._eventCode;
  }

  set eventCode(value: string) {
    this._eventCode = value;
  }

  get eventType(): string {
    return this._eventType;
  }

  set eventType(value: string) {
    this._eventType = value;
  }

  get district(): District {
    return this._district;
  }

  set district(value: District) {
    this._district = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get stateProv(): string {
    return this._stateProv;
  }

  set stateProv(value: string) {
    this._stateProv = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get startDate(): string {
    return this._startDate;
  }

  set startDate(value: string) {
    this._startDate = value;
  }

  get endDate(): string {
    return this._endDate;
  }

  set endDate(value: string) {
    this._endDate = value;
  }

  get year(): number {
    return this._year;
  }

  set year(value: number) {
    this._year = value;
  }
}
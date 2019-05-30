import {TBAModel} from "../types";

export default class District extends TBAModel {
  private _abbreviation: string;
  private _displayName: string;
  private _key: string;
  private _year: number;

  public constructor() {
    super();
    this._abbreviation = "";
    this._displayName = "";
    this._key = "";
    this._year = 0;
  }

  public toJSON(): object {
    return {
      abbreviation: this.abbreviation,
      display_name: this.displayName,
      key: this.key,
      year: this.year
    };
  }

  public fromJSON(json: any): District {
    const district: District = new District();
    district.abbreviation = TBAModel.getPropertyFromJSON(json.abbreviation, "");
    district.displayName = TBAModel.getPropertyFromJSON(json.display_name, "");
    district.key = TBAModel.getPropertyFromJSON(json.key, "");
    district.year = TBAModel.getPropertyFromJSON(json.year, 0);
    return district;
  }

  get abbreviation(): string {
    return this._abbreviation;
  }

  set abbreviation(value: string) {
    this._abbreviation = value;
  }

  get displayName(): string {
    return this._displayName;
  }

  set displayName(value: string) {
    this._displayName = value;
  }

  get key(): string {
    return this._key;
  }

  set key(value: string) {
    this._key = value;
  }

  get year(): number {
    return this._year;
  }

  set year(value: number) {
    this._year = value;
  }
}
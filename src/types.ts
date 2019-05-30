export interface IModel {
  toJSON(): object,
  fromJSON(json: any): IModel
}

export class TBAModel implements IModel {
  public static getPropertyFromJSON(property: any, defaultValue: any): any {
    if (typeof property === "undefined" || property === null) {
      return defaultValue;
    } else {
      return property;
    }
  }

  public static getModelFromJSON(json: any, model: new () => TBAModel): TBAModel {
    if (typeof json === "undefined" || json === null) {
      return new model();
    } else {
      return new model().fromJSON(json);
    }
  }

  public static getModelListFromJSON(json: any, model: new () => TBAModel): TBAModel[] {
    if (typeof json === "undefined" || json === null) {
      return [];
    } else {
      return json.map((item: any) => new model().fromJSON(item));
    }
  }

  public toJSON(): object {
    return {};
  }

  public fromJSON(json: any): IModel {
    return new TBAModel();
  }
}
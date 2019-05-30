export interface IModel {
    toJSON(): object;
    fromJSON(json: any): IModel;
}
export declare class TBAModel implements IModel {
    static getPropertyFromJSON(property: any, defaultValue: any): any;
    static getModelFromJSON(json: any, model: new () => TBAModel): TBAModel;
    static getModelListFromJSON(json: any, model: new () => TBAModel): TBAModel[];
    toJSON(): object;
    fromJSON(json: any): IModel;
}

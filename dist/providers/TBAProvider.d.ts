import EventSimple from "../models/EventSimple";
import Match from "../models/Match";
interface IAPIResponse {
    statusCode: number;
    response: any | null;
    error: string | null;
}
declare class TBAProvider {
    private static _instance;
    private _axios;
    private _config;
    static getInstance(): TBAProvider;
    private constructor();
    initialize(apiKey: string): void;
    get(path: string): Promise<IAPIResponse>;
    getTeamEventsByYear(teamKey: string, year: number): Promise<EventSimple[]>;
    getTeamMatchesByEvent(teamKey: string, eventKey: string): Promise<Match[]>;
    getMatchesByEvent(eventKey: string): Promise<Match[]>;
}
declare const _default: TBAProvider;
export default _default;

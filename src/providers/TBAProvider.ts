import {default as Axios, AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError} from "axios";
import EventSimple from "../models/EventSimple";
import Match from "../models/Match";

interface IAPIResponse {
  statusCode: number,
  response: any | null,
  error: string | null
}

class TBAProvider {
  private static _instance: TBAProvider;

  private _axios: AxiosInstance;
  private _config: AxiosRequestConfig;

  public static getInstance(): TBAProvider {
    if (typeof TBAProvider._instance === "undefined") {
      TBAProvider._instance = new TBAProvider();
    }
    return TBAProvider._instance;
  }

  private constructor() {}

  /**
   *
   * @param {string} apiKey
   */
  public initialize(apiKey: string): void {
    this._config = {
      baseURL: "https://www.thebluealliance.com/api/v3",
      timeout: 5000,
      headers: {
        "X-TBA-Auth-Key": apiKey
      }
    };
    this._axios = Axios.create(this._config);
  }

  public get(path: string): Promise<IAPIResponse> {
    return new Promise<IAPIResponse>((resolve, reject) => {
      const response: IAPIResponse = {statusCode: 0, response: null, error: null};
      if (typeof this._axios === "undefined") {
        response.statusCode = 500;
        response.error = "TBA provider not initialized. Please call TBAProvider.initialize() before using.";
        reject(response);
      }
      this._axios.get(path).then((apiResponse: AxiosResponse) => {
        if (typeof apiResponse.data === "undefined") {
          response.statusCode = 500;
          response.error = "No data available";
          reject(response);
        } else {
          response.statusCode = apiResponse.status;
          response.response = apiResponse.data;
          resolve(response);
        }
      }).catch((apiError: AxiosError) => {
        response.statusCode = apiError.response.status;
        if (typeof apiError.response.data.Error !== "undefined") {
          response.error = apiError.response.data.Error;
        } else if (typeof apiError.response.statusText !== "undefined") {
          response.error = apiError.response.statusText;
        } else {
          response.error = apiError.response.data;
        }
        resolve(response);
      });
    });
  }

  public getTeamEventsByYear(teamKey: string, year: number): Promise<EventSimple[]> {
    return new Promise<any>((resolve, reject) => {
      this.get(`/team/frc${teamKey}/events/${year}`).then((response: IAPIResponse) => {
        resolve(response.response.map((eventJSON: any) => new EventSimple().fromJSON(eventJSON)));
      }).catch((error: IAPIResponse) => reject(error.error));
    });
  }

  public getTeamMatchesByEvent(teamKey: string, eventKey: string): Promise<Match[]> {
    return new Promise<Match[]>((resolve, reject) => {
      this.get(`/team/frc${teamKey}/event/${eventKey}/matches`).then((response: IAPIResponse) => {
        resolve(response.response.map((matchJSON: any) => new Match().fromJSON(matchJSON)));
      }).catch((error: IAPIResponse) => reject(error.error));
    });
  }

  public getMatchesByEvent(eventKey: string): Promise<Match[]> {
    return new Promise<Match[]>((resolve, reject) => {
      this.get(`/event/${eventKey}/matches`).then((response: IAPIResponse) => {
        resolve(response.response.map((matchJSON: any) => new Match().fromJSON(matchJSON)));
      }).catch((error: IAPIResponse) => reject(error.error));
    });
  }
}

export default TBAProvider.getInstance();
import { IServerResponse } from "../store/ServerTypes";

export enum ApiRouts {}

export class Fetch {
  private constructor() {}

  protected static async get<T extends IServerResponse<R>, R>(
    rout: ApiRouts | string,
    params?: any
  ): Promise<T> {
    return this.call(rout, "GET", undefined, params);
  }
  protected static async post<T extends IServerResponse<R>, R, D>(
    rout: ApiRouts | string,
    data?: D,
    params?: any
  ): Promise<T> {
    return this.call(rout, "POST", data, params);
  }
  protected static async put<T extends IServerResponse<R>, R, D>(
    rout: ApiRouts | string,
    data?: D,
    params?: any
  ): Promise<T> {
    return this.call(rout, "PUT", data, params);
  }

  protected static async call<T extends IServerResponse<R>, R, D>(
    path: ApiRouts | string,
    method: string,
    body?: D,
    queryObject: any = {}
  ): Promise<T> {
    return new Promise<T>(async (resolve, reject) => {
      const query: string = queryObject ? jsonToQueryParams(queryObject) : "";
      let url = `${process.env.REACT_APP_API_HOST}${path}${
        query ? `?${query}` : ""
      }`;

      const request: Request = new Request(url);
      const headers: Headers = new Headers();
      headers.append("Content-Type", "application/json");
      const options: RequestInit = {
        body: JSON.stringify(body),
        method,
        headers,
        mode: "cors",
        cache: "default",
      };
      fetch(request, options)
        .then((response: Response) => {
          return response.text();
        })
        .then((text: string) => {
          const data: T = JSON.parse(text);
          resolve(data);
        })
        .catch((reason: Error) => {
          return reject(reason);
        });
    });
  }
}

export function jsonToQueryParams(object: any): string {
  return Object.keys(object)
    .map((key) => {
      return encodeURIComponent(key) + "=" + encodeURIComponent(object[key]);
    })
    .join("&");
}

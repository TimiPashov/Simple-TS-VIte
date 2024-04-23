import { fetchHelper } from "../utils/http";

export class HttpService<T> {
  protected apiURL: string;

  data = {} as T;
  dataCollection = [] as T[];
  constructor(apiURL: string) {
    this.apiURL = apiURL;
  }

  getAll() {
    return fetchHelper<T[]>(this.apiURL) as Promise<T[]>;
  }
}

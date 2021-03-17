import Axios, {
  CancelTokenSource,
  AxiosRequestConfig,
  AxiosPromise,
} from "axios";
import News from "../../models/News";
import ArrayList from "../../models/ArrayList";
import { CategoryContent } from "../../models/CategoryContent";

class DevCMS {
  private axios = Axios.create({
    baseURL: process.env.BASE_URI,
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": process.env.API_KEY,
    },
  });

  private cancelTokenSource: CancelTokenSource | null = null;

  private resolveConfig = () => {
    if (!this.cancelTokenSource)
      this.cancelTokenSource = Axios.CancelToken.source();

    const config: AxiosRequestConfig = {
      cancelToken: this.cancelTokenSource.token,
    };

    return config;
  };

  // eslint-disable-next-line class-methods-use-this
  private resolvePromise<T>(promise: AxiosPromise<T>) {
    return new Promise<T>((resolve, reject) => {
      promise
        .then((response) => {
          const { data, status } = response;

          if (status < 200 || status >= 300) {
            reject(response);
          } else if (status === 204) {
            resolve({} as T);
          } else {
            resolve(data);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  private get<T>(url: string) {
    return this.resolvePromise(this.axios.get<T>(url, this.resolveConfig()));
  }

  public getNews(): Promise<ArrayList<News>> {
    return this.get<ArrayList<News>>("news");
  }

  public getDesignArray(): Promise<ArrayList<CategoryContent>> {
    return this.get<ArrayList<CategoryContent>>("design");
  }

  public getDesignContent(id: string): Promise<CategoryContent> {
    return this.get<CategoryContent>(`design/${id}`);
  }

  public getCodingArray(): Promise<ArrayList<CategoryContent>> {
    return this.get<ArrayList<CategoryContent>>("coding");
  }

  public getCodingContent(id: string): Promise<CategoryContent> {
    return this.get<CategoryContent>(`coding/${id}`);
  }

  public getInfraArray(): Promise<ArrayList<CategoryContent>> {
    return this.get<ArrayList<CategoryContent>>("infra");
  }

  public getInfraContent(id: string): Promise<CategoryContent> {
    return this.get<CategoryContent>(`infra/${id}`);
  }

  public getOtherArray(): Promise<ArrayList<CategoryContent>> {
    return this.get<ArrayList<CategoryContent>>("other");
  }

  public getOtherContent(id: string): Promise<CategoryContent> {
    return this.get<CategoryContent>(`other/${id}`);
  }
}
export default DevCMS;

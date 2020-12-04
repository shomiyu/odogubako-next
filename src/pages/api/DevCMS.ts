import Axios, {
  CancelTokenSource,
  AxiosRequestConfig,
  AxiosPromise,
} from "axios";
import News from "../../../models/News";
import ArrayList from "../../../models/ArrayList";
import DesignContent from "../../../models/Contents";

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

  public getDesignArray(): Promise<ArrayList<DesignContent>> {
    return this.get<ArrayList<DesignContent>>("design");
  }

  public getDesignContent(id: string): Promise<DesignContent> {
    return this.get<DesignContent>(`design/${id}`);
  }
}
export default DevCMS;

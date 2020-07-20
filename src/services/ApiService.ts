import axios, {
  AxiosError,
  Method,
  AxiosPromise,
  AxiosRequestConfig,
} from "axios";
import { API_URL } from "@shared/constants";
import LocalStorageManager from "./LocalStorageManager/LocalStorageManager";

const AxiosInstance = axios.create();

AxiosInstance.interceptors.request.use(async (config) => {
  const token = LocalStorageManager.getValue("token");
  // eslint-disable-next-line no-param-reassign, no-unused-expressions
  token && (config.headers.authorization = `Bearer ${token}`);
  return config;
});

AxiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) return Promise.reject(error.response);
    return Promise.reject(error);
  }
);

const createRequest = <ResponseType = unknown, RequestType = unknown>(
  url: string,
  method: Method = "GET",
  data?: RequestType,
  additionalConfig?: AxiosRequestConfig
): AxiosPromise<ResponseType> =>
  AxiosInstance({
    baseURL: API_URL,
    method,
    url,
    data,
    ...additionalConfig,
  });

export default createRequest;

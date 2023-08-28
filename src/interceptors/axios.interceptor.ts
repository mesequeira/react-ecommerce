import axios, {
  type AxiosInstance,
  type AxiosResponse,
  type AxiosError,
  type InternalAxiosRequestConfig,
} from "axios";
import { useNavigate } from "react-router-dom";
import { useErrorsStore } from "../store/errors/errors.store";
import { PUBLIC_ROUTES } from "../consts/routes/routes.consts";

const instance: AxiosInstance = axios.create();
const API_URL = import.meta.env.VITE_API_URL;

instance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    config.baseURL = API_URL;
    config.withCredentials = true;

    return config;
  },
  async (error: any) => {
    return await Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    const { code, message } = error;
    const navigate = useNavigate();

    // save the error in the store
    useErrorsStore
      .getState()
      .handleErrors([...useErrorsStore.getState()?.errors, { code, message }]);

    navigate(PUBLIC_ROUTES.ERROR);

    return await Promise.reject(error);
  }
);

export default instance;

import axios, {
  type AxiosInstance,
  type AxiosResponse,
  type AxiosError,
  type InternalAxiosRequestConfig,
} from "axios";
import { useNavigate } from "react-router-dom";
import { PUBLIC_ROUTES } from "../consts/routes/routes.consts";
import { getTokenJwt } from "../common/helpers/token/token.helper";

const instance: AxiosInstance = axios.create();
const API_URL = import.meta.env.VITE_API_URL;

instance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    config.baseURL = API_URL;
    config.withCredentials = true;
    const token = getTokenJwt();

    if (token) config.headers.Authorization = `Bearer ${token}`;

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
    const navigate = useNavigate();

    navigate(PUBLIC_ROUTES.ERROR);

    return await Promise.reject(error);
  }
);

export default instance;

import Axios, { AxiosError } from 'axios';
import AxiosLanguageInterceptor from './AxiosLanguageInterceptor';

export default function makeAxiosHttpClient() {
  const baseURL = process.env.REACT_APP_SERVER_URI;
  const axios = Axios.create({ baseURL, withCredentials: false });

  axios.interceptors.request.use(AxiosLanguageInterceptor);
  axios.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error: AxiosError) => {
      // eslint-disable-next-line @typescript-eslint/no-throw-literal, no-throw-literal
      throw error.response?.data;
    }
  );
  return axios;
}

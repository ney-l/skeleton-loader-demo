import axios, { AxiosResponse } from 'axios';

export const http = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
});

// http.interceptors.request.use(
//   (request) => {
//     console.log(request);
//     // Edit request config
//     return request;
//   },
//   (error) => {
//     console.log(error);
//     return Promise.reject(error);
//   }
// );

// http.interceptors.response.use(
//   (response) => {
//     console.log(response);
//     // Edit response config
//     return response;
//   },
//   (error) => {
//     console.log(error);
//     return Promise.reject(error);
//   }
// );

export type { AxiosResponse };

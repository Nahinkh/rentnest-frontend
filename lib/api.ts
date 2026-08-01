import { IApiResponse } from "@/types/api";
import { AxiosRequestConfig } from "axios";
import { axiosInstance } from "./axiosInstance";

export const api = {
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await axiosInstance.get<IApiResponse<T>>(url, config);
    return response.data.data;
  },
  async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await axiosInstance.post<IApiResponse<T>>(
      url,
      data,
      config,
    );
    return response.data.data;
  },
  async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await axiosInstance.put<IApiResponse<T>>(
      url,
      data,
      config,
    );
    return response.data.data;
  },

  async patch<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await axiosInstance.patch<IApiResponse<T>>(
      url,
      data,
      config,
    );
    return response.data.data;
  },

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await axiosInstance.delete<IApiResponse<T>>(url, config);
    return response.data.data;
  },
};

// export const loginUser = async()=>{}
// export const registerUser = async()=>{}
// export const getCurrentUser = async()=>{}
// export const logoutUser = async()=>{}

import { API_ENDPOINTS } from "@/constants/api";
import { api } from "@/lib/api";
import { iLogin, iRegister, iUser } from "@/types/auth";

export const authService = {
  loginUser: async (payload: iLogin) => {
    return api.post<iUser>(API_ENDPOINTS.AUTH.LOGIN, payload);
  },
  registerUser: async (payload: iRegister) => {
    return api.post<iUser>(API_ENDPOINTS.AUTH.REGISTER, payload);
  },
  getCurrentUser: async () => {
    return api.get<iUser>(API_ENDPOINTS.AUTH.PROFILE);
  },
  logoutUser: async () => {
    return api.post(API_ENDPOINTS.AUTH.LOGOUT);
  },
};

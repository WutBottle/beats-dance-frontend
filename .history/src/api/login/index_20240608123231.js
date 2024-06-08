import axiosApi from "../axiosApi"

export const login = (data) => {
  return axiosApi.post(`/login`, data)
}
import axiosApi from "../axiosApi"

export const getItem = () => {
  return axiosApi.get('/items/1')
}
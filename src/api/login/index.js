import axiosApi from "../axiosApi"

export const getItem = (data) => {
  return axiosApi.get(`/items/${data}`)
}
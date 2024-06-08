import axiosApi from "../axiosApi"

export const getItem = (data) => {
  return axiosApi.post(`/items/${data}`)
}
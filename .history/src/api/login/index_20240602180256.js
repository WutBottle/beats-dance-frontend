import axiosApi from "../axiosApi"

export const getItem = axiosApi.get('/items/1').then(res => {
  console.log(res)
})
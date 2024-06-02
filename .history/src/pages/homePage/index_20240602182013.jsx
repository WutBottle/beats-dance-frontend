import { useEffect, useState } from 'react'
import { getItem } from '@/api/login'
export default ({ data }) => {
  useEffect(() => {
    console.log(1)
    getItem(data)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err))
  }, [])
  return <div>homePage</div>
}

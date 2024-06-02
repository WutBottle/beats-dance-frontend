import { useEffect, useState } from 'react'
import { getItem } from '@/api/login'
export default () => {
  useEffect(() => {
    getItem(data)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err))
  }, [])
  return <div>homePage</div>
}

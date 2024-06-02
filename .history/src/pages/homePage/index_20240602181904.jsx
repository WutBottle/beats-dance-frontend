import { useEffect } from 'react'
import { getItem } from '@/api/login'
export default () => {
  useEffect(() => {
    console.log(1)
    getItem(1)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err))
  }, [])
  return <div>homePage</div>
}

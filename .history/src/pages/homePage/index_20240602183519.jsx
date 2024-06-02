import { useEffect } from 'react'
import { getItem } from '@/api/login'
export default () => {
  useEffect(() => {
    getItem(1)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err))
  }, [])
  return <div>homePage</div>
}

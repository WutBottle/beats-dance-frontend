import { useEffect } from 'react'
import { getItem } from '@/api/login'
export default () => {
  console.log(1)
  useEffect(() => {
    getItem(data)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err))
  }, [])
  return <div>homePage</div>
}

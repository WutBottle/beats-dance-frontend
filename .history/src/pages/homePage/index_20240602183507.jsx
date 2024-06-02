import { useEffect } from 'react'
import { getItem } from '@/api/login'
const Test = () => {
  useEffect(() => {
    getItem(1)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err))
  }, [])
  return <>123</>
}
export default () => {
  return (
    <div>
      <Test />
    </div>
  )
}

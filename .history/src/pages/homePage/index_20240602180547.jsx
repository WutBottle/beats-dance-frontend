import { useEffect } from 'react'
import { getItem } from '@/api/login'
export default () => {
  useEffect(() => {
    getItem
  }, [])
  return <div>homePage</div>
}

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  console.log('pathname', pathname)

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)
    return () => clearTimeout(timeout)
  }, [pathname])

  return null
}

export default ScrollToTop

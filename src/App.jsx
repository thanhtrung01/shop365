import './App.css'
import * as React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './useRouteElement'
function App() {
  const [showButton, setShowButton] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY > 200) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const goTop = () =>
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })

  const telCall = () => {
    window.location.href = 'tel:0971559971'
  }

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    
    </React.StrictMode>
  )
}

export default App

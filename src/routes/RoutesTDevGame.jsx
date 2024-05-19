// [RoutesTDevGame.jsx]

import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Login from '../pages/login/Login'
import Level1 from '../pages/level1/Level1'
import Level2 from '../pages/level2/Level2'
import Level3 from '../pages/level3/Level3'
import Level4 from '../pages/level4/Level4'
import Profile from '../pages/profile/Profile'
import { limpiarLocalStorage } from '../utils/localStorageUtils'

const debug = true

function print_debug (text) {
  if (debug) {
    console.log(`[RoutesTDevGame.jsx]: ${text}`)
  }
}

function RouteChangeHandler () {
  const location = useLocation()
  const [previousRoute, setPreviousRoute] = useState(null)
  const [currentRoute, setCurrentRoute] = useState(null)

  useEffect(() => {
    if (currentRoute != location.pathname) {
      print_debug(`Se ha cambiado la ruta a ${location.pathname}`)
      print_debug(`Se ha solicitado cambio de ruta de ${previousRoute} y ${currentRoute}`)

      setPreviousRoute(currentRoute)
      setCurrentRoute(location.pathname)
    }
  }, [location])

  useEffect(() => {
    print_debug(`Se han efectuado cambios de ruta a ${previousRoute} y ${currentRoute}`)
    if (previousRoute != currentRoute) {
      limpiarLocalStorage()
      print_debug('Se ha limpiado la localStorage')
    }
  }, [previousRoute, currentRoute])

  return null
}

export default function RoutesTDevGame () {
  return (
    <BrowserRouter>
      <RouteChangeHandler />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/level1' element={<Level1 />} />
        <Route path='/level2' element={<Level2 />} />
        <Route path='/level3' element={<Level3 />} />
        <Route path='/level4' element={<Level4 />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

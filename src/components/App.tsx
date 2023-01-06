import React, { Suspense, useEffect } from 'react'
import ReactGA from 'react-ga'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'

import ProtectedRoutes from '@relay/components/ProtectedRoutes'
import SuspenseFallback from '@relay/components/SuspenseFallback'
import Config from '@relay/helpers/Config'
import worker from '@relay/mocks/browser'
import Home from '@relay/pages/Home'
import LoggedOut from '@relay/pages/LoggedOut'
import NotFound from '@relay/pages/NotFound'

// Lazy loading example
const Counter = React.lazy(() => import('@relay/pages/Counter'))
const Login = React.lazy(() => import('@relay/pages/Login'))

// Start the mocking conditionally
if (Config.env === 'local') {
  worker.start()
}

export function App() {
  const location = useLocation()

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search)
  }, [location])

  return (
    <Suspense fallback={<SuspenseFallback />}>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/' element={<Home />} />
          <Route path='/counter' element={<Counter />} />
        </Route>
        <Route path='/signout-callback-oidc' element={<LoggedOut />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

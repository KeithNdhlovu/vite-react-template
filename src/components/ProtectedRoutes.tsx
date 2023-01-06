import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

import useAuth from '@relay/hooks/useAuth'

function ProtectedRoutes() {
  const location = useLocation()
  const { isAuthenticated } = useAuth()
  const fromUrl = location.pathname + location.search

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={'/login?returnUrl='.concat(encodeURI(fromUrl))} state={{ from: fromUrl }} />
  )
}

export default ProtectedRoutes

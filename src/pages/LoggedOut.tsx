import { Navigate } from 'react-router-dom'

import useAuth from '@relay/hooks/useAuth'
import authService from '@relay/services/AuthService'

function LoggedOut() {
  const { isAuthenticated } = useAuth()

  // We dont need to show this page if the user is authenticated
  if (isAuthenticated) {
    return <Navigate to='/' />
  }

  return (
    <div>
      <h1>You are logged out</h1>

      <button type='button' onClick={() => authService.login()}>
        Click Here to Login
      </button>
    </div>
  )
}

export default LoggedOut

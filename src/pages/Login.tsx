import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import authService from '@relay/services/AuthService'

function Login() {
  const location = useLocation()

  // We should dynamically begin to launch the login screen from the SSO, since there is no point showing this screen
  useEffect(() => {
    // Lets save the return url so we can navigate to the correct page when login is complete
    if (location.state?.from) {
      window.localStorage.setItem('CACHE_RETURN_URL', location.state.from)
    }

    authService.login()
  }, [location.state])

  return (
    <div>
      <h1>Fancy Login, we are redirecting you to our SSO</h1>
    </div>
  )
}

export default Login

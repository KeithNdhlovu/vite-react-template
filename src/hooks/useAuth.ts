import { useDispatch } from 'react-redux'
import { User } from 'oidc-client'

import { updateTokens } from '@relay/redux/authSlice'
import authService from '@relay/services/AuthService'
import { TAuthed } from '@relay/types'

/**
 * A custom hook that will check the sessionStorage and determine if a user is logged in or not. This hook can be used anytime to determine which UI to display to the user.
 *
 */
const useAuth = (): TAuthed => {
  const dispatch = useDispatch()
  const session = window.sessionStorage.getItem(authService.userStoreKey)

  if (!session) {
    dispatch(updateTokens(null))

    return {
      user: null,
      token: null,
      isAuthenticated: false,
    }
  }

  const user = User.fromStorageString(session)

  dispatch(updateTokens({ access_token: user.access_token }))

  return {
    user,
    token: user.access_token || null,
    isAuthenticated: user.access_token !== null,
  }
}

export default useAuth

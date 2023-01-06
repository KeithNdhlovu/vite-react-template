import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import i18next from 'i18next'
import { User } from 'oidc-client'

import type { RootState } from '@relay/redux/store'
import authService from '@relay/services/AuthService'
import profileApi from '@relay/services/profile'
import type { TAuthState } from '@relay/types'

const initialState: TAuthState = {
  user: null,
  token: null,
  locale: i18next.language,
  isAuthenticated: false,
}

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => {
      authService.logout()
      return initialState
    },
    login: () => {
      authService.login()
      return initialState
    },
    updateTokens: (state, action: PayloadAction<Partial<User> | null>) => {
      state.token = action.payload?.access_token || null
      state.isAuthenticated = action.payload !== null
      console.log('updating/user', action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(profileApi.endpoints.getProfile.matchPending, (state, action) => {
        console.log('pending', action)
      })
      .addMatcher(profileApi.endpoints.getProfile.matchFulfilled, (state, action) => {
        console.log('fulfilled', action)
        state.user = action.payload
      })
      .addMatcher(profileApi.endpoints.getProfile.matchRejected, (state, action) => {
        console.log('rejected', action)
      })
  },
})

export const { logout, login, updateTokens } = slice.actions
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated

export default slice.reducer

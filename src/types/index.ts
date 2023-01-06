import type { User } from 'oidc-client'

import type { IUser } from '@relay/interfaces'

export type TAuthState = {
  user: null | IUser
  token: string | null
  locale: string
  isAuthenticated: boolean
}

export type TAuthed = {
  user: null | User
  token: string | null
  isAuthenticated: boolean
}

export type TBlockRequest = {
  app_id: string
  version: string
}

export type TProfileRequest = {
  app_id: string
  installation_id: boolean
  debug_query_enabled: boolean
  debug_memory_enabled: boolean
}

export type TConfig = {
  env: string
  baseUrl: string
  sso: {
    authUrl: string
    clientId: string
    authScope: string
    responseType: string
    clientRoot: string
  }
  bugsnagKey: string
  google: {
    mapsApiKey: string
    analyticsTrackingId: string
  }
  appId: string
  version: string
}

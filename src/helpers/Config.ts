import { version } from '@relay/base/package.json'
import { TConfig } from '@relay/types'

/**
 * Environment variables mapper
 */
const Config: TConfig = {
  env: import.meta.env.VITE_ENV,
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  sso: {
    authUrl: import.meta.env.VITE_SSO_AUTH_URL,
    clientId: import.meta.env.VITE_SSO_CLIENT_ID,
    authScope: import.meta.env.VITE_SSO_AUTH_SCOPE,
    clientRoot: import.meta.env.VITE_SSO_CLIENT_ROOT,
    responseType: import.meta.env.VITE_SSO_RESPONSE_TYPE,
  },
  bugsnagKey: import.meta.env.VITE_BUGSNAG_KEY,
  google: {
    mapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    analyticsTrackingId: import.meta.env.VITE_GOOGLE_GA_TRACKING_ID,
  },
  appId: import.meta.env.VITE_APP_ID,
  version,
}

export default Config

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly NODE_ENV: string
  readonly VITE_ENV: string
  readonly VITE_API_BASE_URL: string
  readonly VITE_SSO_AUTH_URL: string
  readonly VITE_SSO_CLIENT_ID: string
  readonly VITE_SSO_AUTH_SCOPE: string
  readonly VITE_SSO_RESPONSE_TYPE: string
  readonly VITE_SSO_CLIENT_ROOT: string
  readonly VITE_BUGSNAG_KEY: string
  readonly VITE_GOOGLE_MAPS_API_KEY: string
  readonly VITE_GOOGLE_GA_TRACKING_ID: string
  readonly VITE_APP_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

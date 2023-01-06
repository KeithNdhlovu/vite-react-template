import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactGA from 'react-ga'
import { Provider } from 'react-redux'
import Bugsnag from '@bugsnag/js'
import type { BugsnagPluginReactResult } from '@bugsnag/plugin-react'
import BugsnagPluginReact from '@bugsnag/plugin-react'

import '@relay/i18n/index'

import { WrappedApp } from '@relay/components/App'
import ErrorOverlay from '@relay/components/ErrorOverlay'
import Config from '@relay/helpers/Config'
import store from '@relay/redux/store'

import '@relay/styles/index.css'

// Initialise Bugsnag
Bugsnag.start({
  apiKey: Config.bugsnagKey,
  plugins: [new BugsnagPluginReact()],
  releaseStage: Config.env,
  enabledReleaseStages: ['development', 'local', 'production', 'staging'], // @TODO: Remove local
})

// Initialise Google Analytics
ReactGA.initialize(Config.google.analyticsTrackingId)

const plugin = Bugsnag.getPlugin('react') as BugsnagPluginReactResult
const ErrorBoundary = plugin.createErrorBoundary(React)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <ErrorBoundary FallbackComponent={ErrorOverlay}>
      <React.StrictMode>
        <WrappedApp />
      </React.StrictMode>
    </ErrorBoundary>
  </Provider>
)

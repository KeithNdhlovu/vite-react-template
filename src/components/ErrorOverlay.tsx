import React from 'react'

import Config from '@relay/helpers/Config'

type Props = {
  error: Error
  info: React.ErrorInfo
  clearError: () => void
}

function ErrorOverlay({ error, info, clearError }: Props) {
  return (
    <div>
      <p>{error.message}</p>
      <p>{Config.env}</p>
      <button type='button' onClick={clearError}>
        Clear Errors
      </button>
    </div>
  )
}

export default ErrorOverlay

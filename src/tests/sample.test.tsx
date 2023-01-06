import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'

import { App, WrappedApp } from '@relay/components/App'

/**
 * Some example tests
 *
 */
describe('App', () => {
  it('Renders hello world', () => {
    render(<WrappedApp />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Hello World')
  })

  it('Renders not found on invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/banana']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Not Found')
  })
})

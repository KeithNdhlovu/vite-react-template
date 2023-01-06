/* eslint-disable import/no-extraneous-dependencies */
import matchers from '@testing-library/jest-dom/matchers'
import { expect } from 'vitest'

import server from '@relay/mocks/server'

expect.extend(matchers)

beforeAll(() => {
  // Enable mocking in tests
  server.listen()
})

afterEach(() => {
  // Reset any runtime handlers tests may use
  server.resetHandlers()
})

afterAll(() => {
  // Cleanup once the tests are done
  server.close()
})

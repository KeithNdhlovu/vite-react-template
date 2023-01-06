import { setupServer } from 'msw/node'

import handlers from '@relay/mocks/handlers'

const server = setupServer(...handlers)

export default server

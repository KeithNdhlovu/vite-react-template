import { setupWorker } from 'msw'

import handlers from '@relay/mocks/handlers'

const worker = setupWorker(...handlers)

export default worker

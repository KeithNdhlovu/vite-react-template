import { rest } from 'msw'

import Config from '@relay/helpers/Config'
import { defaultApiVersion } from '@relay/services/api'

const handlers = [
  rest.get(`${Config.baseUrl}/${defaultApiVersion}/me`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: crypto.randomUUID(),
        phone_number: '+27621755941',
        email: 'keithn+34@d6.co.za',
        first_name: 'Kevin',
        last_name: 'Blasczykowski',
        show_rate_ap: false,
        communities: [],
      })
    )
  }),

  rest.get(`${Config.baseUrl}/${defaultApiVersion}/block`, (req, res, ctx) => {
    return res(
      ctx.json({
        show: false,
        title: null,
        body: null,
        action: null,
      })
    )
  }),
]

export default handlers

import { App } from '@tinyhttp/app'
import { cors } from '@tinyhttp/cors'

import { PORT } from '../config/env.js'
import logger from '../utils/logger.js'
import routes from './routes.js'

const app = new App()

/* ======= SETTINGS ======= */
app.set('port', PORT)

/* ======= MIDDLEWARE ======= */
app.use(logger())
app.use(cors())

/* ======= ROUTES ======= */
app.route(routes)

export default app

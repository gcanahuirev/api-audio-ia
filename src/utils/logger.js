import { logger } from '@tinyhttp/logger'

const LoggerOptions = {
  methods: ['GET', 'POST'],
  output: { callback: console.log, color: true },
  timestamp: { format: 'HH:mm:ss' },
  emoji: true,
  ip: true
}

logger(LoggerOptions)

export default logger
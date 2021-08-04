import { App } from '@tinyhttp/app'

const routes = new App()

routes.post('/api/v1/audio/:name', async (req, res, next) => {
  const { name } = req.params
  const data = `hola mundo :), ${name}`
  res.json({data})
})

export default routes

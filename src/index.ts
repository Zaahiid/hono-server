import { Hono } from 'hono'

import home from './routes/home.routes.js'

const app = new Hono().basePath("/api/v1")


app.route('/home',home)

const testMiddleware = (c, next) => {
  console.log('test middleware')
  return next()
}

app.get('/',testMiddleware, (c) => {
  return c.text('Hello Hono!')
})

export default app

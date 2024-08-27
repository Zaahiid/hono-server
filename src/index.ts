import { Hono } from 'hono'

const app = new Hono().basePath("/api/v1")

const testMiddleware = (c, next) => {
  console.log('test middleware')
  return next()
}

app.get('/',testMiddleware, (c) => {
  return c.text('Hello Hono!')
})

export default app

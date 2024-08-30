import { Hono } from 'hono'

const home = new Hono()

home.get('/', (c) => {
    return c.text('Welcome to home 🏡')
})

export default home
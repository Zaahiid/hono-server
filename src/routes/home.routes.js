import { Hono } from 'hono'
import { getHomes } from '../controllers/home.controllers'

const home = new Hono()

home.get('/', getHomes)

export default home
import { fastify }  from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const app = fastify()

app.get('/', () => {
 return console.log('Hello');
})

app.listen({
  port: 3332
})
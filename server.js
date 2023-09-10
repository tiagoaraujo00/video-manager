import { fastify }  from 'fastify'

const app = fastify()

app.get('/', () => {
 return console.log('Hello');
})

app.listen({
  port: 3332
})
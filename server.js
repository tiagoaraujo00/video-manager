import { fastify }  from 'fastify'
import { DatabaseMemory } from './database-memory.js'
import { DatabasePostgres } from './database-postgres.js'

const app = fastify()

const database = new DatabasePostgres()

app.post('/videos', async (req, res) => {
  const { title, description, duration } = req.body
  
  await database.create({
    title,
    description,
    duration
  })
  return res.status(201).send()
})
app.get('/videos', async () => {
 const videos = await database.list()
 return videos
})
app.put('/videos/:id', async (req, res) => {
  const { id } = req.params
  const { title, description, duration } = req.body

  await database.update(id, {
    title,
    description,
    duration
  })
  return res.status(204).send()
})
app.delete('/videos/:id', async (req, res) => {
  const { id } = req.params
  await database.delete(id)
  return res.status(204).send()
})

app.listen({
  host: '0.0.0.0',
  port: process.env.PORT ?? 3333
})
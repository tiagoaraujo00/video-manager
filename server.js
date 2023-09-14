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
app.put('/videos/:id', (req, res) => {
  const { id } = req.params
  const { title, description, duration } = req.body

  database.update(id, {
    title,
    description,
    duration
  })
  return res.status(204).send()
})
app.delete('/videos/:id', (req, res) => {
  const { id } = req.params
  database.delete(id)
  return res.status(204).send()
})

app.listen({
  port: 3332
})
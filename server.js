import { fastify }  from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const app = fastify()

const database = new DatabaseMemory()

app.post('/videos', (req, res) => {
  const { title, description, duration } = req.body
  database.create({
    title,
    description,
    duration
  })
  return res.status(201).send()
})
app.get('/videos', () => {
 const videos = database.list()
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

app.listen({
  port: 3332
})
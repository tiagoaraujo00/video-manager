import { randomUUID } from 'node:crypto'
import { sql } from './db.js'

export class DatabasePostgres {
  #videos = new Map()

  async list(search) {
    let videos
    
    if (search) {
      videos = await sql`select * from videos where title ilike ${'%' + search + '%'}`
    } else {
      videos =  await sql`select * from videos`
    }
    return videos
  }
  async create(video) {
  const videoId = randomUUID()
  const { title, duration, description } = video
  await sql`insert into videos (id, title, description, duration) VALUES (${ videoId }, ${ title }, ${ description }, ${ duration })`
  }
  update(id, video) {
  }
  delete(id) {
  }
}
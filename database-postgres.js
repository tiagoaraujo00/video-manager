import { randomUUID } from 'node:crypto'
import { sql } from './db.js'

export class DatabasePostgres {
  #videos = new Map()

  async list(search) {
    let videos
    
    if (search) {
      videos = await sql`select * from videos where title ilike "%${search}%"`
    } else {
      videos =  await sql`select * from videos`
    }
  }
  async create(video) {
  const videoId = randomUUID()
  }
  update(id, video) {
  }
  delete(id) {
  }
}
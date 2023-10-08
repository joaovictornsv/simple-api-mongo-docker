import express from 'express'
import {DatabaseName, getDatabase} from "./db.js";
import {faker} from "@faker-js/faker";

const app = express()

app.get('/', async (req, res) => {
  const db = await getDatabase(DatabaseName)
  const users = await db.collection('users').find().toArray()

  res.json(users)
})

app.get('/create', async (req, res) => {
  const db = await getDatabase(DatabaseName)
  await db.collection('users').insertOne({
    name: faker.person.fullName()
  })

  res.json({ message: 'ok' })
})

app.listen(3000, () => console.log('Server running on port 3000'))

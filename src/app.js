import express from 'express'
import { pool } from './db.js'
import {PORT} from './config.js'

const app = express()

app.get('/get', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM m_allscheme_consolidated_data')
  res.json(rows)
})

app.listen(PORT)
console.log('Server on port', PORT)

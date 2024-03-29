
import 'dotenv.config.js'
import express from 'express'
import cors from 'cors'
import logger from 'morgan'
import formData from 'express-form-data'

import { router as profilesRouter } from './routes/profiles.js'

import './confirg/database.js'

const app = express()

app.use(cors()) 
app.use(logger('dev'))
app.use(express.json())
app.use(formData.parse())

app.use('/api/profiles', profilesRouter)


app.use(function (req, res, next) {
  res.status(404).json({ err: 'Not found' })
})

app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({ err:err.message })
})

export { app }
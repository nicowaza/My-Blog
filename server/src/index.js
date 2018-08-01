import express from 'express'
import volleyball from 'volleyball'
import mongoose from 'mongoose'
import passport from 'passport'
import { configJWTStrategy } from './api/middlewares/passport-jwt'
import 'dotenv/config'
const { SERVER_PORT } = process.env
import { connect } from './config/DB'
import { getConfig } from './config/config'
import { restRouter } from './api'

const config = getConfig(process.env.NODE_ENV)
const port = process.env.PORT || 6543
const app = express()

connect()

app.use(volleyball)
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.use(passport.initialize())
//passport config
configJWTStrategy()


app.use('/api', restRouter)

app.get('/', (req, res) => {
  console.log('tout est ok')
  res.json('ça marche')
})


app.listen(port, () => console.log(`[Express] is running on ${port}`))

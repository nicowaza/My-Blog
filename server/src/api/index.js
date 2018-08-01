import express from 'express'
import { blogRouter } from './ressources/blogs/'
import { userRouter } from './ressources/users/'

export const restRouter = express.Router()

restRouter.use('/users', userRouter)
restRouter.use('/blogs', blogRouter)

import express from 'express'
import userControler from './user-ctrl'
import passport from 'passport'
import { isAdmin } from '../../middlewares/admin'

export const userRouter = express.Router()

const adminLogin =[passport.authenticate('jwt', {session:false}), isAdmin]


userRouter.get('/test', adminLogin, (req, res) => res.json({
  userName : req.user.userName,
  isAdmin: req.user.isAdmin
  }))
userRouter.post('/register', userControler.register)
userRouter.post('/login', userControler.login)
userRouter.get('/me', passport.authenticate('jwt', { session: false }), userControler.authenticate)

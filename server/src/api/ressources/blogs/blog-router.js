import express from 'express'
import blogControler from './blog-ctrl'
import passport from 'passport'
import { isAdmin } from '../../middlewares/admin'

export const blogRouter = express.Router()

const adminLogin =[passport.authenticate('jwt', {session:false}), isAdmin]
const auth =passport.authenticate('jwt', {session:false})

  blogRouter.get('/published',auth, blogControler.findPublished)
  blogRouter.get('/unpublished',adminLogin, blogControler.findUnpublished)
  blogRouter.post('/add', adminLogin, blogControler.addBlog)

  blogRouter.get('/:id', blogControler.findOne)
  blogRouter.put('/:id', adminLogin, blogControler.updateBlog)
  blogRouter.delete('/:id', adminLogin, blogControler.deleteBlog)

  blogRouter.delete('/unlike/:id/:likes_id', auth, blogControler.unLikeBlog)
  //ne marche pas...

  blogRouter.post('/like/:id', auth, blogControler.likeBlog)

  blogRouter.post('/comment/:id', auth, blogControler.comment)

  blogRouter.delete('/comment/:id/:comments_id', auth, blogControler.commentDelete)

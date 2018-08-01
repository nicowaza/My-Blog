import Blog from './blog-model'
import bcrypt from 'bcryptjs'
import Joi from 'joi'
import mongoose from 'mongoose'

export default {

  validateBlog(body){
    const schema = Joi.object().keys({
      title: Joi.string().required(),
      text: Joi.string().min(3).max(500).required(),
      ispublished: Joi.boolean().default(true)
    })
    const {value, error} = Joi.validate(body, schema)
      if (error && error.details){
        return{error}
      }
      return {value}
    }
  }

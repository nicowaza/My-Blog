import mongoose from 'mongoose'
import moment from 'moment'

const { Schema } = mongoose

const blogSchema = new Schema ({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: String,
    default: moment().format('Do MMMM YYYY')
  },
  ispublished: {
    type: Boolean,
    default: true
  },
  author: {
    type: mongoose.Schema.Types.String,
    ref: 'User'
  },
  likes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    }
  ],
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      text: {
        type: String,
        required: true
      },
      userName: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: String,
        default: moment().format('Do MMMM YYYY')
      }
    }
  ],
})

export default mongoose.model('Blog', blogSchema)

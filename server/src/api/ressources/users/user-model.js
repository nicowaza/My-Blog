import mongoose from 'mongoose'
import moment from 'moment'

const { Schema } = mongoose


const userSchema = new Schema ({
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required : true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
  },
  date: {
    type: String,
    default: moment().format('Do MMMM YYYY')
  },
})


export default mongoose.model('User', userSchema)

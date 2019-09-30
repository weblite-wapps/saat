import mongoose from 'mongoose'

mongoose.connect('mongodb://127.0.0.1:27017/saat')
mongoose.Promise = Promise
const db = mongoose.connection
db.on('error', console.log)

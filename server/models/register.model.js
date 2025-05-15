import mongoose from 'mongoose'

const registerSchema = new mongoose.Schema({
    eventName :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    },
    email :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    enrolled:{
        type: Boolean,
        required: true
    },
    events:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    }]

    

},{timestamps: true})

const Register = mongoose.model('Register',registerSchema)
export default Register
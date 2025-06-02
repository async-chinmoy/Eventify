import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    time:{
        type:String,
        required: true
    },
    type:{
        type: String,
        required: true,
        enum :[ 'Technical','Cultural', 'Sports','Workshops & Seminars', 'Literary', 'Management', 'Social Initiatives', 'Other' ]
    }
},{timestamps: true})

const Event = mongoose.model('Event',eventSchema)
export default Event
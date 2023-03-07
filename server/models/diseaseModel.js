const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')

const diseaseSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "Please enter a disease name"]
        },
        description:{
            type: String,
            required: [true, "Please enter a description"]
        },
        plant:{
            type: ObjectId,
            required: true
        },
        images:{
            type: [String],
            required: false
        },
        treatments:{
            type: [String],
            required: false
        }
    }
)

const Disease = mongoose.model('Disease', diseaseSchema);

module.exports = Disease;

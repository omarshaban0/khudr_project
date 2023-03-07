const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')

const plantSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "Please enter a plant name"]
        },
        diseases:{
            type: [ObjectId],
            required: false
        }
    }
)

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;

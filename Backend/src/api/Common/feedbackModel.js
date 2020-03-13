import mongoose from 'mongoose'

const feedbackSchema = new mongoose.Schema({
    renter: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "renters"
    },
    owner: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "owners"
    },
    property: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "propertys"
    },
    feedback: {
        type: String
    }
}, {
    timestamps: true
})
const feedback = mongoose.model('feedbacks', feedbackSchema)

export default feedback
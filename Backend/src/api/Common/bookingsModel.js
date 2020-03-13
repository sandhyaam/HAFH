import mongoose from 'mongoose'

const historySchema = new mongoose.Schema({
    owner: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "owners"
    },
    property: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "propertys"
    },
    renter: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "renters"
    },
    houseNo: {
        type: String
    },
    roomType: {
        type: String
    },
    amount: {
        type: Number
    },
    date: {
        type: String
    },
    month: {
        type: String
    },
    status: {
        type: String
    }
}, {
    timestamps: true
})

const bookingsModel = mongoose.model('bookings', historySchema)

export default bookingsModel
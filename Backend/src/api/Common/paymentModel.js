import mongoose from 'mongoose'

const paymentSchema = new mongoose.Schema({
    property: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "propertys"
    },
    renter: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "renters"
    },
    amount: {
        type: Number
    },
    address: {
        type: String
    },
    cardtype: {
        type: String
    },
    cardHolderName: {
        type: String
    },
    cardNo: {
        type: String
    },
    cvv: {
        type: Number
    },

    date: {
        type: String
    },
    month:{
        type:String
    }
    
}, {
    timestamps: true
});
const payment = mongoose.model('payments', paymentSchema)

export default payment
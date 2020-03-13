import mongoose, { Mongoose } from 'mongoose'

const propertySchema = new mongoose.Schema({
    owner: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "owners"
    },
    propertyName: {
        type: String,
    },
    typeOfHouse: {
        type: String
    },
    houseNo: {
        type: String,
        unique:true
    },
    roomType: {
        type: String
    },
    amount: {
        type: Number
    },
    description: {
        type: String
    },
    location: {
        type: String
    },
    address: {
        type: String
    },
    image: {
        type: String
    },
    status:{
        type:String
    }
}, {
    timestamps: true
})
const property = mongoose.model('propertys', propertySchema)

export default property
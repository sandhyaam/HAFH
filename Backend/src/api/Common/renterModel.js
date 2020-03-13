import mongoose from 'mongoose'

const renterSchema = new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    userName:{
        type:String
    },
    password:{
        type:String
    },
    phoneNo:{
        type:Number
    },
    email:{
        type:String
    },
    address:{
        type:String
    },
    status:{
        type:String
    }
},{
    timestamps:true
})
const renterModel=mongoose.model('renters',renterSchema)

export default renterModel
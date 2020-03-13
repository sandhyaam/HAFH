import mongoose from 'mongoose'

const ownerSchema =new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    userName:{
        unique:true,
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
});
const ownermodel=mongoose.model('owners',ownerSchema)

export default ownermodel
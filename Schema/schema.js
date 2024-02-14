const mongoose=require("mongoose")

const schema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    comment:{
        type:String,
    },
})

const collection=new mongoose.model("Comments",schema)
module.exports=collection;
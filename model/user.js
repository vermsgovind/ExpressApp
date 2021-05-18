import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({  // we are defining a schema with attributes name, age, username,password
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
}, {timestamps:true});

export const User = mongoose.model('User',userSchema);// the User inside model will be available as collection in DB
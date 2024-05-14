import mongoose from "mongoose";
const userSchema= new mongoose.Schema({
fullname:{
    require:true,
    type:String
},
email:{
    require:true,
    type:String,
    unique:true,
},
username:{
    require:true,
    type:String,
    unique:true,
},
password:{
    require:true,
    type:String
},
aboute:{
    type:String
}

},{timestamps:true})

const User=mongoose.model("user",userSchema);
export default User;
import User from "../model/User.js"

const register=async(req,res)=>{
    try{
    const {fullname,username,email,password}=req.body;
    const existingUser=await User.findOne({email: email});
    if(existingUser)return res.status(404).send("user exist");
    const newUser= new User();
    await newUser.save();
    res.status(201).json(newUser);
}catch(err){
    res.status(500).json(err)
}
}


export{ register}
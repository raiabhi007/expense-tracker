import {Router} from "express";
import User from "../models/User.js";
 import bcrypt from 'bcrypt';

const router = Router();

router.post('/register',async (req,res) =>{
    //get all form data
    const {email,password,firstName,lastName} = req.body;
    //check if user exist with same email
    const userExists = await User.findOne({email});
    if(userExists){
        res.status(406).json({message:"User already exists"});
        return; 
    }

    //hash the password
    const saltRounds = 10;
    const salt = await bcrypt.genSaltSync(saltRounds);
    const hashedPassword = await bcrypt.hashSync(password,salt);
    console.log(hashedPassword);

    const user = await User({email,password:hashedPassword,firstName,lastName});
    const savedUser = await user.save();
    console.log(savedUser);
    
    //store user
    res.status(201).json({message:"user is created"});
});

export default router;
import { User } from "../models/user.model.js";

export const signup = async (req, res) =>{
    const {email, name, password} = req.body;
    try {
        if(!email || !name || !password){
            throw new Error("all failds ar requird")
        }

        const userAlreadyExist = await User.findOne({email})
        if(userAlreadyExist){
            return res.status(400).json({success:false, message: "user already exist"})
        }
        
    } catch (error) {
        res.status(400).json({success:false, message: error.message})
    }
};

export const login = async (req, res) =>{
    res.send("login route");
};

export const logout = async (req, res) =>{
    res.send("logout route");
};
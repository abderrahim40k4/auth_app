import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { generatTokenAndSetCookie } from "../utils/generatTokenAndSetCookie.js";
import { sendVerificationEmail, sendWelcomeEmail } from "../mailtrap/emails.js";


export const signup = async (req, res) =>{
    const { email, password, name } = req.body;
    try {
        if(!email || !name || !password){
            throw new Error("all failds ar requird")
        }

        const userAlreadyExist = await User.findOne({email});
        console.log("user already exist", userAlreadyExist)
        if(userAlreadyExist){
            return res.status(400).json({success:false, message: "user already exist"})
        }

        const hashPassword = await bcryptjs.hash(password, 10);
        const verficationToken = Math.floor(10000 + Math.random() * 90000).toString();

        const user = new User({
            email, 
            name,
            password: hashPassword,
            vereficationToken: verficationToken,
            verficationTokenExpiresAt: Date.now() + 24 * 60 *60 * 1000,
        })
         await user.save()
         generatTokenAndSetCookie(res, user._id);

         sendVerificationEmail(user.email, verficationToken)
         res.status(201).json({
            success:true,
            message:"user created successfuly",
            user:{
                ...user._doc,
                password:undefined,
            },
         })
        
    } catch (error) {
        res.status(400).json({success:false, message: error.message})
    }
};

export const verifyEmail = async (res, req)=> {
    const { code } = req.body;
    try {
        const user = await User.findOne(
            {
                vereficationToken:code,
                verficationTokenExpiresAt:{$gt: Date.now()},
            }
        )
        if(!user){
            return res.status(400).json({success:false, message: "token you enterd is not valid"})
        }
        user.isVertfied = true;
        user.vereficationToken = undefined;
        user.verficationTokenExpiresAt = undefined;
        await user.save();
        await sendWelcomeEmail(user.email, user.name)
        res.status(200).json({
            success:true,
            message:"email verified :)",
            user:{
                ...user._doc,
                password:undefined,
            },
        })
    } catch (error) {
        console.log("error in verifyEmail ", error);
		res.status(500).json({ success: false, message: "Server error" });
    }
}

export const login = async (req, res) =>{
    res.send("login route");
};

export const logout = async (req, res) =>{
    res.clearCookie("token");
    res.status(200).json({
        success:true,
        message:"logout successfaly :)"
    })
};
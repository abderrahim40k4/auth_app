import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import crypto from "crypto"
import { generatTokenAndSetCookie } from "../utils/generatTokenAndSetCookie.js";
import { sendPasswordResetEmail, sendVerificationEmail, sendWelcomeEmail } from "../mailtrap/emails.js";


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
            }
         })
        
    } catch (error) {
        res.status(400).json({success:false, message: error.message})
    }
};

export const verifyEmail = async (res, req)=> {
    const {verfingCode} = req.body;
    try {
        const user = await User.findOne(
            {
                vereficationToken:verfingCode,
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
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({success: false, message:"invalid information :("})
        }
        const validPassword = await bcryptjs.compare(password, user.password);
        if(!validPassword){
            return res.status(400).json({success: false, message:"invalid information :("})
        }

        generatTokenAndSetCookie(res, user._id);
        user.lastLogin = new Date();
        user.save();
        res.status(201).json({
            success:true,
            message:"login successfuly",
            user:{
                ...user._doc,
                password:undefined,
            }});

    } catch (error) {
        console.log( "error on login ",error.message)
        res.status(400).json({success: false, message: error.message})
    }
};

export const forgetPassword = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({email})
        if(!user){
            res.status(400).json({success:false, message:"user is not exist on db"});
        }

        const resetPasswordToken = crypto.randomBytes(32).toString("hex");
        const resetPasswordTokenExpiredDate = Date.now() + 1 * 60 * 60 * 1000;
        user.resetPasswordToken = resetPasswordToken;
        user.resetPasswordTokenExpritesAt = resetPasswordTokenExpiredDate;

        await user.save();
        await sendPasswordResetEmail(user.email, `${process.env.CLIENT_URL}/reset-password/${resetPasswordToken}`)
    } catch (error) {
        
    }
}

export const resetPassword = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.findOne({email});
        
        
    } catch (error) {
        
    }
}

export const logout = async (req, res) =>{
    res.clearCookie("token");
    res.status(200).json({
        success:true,
        message:"logout successfaly :)"
    })
};
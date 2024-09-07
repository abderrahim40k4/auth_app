import mongoose from "mongoose";

const userSchem = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        default:" "
    },
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    lastLogin:{
        type:Date,
        default:Date.now,
    },
    isVertfied:{
        type:Boolean,
        default:false,
    },
    resetPasswordToken: String,
    resetPasswordTokenExpritesAt:Date,
    vereficationToken:String,
    verficationTokenExpiresAt:Date,
}, {timeseries: true});

export const User = mongoose.model('User', userSchem)
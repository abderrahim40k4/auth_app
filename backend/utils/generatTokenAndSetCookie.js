import jwt from "jsonwebtoken"; 
export const generatTokenAndSetCookie = ( res, userId) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn:"2d",});

    res.cookie("authToken", token, {
        httpOnly:true,
        secure: process.env.NODE_ENV === "prodaction",
        sameSite:"strict",
        maxAge: 2 + 24 * 60 * 60 * 1000

    })

    return token
}
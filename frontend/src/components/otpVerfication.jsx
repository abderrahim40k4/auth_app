import React from 'react'
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";



const OTPVerfication = ({title}) => {

    const [code, setCode] = useState(["", "", "", "", "", "", "",""]);
	const inputRefs = useRef([]);
	const navigate = useNavigate();


    const handleSubmit = async (e) => {
		e.preventDefault();
		const verificationCode = code.join("");
		try {
			await verifyEmail(verificationCode);
			navigate("/");
			toast.success("Email verified successfully");
		} catch (error) {
			console.log(error);
		}
	};


    useEffect(() => {
		if (code.every((digit) => digit !== "")) {
			handleSubmit(new Event("submit"));
		}
	}, [code]);

    return (
        <div>
            <div>
                <Card className="max-w-md w-full bg-gray-800 bg-opacity-10 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
                    <CardHeader className="inline-flex justify-center items-center text-center w-full">
                        <CardTitle className="text-center w-full text-4xl text-blue-500 font-bold">{title}</CardTitle>
                        <CardDescription className="w-full font-bold text-gray-300 text-sm ">Enter the code verfiction you recived from Email</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <InputOTP maxLength={8} 
                        >
                            <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                            </InputOTPGroup>
                            <InputOTPSeparator />
                            <InputOTPGroup>
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                                <InputOTPSlot index={6} />
                                <InputOTPSlot index={7} />
                            </InputOTPGroup>
                        </InputOTP>
                        <Button className="w-full bg-blue-500 bottom-10 my-11" type="submit">Submit</Button>
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}

export default OTPVerfication
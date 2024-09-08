import React, { useState } from 'react'
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Lock, Mail, User } from "lucide-react";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import InputFaild from '@/components/InputFaild.jsx'

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import PasswordStrengthMeter from "../components/PasswordStrengthMeter";

const SignUpPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='max-w-md w-full bg-gray-800 bg-opacity-10 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden'
        >
            <Card className="max-w-md w-full bg-gray-800 bg-opacity-10 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
                <CardHeader className="inline-flex justify-center items-center text-center w-full">
                    <CardTitle className="text-center w-full text-4xl text-blue-500 font-bold">Sign Up</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form>
                        <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); /* handleSignUp logic */ }}>
                            <FormItem>
                                
                                <FormControl>
                                    <InputFaild 
                                        value={name} 
                                        onChange={(e) => setName(e.target.value)} 
                                        placeholder={"User name"} 
                                        icon={User}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>

                            <FormItem>
                                
                                <FormControl>
                                    <InputFaild 
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)} 
                                        placeholder={"User email"} 
                                        icon={Mail}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>

                            <FormItem>
                                
                                <FormControl>
                                    <InputFaild 
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)} 
                                        placeholder={"User Password"} 
                                        icon={Lock}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            {/* {error && <p className='text-red-500 font-semibold mt-2'>{error}</p>} */}
                            <PasswordStrengthMeter password={password} />
                            <Button type="submit" className="w-full bg-blue-500">Submit</Button>
                        </form>
                    </Form>

                    <div className='px-8 py-4 bg-gray-800 bg-opacity-50 flex justify-center'>
                        <p className='text-sm text-gray-400'>
                            Already have an account?{" "}
                            <Link to={"/log-in"} className='text-blue-400 hover:underline'>
                                Login
                            </Link>
                        </p>
                    </div>
                </CardContent>
                <CardFooter />
            </Card>
        </motion.div>
    )
}

export default SignUpPage;

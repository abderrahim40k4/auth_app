
import React from 'react'
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Loader, Lock, Mail, User } from "lucide-react";
import { useState } from 'react';

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import InputFaild from "@/components/InputFaild.jsx"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"


const ResetPasswordPage = () => {
    const [password, setPassword] = useState("123");
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='max-w-md w-full bg-gray-800 bg-opacity-10 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl 
    overflow-hidden'
        >
            <Card className="max-w-md w-full bg-gray-800 bg-opacity-10 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl 
    overflow-hidden'
">
                <CardHeader className="inline-flex justify-center items-center text-center w-full">
                    <CardTitle className="text-center w-full text-4xl text-blue-500 font-bold">Log In</CardTitle>
                </CardHeader>
                <CardContent>
                <Form>
                        <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); /* handleSignUp logic */ }}>

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
                            
                            <Button type="submit" className="w-full bg-blue-500"><Link to={"/email-verification"}>Submit</Link></Button>
                        </form>
                    </Form>

                </CardContent>
                <CardFooter>
                </CardFooter>
            </Card>
        </motion.div>
    )
}

export default ResetPasswordPage
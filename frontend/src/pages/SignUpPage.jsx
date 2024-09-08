import React from 'react'
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Loader, Lock, Mail, User } from "lucide-react";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import InputFaild from '@/components/InputFaild.jsx'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    useremail: z.string().min(2, {
        message: "useremail must be at least 2 characters.",
    }),
    userpassword: z.string().min(2, {
        message: "userpassword must be at least 2 characters.",
    }),
})



const SignUpPage = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            useremail: "",
            userpasssword: "",
        },
    })
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
                    <CardTitle className="text-center w-full text-4xl text-blue-500 font-bold">LOG IN</CardTitle>
                </CardHeader>
                <CardContent>

                    <Form {...form}>
                        <form className="space-y-8">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <InputFaild placeholder={"User Email"} icon={Mail}></InputFaild>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="useremail"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <InputFaild placeholder={"User Name"} icon={User}></InputFaild>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="userpassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <InputFaild placeholder={"User Password"} icon={Lock}></InputFaild>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full bg-blue-500">Submit</Button>
                        </form>
                    </Form>
                    <div className='px-8 py-4 bg-gray-800 bg-opacity-50 flex justify-center'>
                        <p className='text-sm text-gray-400'>
                            Already have an account?{" "}
                            <Link to={"/login"} className='text-blue-400 hover:underline'>
                                Login
                            </Link>
                        </p>
                    </div>

                </CardContent>
                <CardFooter>
                </CardFooter>
            </Card>
        </motion.div>
    )
}

export default SignUpPage
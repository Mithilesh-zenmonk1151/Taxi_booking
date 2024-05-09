"use client"
import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import style from "@/app/ui/home.module.css"
import InputFieldCompo from '@/components/inputField/InputFiekldCompo'
import Buttons from '@/components/button/ButtonCompo'
import { useAppDispatch } from '@/store/hooks'
import { loginUsers } from '@/redux/auth/authAction'
import Link from 'next/link'

export default function LoginPage() {
  
    const dispatch=useAppDispatch();
    const [email,setEmail]= useState("");
    const [password,setPassword]=useState("");
    const user={email,password};
    const handleOnclick=()=>{
        console.log("User=========",user);
        dispatch(loginUsers(user))


    }
  return (
    <Box className={style.signup}>
        <Box  className={style.signupbody}>
            <h1 className={style.headingS}>Login </h1>
            <InputFieldCompo  placeholder='Enter email here' value={email} label='Email' type='email' name='email' nameT='email'  setValue={setEmail} />
            <InputFieldCompo  placeholder='enter password here' value={password} label='Password' type='password' name='password' nameT='password'  setValue={setPassword} />
            <Buttons text='Login' handleOnClick={handleOnclick}/>
            <Link href="/signup">Visit Signup Page </Link>
        </Box>

    </Box>
  )
}

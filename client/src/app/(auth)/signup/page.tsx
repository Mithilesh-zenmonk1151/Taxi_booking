"use client"
import { Box } from '@mui/material'
import React, { useState } from 'react'
import style from "@/app/ui/home.module.css"
import InputFieldCompo from '@/components/inputField/InputFiekldCompo'
import Buttons from '@/components/button/ButtonCompo'

export default function SignupPage() {
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const handleOnClick=()=>{
        console.log("consoldmdmd",firstName,lastName,email,password,confirmPassword);
    }

     
  return (
    <Box className={style.signup}>
       <Box className={style.signupbody}>
        <h1 className={style.headingS}>Signup</h1>
        <InputFieldCompo placeholder='Enter your first name' value={firstName} label='Firstname' type='text' name='firstName' nameT='firstNamer' customClassName='' setValue={setFirstName}/>
        <InputFieldCompo placeholder='Enter your last name' value={lastName} label="Lastname" type='text' name='lastName' nameT='lastName' customClassName='' setValue={setLastName}/>
        <InputFieldCompo placeholder='Enter your email here' value={email} label='Email' type='email' name='email' nameT='email' customClassName='' setValue={setEmail}/>
        <InputFieldCompo placeholder='Enter Password eg:-abc@22' value={password} label='Password' type='password' name='password' nameT='password' customClassName='' setValue={setPassword}/>
        <InputFieldCompo placeholder='Confirm password' value={confirmPassword} label='Confirmpassword' type='text' name='confirmPassword' nameT='confirmPassword' customClassName='' setValue={setConfirmPassword}/>
        <Buttons handleOnClick={handleOnClick} classNameBtn={style.btnS} text='Sign Up'/>
       </Box>

    </Box>
  )
}

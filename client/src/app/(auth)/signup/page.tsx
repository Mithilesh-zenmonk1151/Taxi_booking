"use client"
import { Box } from '@mui/material'
import React, { useState } from 'react'
import style from "@/app/ui/home.module.css"
import InputFieldCompo from '@/components/inputField/InputFiekldCompo'
import Buttons from '@/components/button/ButtonCompo'
import { useAppDispatch } from '@/store/hooks'
import { registerUsers } from '@/redux/auth/authAction'
import SelectMenu from '@/components/select/SelectMenu'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function SignupPage() {
  const router= useRouter();
  const img = require("../../../../public/images/Landing.jpg");
  const styling = {
    backgroundImage: `url('${img}')`,
    width:"100%",
    height:"100%"
}
  const dispatch= useAppDispatch();
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const [role,setRole]= useState("");
    const user={firstName,lastName,email,password,confirmPassword,role};

    const handleOnClick=()=>{
        console.log("consoldmdmd",firstName,lastName,email,password,confirmPassword);
        try{
          console.log("USSSSEEERRR===",user);
          dispatch(registerUsers(user));


        }
        catch(error){
          console.log("error come while we are going to register new user");
        }
    }

     
  return (
    <Box className={style.signup} style={styling}>
       <Box className={style.mainsignupbody}>
        <Box className={style.leftsignupbody} >
           
        </Box>
       <Box className={style.signupbody}>
        <h1 className={style.headingS}>Signup</h1>
        <InputFieldCompo placeholder='Enter your first name' value={firstName} label='Firstname' type='text' name='firstName' nameT='firstNamer' customClassName='' setValue={setFirstName}/>
        <InputFieldCompo placeholder='Enter your last name' value={lastName} label="Lastname" type='text' name='lastName' nameT='lastName' customClassName='' setValue={setLastName}/>
        <InputFieldCompo placeholder='Enter your email here' value={email} label='Email' type='email' name='email' nameT='email' customClassName='' setValue={setEmail}/>
        <InputFieldCompo placeholder='Enter Password eg:-abc@22' value={password} label='Password' type='password' name='password' nameT='password' customClassName='' setValue={setPassword}/>
        <InputFieldCompo placeholder='Confirm password' value={confirmPassword} label='Confirmpassword' type='text' name='confirmPassword' nameT='confirmPassword' customClassName='' setValue={setConfirmPassword}/>
        <SelectMenu label='role' text="Role" value={role} setValue={setRole} value1='Owner' text1='Owner' value2='User' text2='Customer' value3='Admin' text3='Admin'/>
        <Buttons handleOnClick={handleOnClick} classNameBtn={style.btnS} text='Sign Up'/>

        <Link href="/login">Visit Login Page </Link>
       </Box>

       </Box>

    </Box>
  )
}

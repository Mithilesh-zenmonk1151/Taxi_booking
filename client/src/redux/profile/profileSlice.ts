import { createAsyncThunk } from '@reduxjs/toolkit'
import { getProfileType, updateProfileType } from './profileType'
import type {FieldValues} from "react-hook-form";
import registerService  from '@/services/authServices/signupservice';
import loginService from '@/services/authServices/loginservice';
export const registerUsers = createAsyncThunk(getProfileType, async(user:{firstName:string,lastName:string,email:string,password:string,confirmPassword:string,role:string}, {rejectWithValue}) => {
    try {
        console.log("Slice wala user During signup",user);
        console.log("Hello world")
      
        const response = await registerService({email:user.email,password:user.password, firstName:user.firstName,role:user.role,lastName:user.lastName,confirmPasswword:user.confirmPassword})
        const data = response?.data
        console.log(data)
        return data
    } catch (err) {
        console.log(err)
        return rejectWithValue(err)
    }
})
export const loginUsers = createAsyncThunk(updateProfileType, async (user:{email:string,password:string}, {rejectWithValue}) => {
    try{
        console.log("SSSLICCCEEEE UUSSERRS",user)
        const response = await loginService({email:user.email,password:user.password})
        const data = await response.data
        // console.log(data)
        
        const token=data?.loginData?.token
        localStorage.setItem("logged", "true");
        localStorage.setItem("token", token);
    
        console.log("data Loggin wala data tTTTToken ke liye",token)
      
        return data
    }catch(err) {
        console.log(err)
        return rejectWithValue(err)
    }
})











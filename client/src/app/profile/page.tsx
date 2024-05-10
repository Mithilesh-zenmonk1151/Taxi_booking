"use client"
import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import axios from "axios"
import toast from "react-hot-toast";
import { useRouter } from 'next/navigation';
import TagInput from '@/components/tag/TagInput';
import { useAppSelector } from '@/store/hooks';
export default function ProfilePage() {

  const router = useRouter();
  const logOut=async()=>{
    try{
      await axios.get("/api/auth/logout");
      toast.success("Logout successful");
      router.push("/login")
    }
    catch(error:any){
      console.log(error.message);
      toast.error(error.message)

    }}
   
    const states= useAppSelector((state)=>state.auth?.content?.loginData?.response?.user);
    console.log("states========",states);
  return (
   <Box>
    <Button className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={logOut}>Logout</Button>
    
   </Box>
  )
}

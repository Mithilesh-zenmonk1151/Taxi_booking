import { createAsyncThunk } from "@reduxjs/toolkit";
import { createCarType, getCarType } from "./carType";
import type { FieldValues } from "react-hook-form";
import addCarService from "@/services/carService/addnewcarservice";
// import getTestsService from "@/services/test/gettestservice";
import fetchCars from "@/services/carService/getcarservice";
// import loginService from "@/service/Auth/register.service";
export const addcar = createAsyncThunk(
 createCarType,
  async (car:{name:string, userId:number,price:number, model:string, launchYear: string,color:string,features:string,vehicalNumber:string,rented:boolean,approved:boolean, allowedCity: string[]}, { rejectWithValue }) => {
    try {
      // console.log("Slice wala teststssss",test);
      const response = await addCarService(car);
      const data = response?.data;
      console.log("data car added from slice===",data);
      return data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);

export const getCars = createAsyncThunk(
  getCarType,
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchCars();
      return response;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);

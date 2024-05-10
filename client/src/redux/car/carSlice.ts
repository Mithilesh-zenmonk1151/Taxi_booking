import { createSlice } from '@reduxjs/toolkit'
import { addcar } from './carAction';
// import { , getTests } from './testAction';
// import {addCar}

export type tests = {
    id: string,
   name:string,
   userId: string;
   model:string;
   launchYear:string;
   color:string;
   features:string;
   price:number;
   vehicalNumber:string;
   rented:boolean;
   approved:boolean;
   allowedCity: string[];




}

type initialStateProps = {
    isLoading: boolean;
    content: {
        id:string
        name: string;
        userId: string;
        model:string;
        launchYear:string;
        color:string;
        features:string;
        price:number;
        vehicalNumber:string;
        rented:boolean;
        approved:boolean;
        allowedCity: string[];
    }[] 
    error: Object | null;
  };

  const initialState: initialStateProps = {
    isLoading: false,
    error: null,
    content: [{
        name: "",
        userId: "",
        id:"",
        model:"",
        launchYear:"",
        color:"",
        features:"",
        price:0,
        vehicalNumber:"",
        rented:false,
        approved:false,
        allowedCity: [] 






    }],
  };

export const testSlice = createSlice({
    name: 'tests',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTests.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getTests.fulfilled, (state, action) => {
            state.isLoading = false
            state.content = action.payload
            // console.log("Test action Payload",action.payload);
        })
        builder.addCase(getTests.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
            state.content = []
        })
        builder.addCase(addcar.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(addcar.fulfilled, (state, action) => {
            state.isLoading = false
            state.content = [...state.content, action.payload]
        })
        builder.addCase(addcar.rejected, (state, action) => {
            state.isLoading = false
            state.content = []
            state.error = action.error
        })

        // builder.addCase(updateQuestion.pending, (state) => {
        //     state.isLoading = true
        // })
        // builder.addCase(updateQuestion.fulfilled, (state, action) => {
        //     state.isLoading = false

        //     state.content = state.content.map((question) => {

        // })
        // builder.addCase(updateQuestion.rejected, (state, action) => {
        //     state.isLoading = false
        //     state.error = action.error
        // })

    }
})

export default testSlice.reducer
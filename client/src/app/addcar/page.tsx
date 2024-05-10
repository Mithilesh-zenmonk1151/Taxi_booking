"use client";
import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
// import TextFieldCompo from '../../../../component/textField/TextFieldCompo'
// import "./AddProductMain.css"
import Buttons from "@/components/button/ButtonCompo";
import InputFieldCompo from "@/components/inputField/InputFiekldCompo";
import InputFieldCompoNum from "@/components/inputField/InputFieldCompoNum";
import TagInput from "@/components/tag/TagInput";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useAmp } from "next/amp";
import { addcar } from "@/redux/car/carAction";
import toast from "react-hot-toast";
// import { DropzoneArea } from 'material-ui-dropzone';
// import DragDrop from '../../../../component/dragDrop/DargDrop';
// import Buttons from '../../../../component/button/Button';
// import Progressbar from '../../../../component/progressBar/Progressbar';

function AddCar() {
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [launchYear, setLaunchYear] = useState("");
  const [color, setColor] = useState("");
  const [features, setFeatures] = useState("");
  const dispatch= useAppDispatch();
  // const [price, setPrice]= useState(0);
  const [vehicalNumber, setVehicalNumber] = useState("");
  // const [allowedCity,setAllowedCity]= useState([]);

  const [allowedCity, setAllowedCity] = useState<string[]>([]);
  const handleTagAdd = (tag: string) => {
    setAllowedCity([...allowedCity, tag]);
  };
  const [price, setPrice] = useState<number | undefined>(undefined); // State to hold number value

  const handleNumberChange = (value: number) => {
    setPrice(value);
  };
  const userId= useAppSelector((state)=>state.auth?.content?.loginData?.response?.user.id);
  console.log("userId====",userId)
  const handleTagDelete = (index: number) => {
    const updatedTags = [...allowedCity];
    updatedTags.splice(index, 1);
    setAllowedCity(updatedTags);
  };

  const car = {
    name,
    model,
    launchYear,
    color,
    features,
    vehicalNumber,
    allowedCity,
    price,
    userId
  };
  const handleOnClick = () => {
    console.log("CAR=========", car);
     try{
      dispatch(addcar(car));
      toast.success("car Added Successfully")


     }
     catch(error){
      console.log(error);
      console.log("Car is not added ")


     }
  };
  return (
    <Stack
      sx={{
        display: "grid",
        gridTemplateColumns: "auto auto",
        gap: "60px",
        paddingTop: "45px",
        bgcolor: "#ffffff",
        width: "1108px",
        position: "relative",
        left: "40px",
        top: "71px",
        borderRadius: "16px",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          paddingLeft: "16px",
        }}
      >
        <InputFieldCompo
          placeholder="car name eg:- alto"
          label="Car Name"
          name=""
          nameT=""
          value={name}
          type="text"
          customClassName="custom-class"
          setValue={setName}
        />
        <InputFieldCompo
          placeholder="Model name"
          value={model}
          label="Car Model"
          type="text"
          customClassName="custom-class"
          setValue={setModel}
        />
        <InputFieldCompo
          placeholder="launch year eg:- 2023"
          label="Launch year"
          value={launchYear}
          type="text"
          customClassName="custom-class"
          setValue={setLaunchYear}
        />
        <InputFieldCompo
          placeholder="Features :-"
          label="Features "
          setValue={setFeatures}
          value={features}
          type="text"
          customClassName="custom-class"
        />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "auto auto",
            gap: "20px",
          }}
        >
          <InputFieldCompo
            placeholder="color eg:-blue"
            label="Color"
            value={color}
            type="text"
            setValue={setColor}
            customClassName="custom-class"
          />
          <InputFieldCompo
            placeholder="vehical number eg:- CH01R2324"
            label="Vehical number"
            value={vehicalNumber}
            type="text"
            setValue={setVehicalNumber}
            customClassName="custom-class"
          />

          <InputFieldCompoNum
            value={price}
            placeholder="Enter per day rent"
            label="Rent price"
            type="number"
            handleOnChange={handleNumberChange}
          />
          {/* // />      <InputFieldCompo placeholder='dfgiof' setValue={} value='' label='SKU' type='text' customClassName='custom-class'/> */}
          {/* <InputFieldCompo placeholder='gdufds' setValue={} value='' label='Stock Quantity' type='text' customClassName='custom-class'/>
     <InputFieldCompo placeholder='sfhortgj'setValue={} value='' label='Regular Price' type='text' customClassName='custom-class'/>
     <InputFieldCompo placeholder='mckjsdfg' setValue={} value='' label='Sale Price' type='text' customClassName='custom-class'/> */}
        </Box>
        <Box>
          <h1>Allowed City</h1>
          <TagInput
            placeholder="enter cities"
            tags={allowedCity}
            onTagAdd={handleTagAdd}
            onTagDelete={handleTagDelete}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        <Box
          sx={{
            bgcolor: "#c8c8c8",
            height: "428px",
            width: "441px",
          }}
        ></Box>
        <Box>
          <Typography>Car Gallery</Typography>
          {/* <DragDrop/> */}
        </Box>
        {/* <Progressbar/>
        <Progressbar/>
        <Progressbar/> */}
      </Box>
      <Buttons text="Add car" handleOnClick={handleOnClick} />
    </Stack>
  );
}

export default AddCar;

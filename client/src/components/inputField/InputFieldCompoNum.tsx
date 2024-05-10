import { Paper, Stack, TextField } from '@mui/material'
import React from 'react'
import { ChangeEvent } from 'react';

type TextFieldProps={
  placeholder?: string,
  value?: number,
  label?: string, // Changed to lowercase as per React conventions
  type?: string, 
  name?:string,
  nameT?:string,// Changed to lowercase as per React conventions
  customClassName?: string,
//   handleOnChange?: React.ChangeEvent<HTMLInputElement>,
  setValue?: (value: number ) => void,
  handleOnChange?: (value: number) => void;
}

function InputFieldCompoNum(props: TextFieldProps) {
  const { value,handleOnChange, placeholder, label, type, customClassName,name, nameT, setValue } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value); // Parse input value to a float
    if (!isNaN(newValue) && handleOnChange) { // Ensure newValue is a valid number
      handleOnChange(newValue);
    }
  };

  return (
    <Stack sx={{ marginTop: "22px" }}>
      <label className='label-input'  htmlFor={name}>{label}</label>
      <TextField
         type={type || "text"} // Set default type to text
         value={value !== undefined ? value : ''} // Provide default empty string value if value is undefined
         placeholder={placeholder}
         className={customClassName}
         name={name}
         onChange={handleChange}
        sx={{
          paddingTop: "14px",
          color: "white"
        }}
      />
    </Stack>
  );
}

export default InputFieldCompoNum;

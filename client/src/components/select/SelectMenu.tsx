import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
type SelectProps={
    value1?:string,
    value2?:string,
    value3?:string,
    text1?:string,
    text2?:string,
    text3?:string,
    value?:string,
    label?:string,
    text?:string,
    setValue?: (value: string) => void,
    handleOnChange?: React.ChangeEvent<HTMLInputElement>,
    
}

export default function SelectMenu(props:SelectProps) {
    const {label,value1,value2,value3,text1,text2,text3,setValue,value,text}=props

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (setValue) {
      setValue(event.target.value);
    }
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{text}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
        >
          <MenuItem value={value1}>{text1}</MenuItem>
          <MenuItem value={value2}>{text2}</MenuItem>
          <MenuItem value={value3}>{text3}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

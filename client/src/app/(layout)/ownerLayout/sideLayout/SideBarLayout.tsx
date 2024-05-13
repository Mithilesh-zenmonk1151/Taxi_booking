import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import easeLogo from "../../assets/easelogoo.jpg";
// import "./sidebar.css"
import Buttons from "@/components/button/ButtonCompo";
import DashboardIcon from '@mui/icons-material/Dashboard';
import DropDown from "@/components/dropDown/DropDown";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

import SettingsIcon from '@mui/icons-material/Settings';
// import { useNavigate } from "react-router-dom";

function SidebarLayout() {
   

  function handleOnClick(){
  }
  return (
    <Stack sx={{
      width:"20%",
      gap:"50px",
      bgcolor:"#ffffff",
      paddingLeft:"45px"
       

    }}>
      <Box sx={{
        display:"flex",
        gap:"10px",
        marginLeft:"38px"
       

      }}>
     
       
          {/* <img src={easeLogo} alt="logoEase" className="sidebar-logo" /> */}
       
        <Typography sx={{
            fontFamily:"sans-serif",
            fontWeight:"900",
            fontSize:"23px"
        }}>Flight Ease</Typography>
      </Box>
       <Box sx={{
        width:"100%"
        
       }}>
        <Box sx={{
          display:"flex",
          flexDirection:"column",
          position:"relative",
          left:"30px",
          gap:"20px",
          width:"268px",

           
        }}>
        <Buttons src={<DashboardIcon/>} text="Dashboard"/>
        {/* <Buttons/>
        <Buttons/> */}
        <DropDown src={<AssignmentTurnedInIcon/>} text="All tickets" option1Logo={<OpenInNewIcon/>} option2Logo={<EventAvailableIcon/>} option3Logo={<HighlightOffIcon/>} option1="hello" option2="hello2" option3="hee3" />
        <DropDown text="Chatbots" src={<ChatBubbleOutlineIcon/>}  option1="Create a Chatbot" option1Logo={<AddIcon/>} />
        <Buttons text="Orders" src={<ListAltIcon/>}/>
        <Buttons  text="Customers" src={<SupervisorAccountIcon/>}/>
        <Buttons src={<SettingsIcon/>} text="Settings" handleOnClick={handleOnClick} />
        <Buttons src={<LogoutIcon/>} text="Log out"/>
        </Box>
       </Box>
    </Stack>
  );
}

export default SidebarLayout;
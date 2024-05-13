import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AddIcon from '@mui/icons-material/Add';
import { Box } from "@mui/material";
type CardProps = {
  src?: string;
  title?: string;
  price?: string;
  body?: string;
  quantity?: string;
};
export default function CardComponent(props: CardProps) {
  const { src, title, price, body, quantity } = props;
  return (
    <Box> <Box sx={{
     bgcolor:"red",
     position:"relative",

    }}><AddIcon sx={{
      position:"absolute",
      
      top:"0px",
      right:"-1px",
      bgcolor:"white",
      height:"36px",
      width:"36px",
      borderRadius:"18px"
    }}/></Box>
    <Card sx={{ height: "252px", width: "138px", borderRadius: "12px" }}>
    

      <CardMedia sx={{ height: "138px", maxWidth: "138px" }} image={src} />
      <CardContent sx={{
        display:"flex",
        flexDirection:"column",
        textAlign:"inline",
        justifyContent:"inline"
      }}>

        <Typography  component="div" sx={{
          fontSize:"15px",
          fontFamily:"Roboto",
          fontWeight:"600"
        }}>
          ${price}
        </Typography>
        <Typography component="p">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      <Typography sx={{
        paddingTop:"0px",
        fontSize:"12px",
        fontFamily:"Roboto",
        ml:"16px"

      }}>{quantity}</Typography>
      <CardActions></CardActions>
    </Card>
    </Box>
  );
}
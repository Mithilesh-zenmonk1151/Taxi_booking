"use client"
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
type DropDown = {
  option1?: string;
  option2?: string;
  option3?: string;
  option4?: string;
  option5?: string;
  option1Logo?: React.ReactElement;
  option2Logo?: React.ReactElement;
  option3Logo?: React.ReactElement;
  option4Logo?: React.ReactElement;
  option5Logo?: React.ReactElement;
  src?: React.ReactElement;
  text?: string;
  customClassName?: string;
};
export default function DropDown(props: DropDown) {
  const {
    src,
    text,
    option1,
    option2,
    option3,
    option4,
    option5,
    option1Logo,
    option2Logo,
    option3Logo,
    option4Logo,
    option5Logo,
    customClassName,
  } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          textTransform: "none",
          color: "black",
          position: "relative",
        }}
        className={customClassName}
      >
        {src}
        {text}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          position: "absolute",
        }}
      >
        <MenuItem onClick={handleClose} disableRipple>
          {option1Logo}
          {option1}
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          {option2Logo}
          {option2}
        </MenuItem>

        <MenuItem onClick={handleClose} disableRipple>
          {option3Logo}
          {option3}
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          {option4Logo}
          {option4}
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          {option5Logo}
          {option5}
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
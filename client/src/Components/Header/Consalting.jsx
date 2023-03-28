import React from "react";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Consalting = ({ handleCloseSecondMenu, anchorElSecond }) => {

    // open second tab
    /*  const [anchorElSecond, setAnchorElSecond] = React.useState(null);
 
     const handleOpenSecondMenu = (event) => {
         if (anchorElSecond !== null) return;
         setAnchorElSecond(event.currentTarget);
     };
     const handleCloseSecondMenu = () => {
         handleCloseServiceMenu();
         setAnchorElSecond(null);
     }; */

    //open third tab
    /*  const [anchorElThird, setAnchorElThird] = React.useState(null);
 
     const handleOpenThirdMenu = (event) => {
         if (anchorElThird !== null) return;
         setAnchorElThird(event.currentTarget);
     };
     const handleCloseThirdMenu = () => {
         handleCloseServiceMenu();
         setAnchorElThird(null);
     }; */

    return (
        <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar1"
            anchorEl={anchorElSecond}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            open={Boolean(anchorElSecond)}
            onClose={handleCloseSecondMenu}
        >
            <MenuItem onClick={handleCloseSecondMenu}>
                <Typography textAlign="center" >Second </Typography>
            </MenuItem>
        </Menu>
    )
};


export default Consalting;
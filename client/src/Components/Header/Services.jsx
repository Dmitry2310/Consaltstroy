import React from "react";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CustomerService from "./CustomerService"
import Consalting from "./Consalting";

const Services = ({ handleCloseServiceMenu, handleOpenServiceMenu, anchorElService }) => {

    // open first tab
    const [anchorElFirst, setAnchorElFirst] = React.useState(null);

    const handleOpenFirstMenu = (event) => {
        if (anchorElFirst !== null) return;
        setAnchorElFirst(event.currentTarget);
    };
    const handleCloseFirstMenu = () => {
        handleCloseServiceMenu();
        setAnchorElFirst(null);
    };

    // open second tab
    const [anchorElSecond, setAnchorElSecond] = React.useState(null);

    const handleOpenSecondMenu = (event) => {
        if (anchorElSecond !== null) return;
        setAnchorElSecond(event.currentTarget);
    };
    const handleCloseSecondMenu = () => {
        handleCloseServiceMenu();
        setAnchorElSecond(null);
    };

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
        <Box>
            <Button onClick={handleOpenServiceMenu} sx={{ my: 2, color: 'white', marginLeft: '35%' }}> {/* SERVICES TABLE */}
                услуги
                <ArrowDropDown color='secondary' sx={{ width: '40px' }} />
            </Button>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElService}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElService)}
                onClose={handleCloseServiceMenu}
            >
                <MenuItem onClick={handleOpenFirstMenu} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography textAlign="center">Услуги технического заказчика</Typography>
                    <ChevronRightIcon color="secondary" />
                    <CustomerService anchorElFirst={anchorElFirst} handleCloseFirstMenu={handleCloseFirstMenu} />
                </MenuItem>
                <MenuItem onClick={handleCloseServiceMenu}>
                    <Typography textAlign="center" >Независимая экспертиза сметной документации</Typography>
                </MenuItem>
                <MenuItem onClick={handleOpenSecondMenu} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography textAlign="center" >Сметный консалтинг</Typography>
                    <ChevronRightIcon color="secondary" />
                    <Consalting anchorElSecond={anchorElSecond} handleCloseSecondMenu={handleCloseSecondMenu}/>
                </MenuItem>
                <MenuItem onClick={handleCloseServiceMenu}>
                    <Typography textAlign="center" >Финансово-технический аудит</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseServiceMenu} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography textAlign="center" >Составление сметной документации</Typography>
                    <ChevronRightIcon color="secondary" />
                </MenuItem>
            </Menu>
        </Box>
    )
}

export default Services;
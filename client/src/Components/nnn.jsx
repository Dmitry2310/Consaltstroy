import React from "react";
import { themeColorNew } from "../App";
import Logo from './../assets/Images/Logo.png'

import { ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const pages = ['Главная', 'О Компании', 'Контакты'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Nnn = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElService, setAnchorElService] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenServiceMenu = (event) => {
        setAnchorElService(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseServiceMenu = () => {
        setAnchorElService(null);
    };

    return (
        <ThemeProvider theme={themeColorNew} >
            <Button variant="contained" color="secondary">dddfdf</Button>
        </ThemeProvider>
    )
}

export default Nnn;
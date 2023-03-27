import React from "react";
import Logo from './../assets/Images/Logo.png'
import { useDispatch } from "react-redux";

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
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = ({ scrollEffect, homeOnClickRef, aboutOnClickRef, contactOnClickRef }) => {

    const dispatch = useDispatch();

    const pages = [
        {
            page: 'Главная',
            name: 'home'
        },
        {
            page: 'О Компании',
            name: 'about'
        },
        { 
            page: 'Контакты',
            name: 'contact'
        }];

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElService, setAnchorElService] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenServiceMenu = (event) => {
        setAnchorElService(event.currentTarget);
    };

    const handleCloseNavMenu = (e) => {
        console.log(e.currentTarget)
        dispatch({type: "GO_TO", payload: e.currentTarget.name});
        setAnchorElNav(null);
    };

    const handleCloseServiceMenu = () => {
        setAnchorElService(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ position: 'absolute', top: '0', left: '0', display: { xs: 'none', md: 'flex' } }}>
                        <img alt="Logo" src={Logo} style={{ width: '120px', zIndex: '1' }} /> {/* ICON TABLE*/}
                    </Box>

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            opacity: '0'
                        }}
                    >
                        LOGO
                    </Typography>  {/* ICON TEXT TABLE*/}

                    <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}> {/* MOBILE ICON LIST */}
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.page} name={page.name} onClick={(e) => handleCloseNavMenu(e)}>
                                    <Typography textAlign="center">{page.page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, justifyContent: 'center', marginLeft: '15%' }}>
                        <img alt="Logo" src={Logo} style={{ width: '80px', margin: '6px 0 0 0' }} />    {/* MOBILE ICON MIDDLE*/}
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>  {/* TABLE LIST PAGE */}
                        {pages.map((page) => (
                            <Button
                                key={page.page}
                                name={page.name}
                                onClick={(e) => handleCloseNavMenu(e)}
                                sx={{ color: 'white', display: 'block', marginLeft: '7%' }}
                            >
                                {page.page}
                            </Button>
                        ))}
                        <Box >
                            <Button onClick={handleOpenServiceMenu} sx={{ my: 2, color: 'white', marginLeft: '35%' }}>
                                услуги
                                <ArrowDropDown sx={{ width: '40px' }} />
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
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseServiceMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Box>

                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>    {/* RIGHT ICON LIST*/}
                        <Tooltip title="Услуги Компании">
                            <Button onClick={handleOpenServiceMenu}>
                                <ArrowDropDown sx={{ color: 'white', width: '40px' }} />
                                <Typography size="large" sx={{ color: 'white' }}>услуги</Typography>
                            </Button>
                        </Tooltip>
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
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseServiceMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: '0', display: { xs: 'none', md: 'flex' }, flexDirection: 'column' }}>    {/* RIGHT TABLE CONTACTS*/}
                        <Box sx={{ display: 'flex', gap: '5px', }}>
                            <LocalPhoneIcon sx={{ color: 'white', width: '40px' }} />
                            <Typography variant="body2"> + 7 (999)999-99-99 </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '10px' }}>
                            <MailOutlineIcon sx={{ color: 'white', width: '40px' }} />
                            <Typography variant="body2"> keskonsalt@yandex.ru </Typography>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
    
}

export default Header;
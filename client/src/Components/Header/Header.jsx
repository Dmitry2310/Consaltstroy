import React, { useEffect, useState } from "react";
import Logo from './../../assets/Images/Logo.png'
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Services from "./Services";

const Header = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

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
        },
        {
            page: 'Новости',
            name: 'news'
        },
    ];

    const ancorsName = ['home', 'about', 'contact'];

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [temporaryAncor, setTemporaryAncor] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (e) => {
        if (e.currentTarget?.name === 'news') {
            navigate('/news');
            setAnchorElNav(null);
            return;
        }
        if (location.pathname !== '/home' && ancorsName.includes(e.currentTarget?.name)) {
            navigate('/home');
            setTemporaryAncor(e.currentTarget.name);
            setAnchorElNav(null);
        } else {
            dispatch({ type: "SCROLL_TO", payload: e.currentTarget.name });
            setAnchorElNav(null);
        }
    };

    useEffect(() => {
        if (location.pathname === '/home' && temporaryAncor !== null) {
            dispatch({ type: "SCROLL_TO", payload: temporaryAncor });
        } else {
            dispatch({ type: "CLEAR_SCROLL" });
            setTemporaryAncor(null);
        }
    }, [location]);

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ position: 'absolute', top: '0', left: '0', display: { xs: 'none', md: 'flex', cursor: 'pointer' } }} onClick={() => navigate('/home')}>
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
                                <Button
                                    key={page.page}
                                    name={page.name}
                                    onClick={(e) => handleCloseNavMenu(e)}
                                    sx={{ display: 'block' }}
                                >
                                    {page.page}
                                </Button>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, justifyContent: 'center', marginLeft: '15%', cursor: 'pointer' }} onClick={() => navigate('/home')}>
                        <img alt="Logo" src={Logo} style={{ width: '80px', margin: '6px 0 0 0' }} />    {/* MOBILE ICON MIDDLE*/}
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.page}
                                name={page.name}
                                onClick={(e) => handleCloseNavMenu(e)}
                                sx={{ color: 'white', display: 'block', marginLeft: { sm: '4%', lg: '7%' } }}
                            >
                                {page.page}
                            </Button>
                        ))}
                        {location.pathname !== '/info'
                            ?
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <Services />
                            </Box>
                            :
                            null
                        }
                    </Box>

                    <Box sx={{ display: { xs: 'flex', md: 'none', marginRight: '20px' } }}>
                        <Services />
                    </Box>

                    <Box sx={{ flexGrow: '0', display: { xs: 'none', lg: 'flex' }, flexDirection: 'column' }}>    {/* RIGHT TABLE CONTACTS*/}
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
        </AppBar >
    )

}

export default Header;
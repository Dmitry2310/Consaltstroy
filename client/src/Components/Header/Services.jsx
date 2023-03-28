import React, { useState, useEffect, useRef } from "react";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ConsaltMenu from './ConsaltMenu';

const Services = ({ handleCloseServiceMenu, handleOpenServiceMenu, anchorElService }) => {

    let ref = useRef();

    const [dropdown, setDropdown] = useState(false);
    const [menu, setMenu] = useState('');

    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);

    const onMouseEnter = (text) => {
        /* window.innerWidth > 960 && */
        setDropdown(true);
        setMenu(text);
    };

    const onMouseLeave = () => {
        /* window.innerWidth > 960 && */
        setDropdown(false);
        setMenu('');
    };

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
                <MenuItem ref={ref} onMouseEnter={() => onMouseEnter('services')} onMouseLeave={onMouseLeave} onClick={handleCloseServiceMenu} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography textAlign="center">Услуги технического заказчика</Typography>
                    <ChevronRightIcon color="secondary" />
                    {(dropdown && menu === 'services') ?
                        <Box>
                            <Typography>ret</Typography>
                        </Box>
                        :
                        null
                    }
                </MenuItem>
                <MenuItem onClick={handleCloseServiceMenu}>
                    <Typography textAlign="center" >Независимая экспертиза сметной документации</Typography>
                </MenuItem>
                <MenuItem sx={{ position: 'relative' }} ref={ref} onMouseEnter={() => onMouseEnter('consalt')} onMouseLeave={onMouseLeave} onClick={handleCloseServiceMenu} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography textAlign="center" >Сметный консалтинг</Typography>
                    <ChevronRightIcon color="secondary" />
                    {(dropdown && menu === 'consalt') ?
                        <Box sx={{ position: 'relative', width: '10%' }}>
                            <ConsaltMenu />
                        </Box>

                        :
                        null
                    }
                </MenuItem>
                <MenuItem onClick={handleCloseServiceMenu}>
                    <Typography textAlign="center" >Финансово-технический аудит</Typography>
                </MenuItem>
                <MenuItem ref={ref} onMouseEnter={() => onMouseEnter('documentation')} onMouseLeave={onMouseLeave} onClick={handleCloseServiceMenu} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography textAlign="center" >Составление сметной документации</Typography>
                    <ChevronRightIcon color="secondary" />
                    {(dropdown && menu === 'documentation') ?
                        <Box>
                            <Typography>ret3</Typography>
                        </Box>
                        :
                        null
                    }
                </MenuItem>
            </Menu>
        </Box>
    )
}

export default Services;
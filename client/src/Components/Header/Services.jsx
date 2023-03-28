import React, { useState, useEffect, useRef } from "react";

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ConsaltMenu from './ConsaltMenu';
import Typography from '@mui/material/Typography';
import "./styles.css";

const Services = () => {
    let ref = useRef();

    const [dropdown, setDropdown] = useState(false);
    const [openDropMenu, setOpenDropMenu] = useState(false);
    const [menu, setMenu] = useState('');


    const openMenu = () => {
        setOpenDropMenu(!openDropMenu)
    }

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

    console.log(openDropMenu)

    return (
        <Box sx={{ position: 'relative' }}>
            <Button onClick={openMenu} sx={{ my: 2, color: 'white', marginLeft: '35%' }}> {/* SERVICES TABLE */}
                услуги
                <ArrowDropDown color='secondary' sx={{ width: '40px' }} />
            </Button>
            {openDropMenu ?
                <Box sx={{ display: 'flex', flexDirection: 'column', position: 'absolute', bottom: '-285px', left: '-120px', background: 'white', zIndex: '10', width: '240px', padding: '10px' }}>
                    <Box ref={ref} onMouseEnter={() => onMouseEnter('services')} onMouseLeave={onMouseLeave} className='menuItem' >
                        <Typography color="primary">Услуги технического заказчика</Typography>
                        <ChevronRightIcon color="secondary" />
                    </Box>
                    <Box >
                        <Typography color="primary" className='menuItem'>Независимая экспертиза сметной документации</Typography>
                    </Box>
                    <Box ref={ref} onMouseEnter={() => onMouseEnter('consalt')} onMouseLeave={onMouseLeave} className='menuItem'>
                        <Typography color="primary" >Сметный консалтинг</Typography>
                        <ChevronRightIcon color="secondary" />
                        {dropdown && menu === 'consalt' ?
                            <ConsaltMenu />
                            :
                            null
                        }
                    </Box>
                    <Box >
                        <Typography color="primary" className='menuItem'>Финансово-технический аудит</Typography>
                    </Box>
                    <Box ref={ref} onMouseEnter={() => onMouseEnter('documentation')} onMouseLeave={onMouseLeave} className='menuItem'>
                        <Typography color="primary" >Составление сметной документации</Typography>
                        <ChevronRightIcon color="secondary" />
                    </Box>
                </Box>
                :
                null
            }
        </Box>
    )
}

export default Services;
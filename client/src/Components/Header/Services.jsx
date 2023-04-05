import React, { useState, useEffect, useRef } from "react";
import ConsaltMenu from './ConsaltMenu';
import CreateDocMenu from './CreateDocMenu';
import TechCustomerMenu from './TechCustomerMenu';
import "./styles.css";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Typography from '@mui/material/Typography';


const Services = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [openDropMenu, setOpenDropMenu] = useState(false);
    const [menu, setMenu] = useState('');

    const openMenu = () => {
        setOpenDropMenu(!openDropMenu)
    }

    const onMouseEnter = (text) => {
        setMenu(text);
    };

    const onMouseLeave = () => {
        setMenu('');
    };

    // listen click outside dropmenu
    let ref = useRef();

    const handleClick = (e) => {

        if (openDropMenu && !ref.current.contains(e.target))
            setOpenDropMenu(false);
        else {
            return;
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClick);

        return function () {
            document.removeEventListener("click", handleClick);
        };
    });
    // END listen click outside dropmenu

    // navigate to information page
    const goToInfoPage = (page) => {
        navigate('/info');
        dispatch({ type: 'GO_TO_PAGE', payload: page });
        setOpenDropMenu(false);
        setMenu('');
    }
    // END navigate to information page

    return (
        <Box ref={ref} sx={{ position: 'relative' }}>
            <Button onClick={openMenu} sx={{ my: 2, color: 'white', marginLeft: '35%' }}> {/* SERVICES TABLE */}
                услуги
                <ArrowDropDown color='secondary' sx={{ width: '40px' }} />
            </Button>
            {openDropMenu ?
                <Box sx={{ display: 'flex', flexDirection: 'column', position: 'absolute', bottom: '-285px', left: '-120px', background: 'white', zIndex: '10', width: '240px', padding: '10px' }}>
                    <Box onMouseEnter={() => onMouseEnter('services')} onMouseLeave={onMouseLeave} className='menuItem' onClick={() => goToInfoPage('panel1')}>
                        <Typography color="primary" className="menuItemText">Услуги технического заказчика</Typography>
                        <ChevronRightIcon color="secondary" />
                        {menu === 'services' ?
                            <TechCustomerMenu onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} menu={menu} />
                            :
                            null
                        }
                    </Box>
                    <Box onClick={() => goToInfoPage('panel2')}>
                        <Typography color="primary" className='menuItem'>Независимая экспертиза сметной документации</Typography>
                    </Box>
                    <Box onMouseEnter={() => onMouseEnter('consalt')} onMouseLeave={onMouseLeave} onClick={() => goToInfoPage('panel3')} className='menuItem'>
                        <Typography color="primary" className='menuItemText' >Сметный консалтинг</Typography>
                        <ChevronRightIcon color="secondary" />
                        {menu === 'consalt' ?
                            <ConsaltMenu onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} menu={menu} />
                            :
                            null
                        }
                    </Box>
                    <Box onClick={() => goToInfoPage('panel4')}>
                        <Typography color="primary" className='menuItem'>Финансово-технический аудит</Typography>
                    </Box>
                    <Box onMouseEnter={() => onMouseEnter('documentation')} onMouseLeave={onMouseLeave} onClick={() => goToInfoPage('panel5')} className='menuItem'>
                        <Typography color="primary" className='menuItemText' >Составление сметной документации</Typography>
                        <ChevronRightIcon color="secondary" />
                        {menu === 'documentation' ?
                            <CreateDocMenu onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} menu={menu} />
                            :
                            null
                        }
                    </Box>
                </Box>
                :
                null
            }
        </Box>
    )
}

export default Services;
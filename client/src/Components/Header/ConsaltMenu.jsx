import React from "react";
import './styles.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ConsaltMenu = ({onMouseLeave, onMouseEnter}) => {

    return (
        <Box onMouseEnter={() => onMouseEnter('consalt')} onMouseLeave={onMouseLeave} sx={{ position: 'absolute', top: '17px', background: 'white', right: '-255px', width: '240px', padding: '10px', zIndex: '20', border: '0.5px solid #FE793D' }}>
            <Box  className='menuItemConsalt' >
                <Typography className="menuItemText" color="primary">Сметный консалтинг подрядчикам, субподрядчикам и ИП</Typography>
            </Box>
            <Box  className='menuItemConsalt' >
                <Typography className="menuItemText" color="primary">Сметный консалтинг государственным заказчикам</Typography>
            </Box>
            <Box    className='menuItemConsalt' >
                <Typography className="menuItemText" color="primary">Сметный консалтинг проектным организациям</Typography>
            </Box>
            <Box   className='menuItemConsalt' >
                <Typography className="menuItemText" color="primary">Сметный консалтинг проектным организациям</Typography>
            </Box>
            <Box  className='menuItemConsalt' >
                <Typography className="menuItemText" color="primary">Сметный консалтинг физическим лицам</Typography>
            </Box>
        </Box>
    )
}

export default ConsaltMenu;
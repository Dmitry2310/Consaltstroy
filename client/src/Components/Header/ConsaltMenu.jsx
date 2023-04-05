import React from "react";
import './styles.css';
import { useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ConsaltMenu = ({ onMouseLeave, onMouseEnter }) => {

    const dispatch = useDispatch();

    const goToParagraf = (paragraf) => {
        dispatch({ type: 'GO_TO_PARGRAF', payload: paragraf });
    };

    return (
        <Box onMouseEnter={() => onMouseEnter('consalt')} onMouseLeave={onMouseLeave} sx={{ position: 'absolute', top: '0', background: 'white', right: '-240px', width: '240px', padding: '10px', zIndex: '20', border: '0.5px solid #FE793D' }}>
            <Box className='menuItemConsalt' onClick={() => goToParagraf('paragraf3.1')}>
                <Typography className="menuItemText" color="primary">Сметный консалтинг подрядчикам, субподрядчикам и ИП</Typography>
            </Box>
            <Box className='menuItemConsalt' onClick={() => goToParagraf('paragraf3.2')}>
                <Typography className="menuItemText" color="primary">Сметный консалтинг государственным заказчикам</Typography>
            </Box>
            <Box className='menuItemConsalt' onClick={() => goToParagraf('paragraf3.3')}>
                <Typography className="menuItemText" color="primary">Сметный консалтинг проектным организациям</Typography>
            </Box>
            <Box className='menuItemConsalt' onClick={() => goToParagraf('paragraf3.4')}>
                <Typography className="menuItemText" color="primary">Сметный консалтинг проектным организациям</Typography>
            </Box>
            <Box className='menuItemConsalt' onClick={() => goToParagraf('paragraf3.5')}>
                <Typography className="menuItemText" color="primary">Сметный консалтинг физическим лицам</Typography>
            </Box>
        </Box>
    )
}

export default ConsaltMenu;
import React from "react";

import { Container } from "@mui/system";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{ width: '100%', height: '94px', background: '#054982', marginTop: '30px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Box sx={{ width: '280px' }}>
                <Typography color='white' sx={{ fontSize: '12px', fontWeight: '400', textDecoration: 'underline' }}>Контакты</Typography>
                <Typography color='white' sx={{ fontSize: '12px', fontWeight: '400' }}>тел.</Typography>
                <Typography color='white' sx={{ fontSize: '12px', fontWeight: '400' }}>email: keskonsalt@yandex.ru</Typography>
            </Box>
        </Box>
    )
}

export default Footer;
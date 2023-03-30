import React from "react";
import './styles.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const TechCustomerMenu = ({onMouseLeave, onMouseEnter}) => {

    return (
        <Box onMouseEnter={() => onMouseEnter('services')} onMouseLeave={onMouseLeave} sx={{ position: 'absolute', top: '30px', background: 'white', right: '-275px', width: '260px', padding: '10px', zIndex: '20', border: '0.5px solid #FE793D' }}>
            <Box  className='menuItemConsalt' >
                <Typography className="menuItemText" color="primary">Оформление земельно-правовых отношений</Typography>
            </Box>
            <Box  className='menuItemConsalt' >
                <Typography className="menuItemText" color="primary">Получение исходно-разрешительной документации на предпроектной стадии</Typography>
            </Box>
            <Box    className='menuItemConsalt' >
                <Typography className="menuItemText" color="primary">Согласование проектных документов на стадии разработки «Проектной документации»</Typography>
            </Box>
            <Box   className='menuItemConsalt' >
                <Typography className="menuItemText" color="primary">Согласование проектной и рабочей документации</Typography>
            </Box>
            <Box  className='menuItemConsalt' >
                <Typography className="menuItemText" color="primary">Сдача-приемка объекта</Typography>
            </Box>
        </Box>
    )
}

export default TechCustomerMenu;
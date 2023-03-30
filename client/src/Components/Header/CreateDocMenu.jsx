import React from "react";
import './styles.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const CreateDocMenu = ({onMouseLeave, onMouseEnter}) => {

    return (
        <Box onMouseEnter={() => onMouseEnter('documentation')} onMouseLeave={onMouseLeave} sx={{ position: 'absolute', top: '30px', background: 'white', right: '-255px', width: '240px', padding: '10px', zIndex: '20', border: '0.5px solid #FE793D' }}>
            <Box  className='menuItemConsalt' >
                <Typography className="menuItemText" color="primary">Разработка локальных, объектных смет, сводного сметного расчета</Typography>
            </Box>
            <Box  className='menuItemConsalt' >
                <Typography className="menuItemText" color="primary">Прохождение государственной экспертизы</Typography>
            </Box>
            <Box    className='menuItemConsalt' >
                <Typography className="menuItemText" color="primary">Составление форм КС-2, КС-3</Typography>
            </Box>
            <Box   className='menuItemConsalt' >
                <Typography className="menuItemText" color="primary">Разработка фирменных сметных нормативов</Typography>
            </Box>
        </Box>
    )
}

export default CreateDocMenu;
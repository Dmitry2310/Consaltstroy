/* import React from "react";
import './styles.css';
import { useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const CreateDocMenu = ({ onMouseLeave, onMouseEnter }) => {

    const dispatch = useDispatch();

    const goToParagraf = (paragraf) => {
        dispatch({ type: 'GO_TO_PARGRAF', payload: paragraf });
    };

    return (
        <Box onMouseEnter={() => onMouseEnter('documentation')} onMouseLeave={onMouseLeave} sx={{ position: 'absolute', top: '0', background: 'white', right: '-240px', width: '240px', padding: '10px', zIndex: '20', border: '0.5px solid #FE793D' }}>
            <Box className='menuItemConsalt' onClick={() => goToParagraf('paragraf5.1')}>
                <Typography className="menuItemText" color="primary">Разработка локальных, объектных смет, сводного сметного расчета</Typography>
            </Box>
            <Box className='menuItemConsalt' onClick={() => goToParagraf('paragraf5.2')} >
                <Typography className="menuItemText" color="primary">Прохождение государственной экспертизы</Typography>
            </Box>
            <Box className='menuItemConsalt' onClick={() => goToParagraf('paragraf5.3')}>
                <Typography className="menuItemText" color="primary">Составление форм КС-2, КС-3</Typography>
            </Box>
            <Box className='menuItemConsalt' onClick={() => goToParagraf('paragraf5.4')}>
                <Typography className="menuItemText" color="primary">Разработка фирменных сметных нормативов</Typography>
            </Box>
        </Box>
    )
};

export default CreateDocMenu; */
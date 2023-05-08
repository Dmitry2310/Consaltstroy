import React from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearUser } from "./../actions/auth";
import { useEffect } from "react";
import { useState } from "react";
import decode from "jwt-decode";
import { useLocation } from "react-router-dom";

import Box from '@mui/material/Box';
import { Button, Typography } from "@mui/material";


const Footer = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [isToken, setIsToken] = useState(false);
    const token = useSelector((state) => state.auth.profile?.token)

    const authChange = () => {
        if (!token) {
            navigate('/login');
        } else {
            localStorage.clear();
            dispatch(clearUser());
        }
    };

    useEffect(() => {
        if (token) {
            setIsToken(true)
        } else {
            setIsToken(false)
        }
    }, [token]);

    useEffect(() => {
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                setIsToken(false)
            } else return;
        }
    }, [location, token]);

    return (
        <Box sx={{ width: '100%', height: '94px', background: '#054982', marginTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button variant="contained" color={isToken ? "secondary" : "primary"} sx={{ marginLeft: '30px' }} onClick={authChange}>
                <Typography color="white">
                    {token ? 'Выйти' : 'Войти'}
                </Typography>
            </Button>
            <Box sx={{ width: { xs: '200px', md: '280px' }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', gap: '5px'}}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', color: 'white' }}>
                        <Typography variant="caption"> + 7 (916)053-37-91 </Typography>
                        <Typography variant="caption"> + 7 (903)777-10-13 </Typography>
                    </Box>
                </Box>
                <Typography color='white' sx={{ fontSize: '12px', fontWeight: '400' }}>email: keskonsalt@yandex.ru</Typography>
            </Box>
        </Box>
    )
}

export default Footer;
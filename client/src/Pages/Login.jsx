import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { signIn } from "./../actions/auth";

import { Grid, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import { Container } from "@mui/system";
import Button from '@mui/material/Button';
import Footer from "../Components/Footer";
import TextField from '@mui/material/TextField';

const Login = () => {

    const [formData, setFormData] = useState({ name: '', password: '' });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signIn(formData, navigate));
    };

    const changeData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    return (
        <>
            <Container sx={{ display: 'flex', flexGrow: '2', alignItems: 'center' }}>
                <Container maxWidth="xs">
                    <Paper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }} elevation={3}>
                        <Typography variant="h5" sx={{ margin: '15px' }}>Войти</Typography>
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <Grid container spacing={3} >
                                <Grid item xs={12} >
                                    <TextField id="outlined-controlled" value={formData.name} required fullWidth name="name" label={'Логин'} color="secondary" variant="outlined" type="text" onChange={(e) => changeData(e)} />
                                </Grid>
                                <Grid item xs={12} >
                                    <TextField id="outlined-controlled" value={formData.password} required fullWidth name="password" label={'Пароль'} color="secondary" variant="outlined" onChange={(e) => changeData(e)} />
                                </Grid>
                            </Grid>
                            <Button type="submit" fullWidth variant="contained" color="primary" sx={{ marginTop: '30px' }}>
                                Войти
                            </Button>
                        </form>
                    </Paper>
                </Container>
            </Container>
            <Footer />
        </>
    )
};

export default Login;